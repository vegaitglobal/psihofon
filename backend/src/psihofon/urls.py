from django.urls import path
from psihofon.views import (
    OrganizationAPIView, SelfEmpowermentExerciseAPIView, CrisisExerciseAPIView,
    MentalStateAPIView, QuestionnaireAPIView,
)

urlpatterns = [
    path('organizations/', OrganizationAPIView.as_view(), name='organizations'),
    path('crisis-exercises/', CrisisExerciseAPIView.as_view(), name="crisis_exercises"),
    path('self-empowerment-exercises/', SelfEmpowermentExerciseAPIView.as_view(), name='self_empowerment_exercises'),
    path('mental-states/', MentalStateAPIView.as_view(), name="mental_state"),
    path('questionnaire/', QuestionnaireAPIView.as_view(), name="mental_state"),
]
