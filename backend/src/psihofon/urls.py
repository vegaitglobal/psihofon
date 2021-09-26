from django.urls import path
from rest_framework.schemas import get_schema_view
from psihofon.views import (
    OrganizationAPIView, SelfEmpowermentExerciseAPIView, CrisisExerciseAPIView,
    MentalStateAPIView, QuestionnaireAPIView,
)

api_schema_path = path('', get_schema_view(
    title='Psihofon API',
    description='Psihofon API documentation',
    version='1',
), name='openapi_schema'),

urlpatterns = [
    api_schema_path,
    path('organizations/', OrganizationAPIView.as_view(), name='organizations'),
    path('crisis-exercises/', CrisisExerciseAPIView.as_view(), name='crisis_exercises'),
    path('self-empowerment-exercises/', SelfEmpowermentExerciseAPIView.as_view(), name='self_empowerment_exercises'),
    path('mental-states/', MentalStateAPIView.as_view(), name='mental_state'),
    path('questionnaire/', QuestionnaireAPIView.as_view(), name='questionnaire'),
]
