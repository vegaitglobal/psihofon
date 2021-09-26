from django.db import models
from django.utils.translation import gettext_lazy as _


class MentalStateExercise(models.Model):
    class Meta:
        verbose_name = _('Vežba')
        verbose_name_plural = _('Vežbe')

    title = models.CharField(
        verbose_name=_('naslov'),
        max_length=255,
    )
    description = models.TextField(
        verbose_name=_('opis'),
    )
    recommendation = models.TextField(
        verbose_name=_('preporuka'),
        blank=True,
        default='',
    )
    mental_state = models.ForeignKey(
        to='psihofon.MentalState',
        verbose_name=_('mentalno stanje'),
        on_delete=models.CASCADE,
        related_name='exercises'
    )

    def __str__(self):
        return self.title
