from rest_framework.views import APIView
from rest_framework.response import Response
from psihofon.models import Organization
from psihofon.serializers import OrganizationSerializer


class OrganizationAPIView(APIView):
    serializer_class = OrganizationSerializer

    def get(self, request, format=None):
        organizations = Organization.objects.all()
        serializer = OrganizationSerializer(organizations, many=True)
        return Response(serializer.data)
