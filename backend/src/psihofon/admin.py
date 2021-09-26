from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Group
from modeltranslation.admin import TranslationAdmin, TranslationStackedInline
from psihofon.models import (
    Organization, User, SelfEmpowermentExercise,
    CrisisExercise, Questionnaire, Question, MentalState,
    MentalStateExercise, Answer
)

admin.site.unregister(Group)


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


class QuestionInline(TranslationStackedInline):
    model = Question
    classes = ['collapse']
    extra = 1


class AnswerInline(TranslationStackedInline):
    model = Answer
    classes = ['collapse']
    max_num = 5
    extra = 1


@admin.register(Questionnaire)
class QuestionnaireAdmin(TranslationAdmin):
    inlines = [
        AnswerInline,
        QuestionInline,
    ]

    def has_add_permission(self, request):
        return not Questionnaire.exists()

    def has_delete_permission(self, request, obj=None):
        return False


class MentalStateExerciseInline(TranslationStackedInline):
    model = MentalStateExercise
    classes = ['collapse']
    extra = 1


@admin.register(MentalState)
class MentalStateAdmin(TranslationAdmin):
    inlines = [
        MentalStateExerciseInline,
    ]
