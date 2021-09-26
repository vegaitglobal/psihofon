from django.db import models
from django.utils.translation import gettext_lazy as _
from psihofon.models.singleton import SingletonModel


class Questionnaire(SingletonModel):
    class Meta:
        verbose_name = _('Upitnik')
        verbose_name_plural = _('Upitnici')

    description = models.TextField(
        verbose_name=_('opis'),
    )

    def __str__(self):
        return str(_('Upitnik'))
