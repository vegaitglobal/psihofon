from django.db import models
from django.utils.translation import gettext_lazy as _


class Answer(models.Model):
    class Meta:
        verbose_name = _('Odgovor')
        verbose_name_plural = _('Odgovori')

    text = models.TextField(
        verbose_name=_('tekst'),
    )
    order_number = models.SmallIntegerField(
        verbose_name=_('redni broj'),
    )
    questionnaire = models.ForeignKey(
        to='psihofon.Questionnaire',
        verbose_name=_('upitnik'),
        on_delete=models.CASCADE,
        related_name='answers'
    )
