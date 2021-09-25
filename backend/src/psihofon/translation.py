from modeltranslation.translator import register, TranslationOptions
from psihofon.models import (
    Organization, MentalState, Question, Questionnaire,
    SelfEmpowermentExercise, CrisisExercise, Answer,
    MentalStateExercise
)


@register(Organization)
class OrganizationOptions(TranslationOptions):
    fields = ('name', 'city')


@register(SelfEmpowermentExercise)
class SelfEmpowermentExerciseOptions(TranslationOptions):
    fields = ('title', 'preparation', 'description', 'explanation', 'duration_description')


@register(CrisisExercise)
class CrisisExerciseOptions(TranslationOptions):
    fields = ('title', 'description')


@register(Answer)
class AnswerOptions(TranslationOptions):
    fields = ('text',)


@register(MentalState)
class MentalStateOptions(TranslationOptions):
    fields = ('name', 'exercise_list_label',)


@register(Question)
class QuestionOptions(TranslationOptions):
    fields = ('text',)


@register(Questionnaire)
class QuestionnaireOptions(TranslationOptions):
    fields = ('description',)


@register(MentalStateExercise)
class MentalStateExerciseOptions(TranslationOptions):
    fields = ('title', 'description', 'recommendation')
