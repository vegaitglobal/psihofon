from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.schemas.openapi import AutoSchema
from psihofon.models import (
    Organization, CrisisExercise, SelfEmpowermentExercise,
    MentalState, Questionnaire,
)
from psihofon.serializers import (
    OrganizationSerializer, CrisisExerciseSerializer,
    SelfEmpowermentExerciseSerializer, MentalStateSerializer,
    QuestionnaireSerializer,
)


class OrganizationAPIView(APIView):

    def get(self, request, format=None):
        organizations = Organization.objects.all()
        serializer = OrganizationSerializer(organizations, many=True)
        return Response(serializer.data)


class CrisisExerciseAPIView(APIView):

    def get(self, request, format=None):
        crisis_exercises = CrisisExercise.objects.all()
        serializer = CrisisExerciseSerializer(crisis_exercises, many=True)
        return Response(serializer.data)


class SelfEmpowermentExerciseAPIView(APIView):

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


class QuestionnaireAPIViewSchema(AutoSchema):

    def get_responses(self, path, method):
        return {
            '200': {
                'content': {
                    'application/json': {
                        'schema': {}
                    }
                },
            }
        }

    def get_operation_id(self, path, method):
        return 'retrieveQuestionnaire'


class QuestionnaireAPIView(APIView):
    """
    Returns a single Questionnaire object (the only one)
    """
    schema = QuestionnaireAPIViewSchema()

    def get(self, request, format=None):
        questionnaire = Questionnaire.load()
        serializer = QuestionnaireSerializer(questionnaire)
        return Response(serializer.data)
