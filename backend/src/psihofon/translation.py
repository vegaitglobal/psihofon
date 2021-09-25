from modeltranslation.translator import register, TranslationOptions
from psihofon.models import Organization, CrisisExercise


@register(Organization)
class OrganizationOptions(TranslationOptions):
    fields = ('name', 'city')


@register(CrisisExercise)
class CrisisExerciseOptions(TranslationOptions):
    fields('title', 'description')
