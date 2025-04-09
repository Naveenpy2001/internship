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
