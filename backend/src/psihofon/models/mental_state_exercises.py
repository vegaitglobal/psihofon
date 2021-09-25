from django.db import models
from django.utils.translation import gettext_lazy as _


class MentalStateExercise(models.Model):
    class Meta:
        verbose_name = _('Mental State Exercise')
        verbose_name_plural = _('Mental State Exercises')

    title = models.CharField(
        verbose_name=_('title'),
        max_length=255,
    )
    description = models.TextField(
        verbose_name=_('description'),
    )
    recommendation = models.TextField(
        verbose_name=_('recommendation'),
    )
    mental_state = models.ForeignKey(
        to='psihofon.MentalState',
        verbose_name=_('mental state'),
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.title
