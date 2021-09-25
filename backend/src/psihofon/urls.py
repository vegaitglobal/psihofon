from django.urls import path
from psihofon.views import OrganizationAPIView
from psihofon.views import CrisisExerciseAPIView

urlpatterns = [
    path('organizations/', OrganizationAPIView.as_view(), name='organizations'),
    path('crisis-exercises/', CrisisExerciseAPIView.as_view(), name="crisis_exercises"),
]
