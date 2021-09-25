from django.urls import path
from psihofon.views import OrganizationAPIView, SelfEmpowermentExerciseAPIView, CrisisExerciseAPIView

urlpatterns = [
    path('organizations/', OrganizationAPIView.as_view(), name='organizations'),
    path('crisis-exercises/', CrisisExerciseAPIView.as_view(), name="crisis_exercises"),
    path('self-empowerment-exercises/', SelfEmpowermentExerciseAPIView.as_view(), name='self_empowerment_exercises'),
]
