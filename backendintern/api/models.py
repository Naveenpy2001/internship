from django.db import models

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