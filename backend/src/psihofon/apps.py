from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class PsihofonConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'psihofon'
    verbose_name = _('Psihofon')
