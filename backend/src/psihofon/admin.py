from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Group
from modeltranslation.admin import TranslationAdmin, TranslationStackedInline
from simple_history.admin import SimpleHistoryAdmin
from psihofon.models import (
    Organization, User, SelfEmpowermentExercise,
    CrisisExercise, Questionnaire, Question, MentalState,
    MentalStateExercise, Answer
)

admin.site.unregister(Group)


@admin.register(User)
class UserAdmin(BaseUserAdmin, SimpleHistoryAdmin):
    pass


@admin.register(Organization)
class OrganizationAdmin(TranslationAdmin, SimpleHistoryAdmin):
    pass


@admin.register(SelfEmpowermentExercise)
class SelfEmpowermentExerciseAdmin(TranslationAdmin, SimpleHistoryAdmin):
    pass


@admin.register(CrisisExercise)
class CrisisExerciseAdmin(TranslationAdmin, SimpleHistoryAdmin):
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
class QuestionnaireAdmin(TranslationAdmin, SimpleHistoryAdmin):
    inlines = [
        AnswerInline,
        QuestionInline,
    ]

    def has_add_permission(self, request):
        return not Questionnaire.exists()


class MentalStateExerciseInline(TranslationStackedInline):
    model = MentalStateExercise
    classes = ['collapse']
    extra = 1


@admin.register(MentalState)
class MentalStateAdmin(TranslationAdmin, SimpleHistoryAdmin):
    inlines = [
        MentalStateExerciseInline,
    ]
