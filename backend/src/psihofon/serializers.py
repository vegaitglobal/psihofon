from rest_framework import serializers
from psihofon.models import Organization, SelfEmpowermentExercise, CrisisExercise


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = [
            'id', 'name', 'city', 'website_url',
        ]


class SelfEmpowermentExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = SelfEmpowermentExercise
        fields = [
            'id', 'title', 'week_number', 'preparation',
            'description', 'explanation', 'duration_description',
        ]


class CrisisExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = CrisisExercise
        fields = ['id', 'title', 'description']
