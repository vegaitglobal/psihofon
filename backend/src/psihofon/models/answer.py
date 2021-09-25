from django.db import models
from django.utils.translation import gettext_lazy as _


class Answer(models.Model):
    class Meta:
        verbose_name = _('Answer')
        verbose_name_plural = _('Answers')

    text = models.TextField(
        verbose_name=_('text'),
    )
    order_number = models.SmallIntegerField(
        verbose_name=_('order number'),
    )
    questionnaire = models.ForeignKey(
        to='psihofon.Questionnaire',
        verbose_name=_('questionnaire'),
        on_delete=models.CASCADE,
    )
