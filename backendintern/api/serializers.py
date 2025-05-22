from rest_framework import serializers
from .models import ConctactUs,EnrollmentForm


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConctactUs
        fields = '__all__'


class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = EnrollmentForm
        fields = '__all__'



from rest_framework import serializers
from .models import Webinar, Registration,Speaker

class WebinarSerializer(serializers.ModelSerializer):
    registration_count = serializers.IntegerField(read_only=True)
    class Meta:
        model = Webinar
        fields = '__all__'
        read_only_fields = ('created_at', 'updated_at')

class RegistrationSerializer(serializers.ModelSerializer):
    webinar_details = serializers.SerializerMethodField()

    class Meta:
        model = Registration
        fields = '__all__'
        read_only_fields = ('registration_code', 'registered_at', 'attended')

    def get_webinar_details(self, obj):
        return {
            'title': obj.webinar.title,
            'scheduled_time': obj.webinar.scheduled_time,
            'presenter': obj.webinar.presenter,
            'platform': obj.webinar.get_platform_display(),
            'meeting_link': obj.webinar.meeting_link,
            'duration': obj.webinar.duration,
        }

    def validate(self, data):
        webinar = data.get('webinar') if 'webinar' in data else self.instance.webinar if self.instance else None
        
        if not webinar.is_active:
            raise serializers.ValidationError("This webinar is not currently active for registration.")
        
        if webinar.max_participants and webinar.registration_count >= webinar.max_participants:
            raise serializers.ValidationError("This webinar has reached maximum participants.")
        
        if Registration.objects.filter(webinar=webinar, email=data.get('email')).exists():
            raise serializers.ValidationError("This email is already registered for the webinar.")
        
        return data


class SpeakerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Speaker
        fields = '__all__'
        read_only_fields = ('submitted_at', 'status', 'notes')