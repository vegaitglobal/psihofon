from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from modeltranslation.admin import TranslationAdmin

from psihofon.models import Organization, User, SelfEmpowermentExercise, CrisisExercise


@admin.register(Organization)
class OrganizationAdmin(TranslationAdmin):
    pass


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    pass


@admin.register(SelfEmpowermentExercise)
class SelfEmpowermentExerciseAdmin(TranslationAdmin):
    pass


@admin.register(CrisisExercise)
class CrisisExerciseAdmin(TranslationAdmin):
    pass
