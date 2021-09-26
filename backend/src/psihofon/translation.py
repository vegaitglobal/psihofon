import simple_history
from modeltranslation.translator import register, TranslationOptions
from psihofon.models import (
    Organization, MentalState, Question, Questionnaire,
    SelfEmpowermentExercise, CrisisExercise, Answer,
    MentalStateExercise
)


@register(Organization)
class OrganizationOptions(TranslationOptions):
    fields = ('name', 'city')


simple_history.register(Organization, inherit=True)


@register(SelfEmpowermentExercise)
class SelfEmpowermentExerciseOptions(TranslationOptions):
    fields = ('title', 'preparation', 'description', 'explanation', 'duration_description')


simple_history.register(SelfEmpowermentExercise, inherit=True)


@register(CrisisExercise)
class CrisisExerciseOptions(TranslationOptions):
    fields = ('title', 'description')


simple_history.register(CrisisExercise, inherit=True)


@register(Answer)
class AnswerOptions(TranslationOptions):
    fields = ('text',)


simple_history.register(Answer, inherit=True)


@register(MentalState)
class MentalStateOptions(TranslationOptions):
    fields = ('name', 'exercise_list_label',)


simple_history.register(MentalState, inherit=True)


@register(Question)
class QuestionOptions(TranslationOptions):
    fields = ('text',)


simple_history.register(Question, inherit=True)


@register(Questionnaire)
class QuestionnaireOptions(TranslationOptions):
    fields = ('description',)


simple_history.register(Questionnaire, inherit=True)


@register(MentalStateExercise)
class MentalStateExerciseOptions(TranslationOptions):
    fields = ('title', 'description', 'recommendation')


simple_history.register(MentalStateExercise, inherit=True)
