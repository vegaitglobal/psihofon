from modeltranslation.translator import register, TranslationOptions
from psihofon.models import Organization
from psihofon.models import SelfEmpowermentExercise
from psihofon.models import CrisisExercise


@register(Organization)
class OrganizationOptions(TranslationOptions):
    fields = ('name', 'city')


@register(SelfEmpowermentExercise)
class SelfEmpowermentExerciseOptions(TranslationOptions):
    fields = ('title', 'preparation', 'description', 'explanation', 'duration_description')


@register(CrisisExercise)
class CrisisExerciseOptions(TranslationOptions):
    fields = ('title', 'description')
