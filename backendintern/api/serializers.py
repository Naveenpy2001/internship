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