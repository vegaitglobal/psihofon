from rest_framework.views import APIView
from rest_framework.response import Response
from psihofon.models import Organization, CrisisExercise
from psihofon.serializers import OrganizationSerializer, CrisisExerciseSerializer


class OrganizationAPIView(APIView):
    serializer_class = OrganizationSerializer

    def get(self, request, format=None):
        organizations = Organization.objects.all()
        serializer = OrganizationSerializer(organizations, many=True)
        return Response(serializer.data)


class CrisisExerciseAPIView(APIView):
    serializer_class = CrisisExerciseSerializer

    def get(self, request, format=None):
        crisis_exercises = CrisisExercise.objects.all()
        serializer = CrisisExerciseSerializer(crisis_exercises, many=True)
        return Response(serializer.data)
