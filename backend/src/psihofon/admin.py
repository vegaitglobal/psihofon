from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from modeltranslation.admin import TranslationAdmin, TranslationStackedInline
from psihofon.models import (
    Organization, User, SelfEmpowermentExercise,
    CrisisExercise, Questionnaire, Question, MentalState
)
from psihofon.models.answer import Answer
from psihofon.models.mental_state_exercises import MentalStateExercise


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
    extra = 1


class AnswerInline(TranslationStackedInline):
    model = Answer
    extra = 1


@admin.register(Questionnaire)
class QuestionnaireAdmin(TranslationAdmin):
    inlines = [
        QuestionInline,
        AnswerInline,
    ]


class MentalStateExerciseInline(TranslationStackedInline):
    model = MentalStateExercise
    extra = 1


@admin.register(MentalState)
class MentalStateAdmin(TranslationAdmin):
    inlines = [
        MentalStateExerciseInline,
    ]
