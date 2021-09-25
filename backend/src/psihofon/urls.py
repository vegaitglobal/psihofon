from django.urls import path
from psihofon.views import OrganizationAPIView

urlpatterns = [
    path('organizations/', OrganizationAPIView.as_view(), name='organizations'),
]
