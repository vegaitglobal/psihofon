from django.db import models
from django.utils.translation import gettext_lazy as _


class Question(models.Model):
    class Meta:
        verbose_name = _('Question')
        verbose_name_plural = _('Questions')

    questionnaire = models.ForeignKey(
        to='psihofon.Questionnaire',
        verbose_name=_('questionnaire'),
        on_delete=models.CASCADE,
    )
    mental_state = models.ForeignKey(
        to='psihofon.MentalState',
        verbose_name=_('mental state'),
        on_delete=models.PROTECT,
    )
    text = models.TextField(
        verbose_name=_('text'),
    )
    order_number = models.SmallIntegerField(
        verbose_name=_('order number'),
    )
