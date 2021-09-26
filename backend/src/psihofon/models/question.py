from django.db import models
from django.utils.translation import gettext_lazy as _


class Question(models.Model):
    class Meta:
        verbose_name = _('Pitanje')
        verbose_name_plural = _('Pitanja')

    questionnaire = models.ForeignKey(
        to='psihofon.Questionnaire',
        verbose_name=_('upitnik'),
        on_delete=models.CASCADE,
        related_name='questions',
    )
    mental_state = models.ForeignKey(
        to='psihofon.MentalState',
        verbose_name=_('mentalno stanje'),
        on_delete=models.PROTECT,
    )
    text = models.TextField(
        verbose_name=_('tekst'),
    )
    order_number = models.SmallIntegerField(
        verbose_name=_('redni broj'),
    )

    def __str__(self):
        return str(_(f"Pitanje {self.order_number}"))
