from django.db import models
from django.utils.translation import gettext_lazy as _


class Questionnaire(models.Model):
    class Meta:
        verbose_name = _('Upitnik')
        verbose_name_plural = _('Upitnici')

    description = models.TextField(
        verbose_name=_('opis'),
    )
