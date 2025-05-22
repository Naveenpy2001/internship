from django.urls import path,include
from .views import *

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'webinars', WebinarViewSet,basename='webinars-list')
router.register(r'registrations', RegistrationViewSet,basename='admin-web')
router.register(r'speakers', SpeakerViewSet,basename='speakers')

urlpatterns = [
    path('contact/',ContactView.as_view(),name='contact-us'),
    path('enroll/',EnrollmentView.as_view(),name='contact-us'),
    path('', include(router.urls)),
]