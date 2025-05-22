from rest_framework import viewsets
from rest_framework import status
from rest_framework.views import APIView
from .models import ConctactUs,EnrollmentForm
from .serializers import ContactSerializer,EnrollmentSerializer
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings


class ContactView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            contact = serializer.save()  # Save user details

            # Get sender email from settings
            sender_email = settings.EMAIL_HOST_USER

            # User Email
            user_subject = "Thank You for Contacting Us!"
            user_message = f"""
Hi {contact.name},

Thank you for reaching out to us! Our team has received your message and will get back to you shortly.

Your inquiry details:
- **Interest:** {contact.interest}
- **Message:** {contact.message}

We appreciate your interest and look forward to assisting you.

Best Regards,
TSAR-IT PVT LTD  
https://www.tsaritservices.com/  
+91 9491301258
            """

            # Admin Email (Sent to your own email)
            admin_subject = "New Contact Form Submission"
            admin_message = f"""
Hello,

A new user has submitted the contact form. Here are the details:

- **Name:** {contact.name}
- **Email:** {contact.email}
- **Interest:** {contact.interest}
- **Message:** {contact.message}

Regards,  
TSAR-IT PVT LTD  
https://www.tsaritservices.com/  
+91 9491301258
            """

            send_mail(
                user_subject,
                user_message,
                sender_email, 
                [contact.email],  # Send email to the user's email
                fail_silently=False,
            )

            # Send email to yourself as admin
            send_mail(
                admin_subject,
                admin_message,
                sender_email,
                [sender_email],  # Send email to admin's email
                fail_silently=False,
            )

            return Response({
                "message": "Contact details saved.",
                "registered_user": serializer.data
            }, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request):
        contact = ConctactUs.objects.all()
        serialize = ContactSerializer(contact, many=True)
        return Response(serialize.data, status=status.HTTP_200_OK)

    

class EnrollmentView(APIView):
    def post(self, request):
        serializer = EnrollmentSerializer(data=request.data)
        if serializer.is_valid():
            contact = serializer.save()  # Save user details

            # Get sender email from settings
            sender_email = settings.EMAIL_HOST_USER

            # User Email
            user_subject = f"Successfully Enrolled in {contact.course}"
            user_message = f"""
Dear {contact.name},

We are excited to inform you that you have successfully enrolled in the {contact.course}!
We look forward to seeing you in the course and are confident you will gain valuable knowledge and skills.

Start Date: {contact.batch}

Please make sure to check your email for further instructions regarding the course materials and schedule.

If you have any questions, feel free to reach out to us at info@tsaritservices.com or call +91 9491301258.

Best Regards,  
TSAR-IT PVT LTD  
https://www.tsaritservices.com/  
+91 9491301258
            """

            # Admin Email (Sent to your own email)
            admin_subject = "New Enroll Form Submission"
            admin_message = f"""
Hello,

A new user has submitted the Enroll form. Here are the details:

Name: {contact.name}
Email: {contact.email}
Course: {contact.course}
Batch they are interested in: {contact.batch}

Regards,  
TSAR-IT PVT LTD
            """

            send_mail(
                user_subject,
                user_message,
                sender_email,
                [contact.email],
                fail_silently=False,
            )

            # Send email to yourself as admin
            send_mail(
                admin_subject,
                admin_message,
                sender_email,
                [sender_email],
                fail_silently=False,
            )

            return Response({
                "message": "Contact details saved.",
                "registered_user": serializer.data
            }, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        contact = EnrollmentForm.objects.all()
        serialize = EnrollmentSerializer(contact, many=True)
        return Response(serialize.data, status=status.HTTP_200_OK)





from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import Webinar, Registration,Speaker
from .serializers import WebinarSerializer, RegistrationSerializer,SpeakerSerializer
from rest_framework.decorators import action
from django.utils.timezone import now
from django.template.loader import render_to_string
from django.utils.html import strip_tags

class WebinarViewSet(viewsets.ModelViewSet):
    queryset = Webinar.objects.all().order_by('-scheduled_time')
    serializer_class = WebinarSerializer

    @action(detail=False, methods=['get'], url_path='upcoming')
    def upcoming_webinars(self, request):
        upcoming = self.get_queryset().filter(scheduled_time__gt=now())
        serializer = self.get_serializer(upcoming, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'], url_path='completed')
    def completed_webinars(self, request):
        completed = self.get_queryset().filter(scheduled_time__lte=now())
        serializer = self.get_serializer(completed, many=True)
        return Response(serializer.data)

class RegistrationViewSet(viewsets.ModelViewSet):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()


        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class SpeakerViewSet(viewsets.ModelViewSet):
    queryset = Speaker.objects.all().order_by('-submitted_at')
    serializer_class = SpeakerSerializer

    def perform_create(self, serializer):
        speaker = serializer.save()
        # Send confirmation email to admin
        self.send_admin_notification(speaker)
        # Send confirmation email to speaker
        self.send_speaker_confirmation(speaker)

    def send_admin_notification(self, speaker):
        subject = f"New Speaker Application: {speaker.topic}"
        html_message = render_to_string('admin_speaker_notification.html', {
            'speaker': speaker,
        })
        plain_message = strip_tags(html_message)
        send_mail(
            subject,
            plain_message,
            'webinars@yourdomain.com',
            ['admin@yourdomain.com'],  # Your admin email
            html_message=html_message,
            fail_silently=False,
        )

    def send_speaker_confirmation(self, speaker):
        subject = f"Speaker Application Received: {speaker.topic}"
        html_message = render_to_string('speaker_confirmation.html', {
            'speaker': speaker,
        })
        plain_message = strip_tags(html_message)
        send_mail(
            subject,
            plain_message,
            'webinars@yourdomain.com',
            [speaker.email],
            html_message=html_message,
            fail_silently=False,
        )

    @action(detail=True, methods=['patch'])
    def approve(self, request, pk=None):
        speaker = self.get_object()
        speaker.status = 'approved'
        speaker.notes = request.data.get('notes', '')
        speaker.save()
        speaker.send_speaker_confirmation()
        return Response({'status': 'approved'})

    @action(detail=True, methods=['patch'])
    def reject(self, request, pk=None):
        speaker = self.get_object()
        speaker.status = 'rejected'
        speaker.notes = request.data.get('notes', '')
        speaker.save()
        return Response({'status': 'rejected'})