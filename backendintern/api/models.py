from django.db import models
from django.utils import timezone
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags

# Create your models here.

class ConctactUs(models.Model):
    name = models.CharField(max_length=225,blank=True,null=True)
    email = models.CharField(max_length=225,blank=True,null=True)
    number = models.CharField(max_length=225,blank=True,null=True)
    interest = models.CharField(max_length=225,blank=True,null=True)
    message = models.TextField(blank=True,null=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.email} - {self.name}'


class EnrollmentForm(models.Model):
    name = models.CharField(max_length=225)
    email = models.CharField(max_length=225)
    phone = models.CharField(max_length=225)
    course = models.CharField(max_length=225)
    education = models.CharField(max_length=225)    
    experience = models.CharField(max_length=225)    
    batch = models.CharField(max_length=225)    

    created_at = models.DateTimeField(auto_now_add=True) 

    def __str__(self):
        return f'{self.name} - {self.email}'


class Webinar(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    presenter = models.CharField(max_length=100)
    platform = models.CharField(max_length=50, choices=[
        ('google_meet', 'Google Meet'),
        ('zoom', 'Zoom')
    ])
    meeting_link = models.URLField()
    scheduled_time = models.DateTimeField()
    duration = models.PositiveIntegerField(help_text="Duration in minutes")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    max_participants = models.PositiveIntegerField(null=True, blank=True)
    is_active = models.BooleanField(default=True)

    web_image = models.ImageField(upload_to='webinar_images/', null=True, blank=True)

    def __str__(self):
        return self.title

    @property
    def registration_count(self):
        return self.registrations.count()



class Registration(models.Model):
    webinar = models.ForeignKey(Webinar, on_delete=models.CASCADE, related_name='registrations')
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=100)
    heare_about_us = models.CharField(max_length=100)
    registration_code = models.CharField(max_length=20, unique=True, blank=True)
    registered_at = models.DateTimeField(auto_now_add=True)
    attended = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name} - {self.webinar.title}"

    def save(self, *args, **kwargs):
        is_new = self._state.adding

        super().save(*args, **kwargs)

        if is_new and not self.registration_code:
            self.registration_code = f"TIT{self.id:04d}"
            super().save(update_fields=['registration_code'])
            self.send_confirmation_email()

    def send_confirmation_email(self):
        subject = f"Webinar Registration Confirmation: {self.webinar.title}"
        try:
            html_message = render_to_string('registration_confirmation.html', {
                'registration': self,
                'webinar': self.webinar,
            })
        except Exception as e:
            html_message = f"<p>Thank you for registering for {self.webinar.title}.</p>"
        
        plain_message = strip_tags(html_message)
        from_email = 'tsaritservices@gmail.com'
        to = self.email

        send_mail(
            subject,
            plain_message,
            from_email,
            [to],
            html_message=html_message,
            fail_silently=False,
        )



from django.db import models

class Speaker(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    company = models.CharField(max_length=100, blank=True, null=True)
    position = models.CharField(max_length=100)
    topic = models.CharField(max_length=200)
    bio = models.TextField()
    linkedin = models.URLField(blank=True, null=True)
    submitted_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(
        max_length=20,
        choices=[
            ('pending', 'Pending'),
            ('approved', 'Approved'),
            ('rejected', 'Rejected')
        ],
        default='pending'
    )
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.name} - {self.topic}"

    def send_approval_email(self):
        subject = f"Speaker Application Approved: {self.topic}"
        html_message = render_to_string('emails/speaker_approval.html', {
            'speaker': self,
        })
        plain_message = strip_tags(html_message)
        send_mail(
            subject,
            plain_message,
            'webinars@yourdomain.com',
            [self.email],
            html_message=html_message,
            fail_silently=False,
        )