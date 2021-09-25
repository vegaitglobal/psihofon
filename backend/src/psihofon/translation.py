from modeltranslation.translator import register, TranslationOptions
from psihofon.models import Organization


@register(Organization)
class OrganizationOptions(TranslationOptions):
    fields = ('name', 'city')
