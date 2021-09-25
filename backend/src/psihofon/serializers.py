from rest_framework import serializers
from psihofon.models import (
    Organization, SelfEmpowermentExercise, CrisisExercise,
    MentalState, MentalStateExercise,
)


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


class MentalStateExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = MentalStateExercise
        fields = [
            'id', 'title', 'description',
            'recommendation'
        ]


class MentalStateSerializer(serializers.ModelSerializer):
    exercises = MentalStateExerciseSerializer(many=True, read_only=True)
    exerciseListLabel = serializers.CharField(source='exercise_list_label')

    class Meta:
        model = MentalState
        fields = [
            'name', 'exerciseListLabel', 'exercises'
        ]
