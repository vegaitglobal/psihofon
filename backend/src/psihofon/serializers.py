from rest_framework import serializers
from psihofon.models import Organization


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ['id', 'name', 'city', 'website_url']


class CrisisExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = CrisisExercise
        fields = ['id', 'title', 'description']
