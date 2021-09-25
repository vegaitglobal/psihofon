from rest_framework import serializers
from psihofon.models import Organization, SelfEmpowermentExercise, CrisisExercise


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = [
            'id', 'name', 'city', 'websiteUrl',
        ]


class SelfEmpowermentExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = SelfEmpowermentExercise
        fields = [
            'id', 'title', 'weekNumber', 'preparation',
            'description', 'explanation', 'durationDescription',
        ]


class CrisisExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = CrisisExercise
        fields = [
            'id', 'title', 'description'
        ]
