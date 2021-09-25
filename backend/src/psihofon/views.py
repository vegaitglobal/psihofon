from rest_framework.views import APIView
from rest_framework.response import Response
from psihofon.models import (
    Organization, CrisisExercise, SelfEmpowermentExercise,
    MentalState,
)
from psihofon.serializers import (
    OrganizationSerializer, CrisisExerciseSerializer,
    SelfEmpowermentExerciseSerializer, MentalStateSerializer,
)


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


class SelfEmpowermentExerciseAPIView(APIView):
    serializer_class = OrganizationSerializer

    def get(self, request, format=None):
        self_empowerment_exercises = SelfEmpowermentExercise.objects.all()
        serializer = SelfEmpowermentExerciseSerializer(self_empowerment_exercises, many=True)
        return Response(serializer.data)

class MentalStateAPIView(APIView):

    def get(self, request, format=None):
        """
        Returns all mental states with their exercises
        """
        mental_states = MentalState.objects.all()
        serializer = MentalStateSerializer(mental_states, many=True)
        return Response(serializer.data)
