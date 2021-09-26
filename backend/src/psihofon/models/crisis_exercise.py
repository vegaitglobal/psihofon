from django.db import models
from django.utils.translation import gettext_lazy as _


class CrisisExercise(models.Model):
    class Meta:
        verbose_name = _('Vežba za krizno stanje')
        verbose_name_plural = _('Vežbe za krizno stanje')

    title = models.CharField(
        verbose_name=_('naslov'),
        max_length=255,
    )
    description = models.TextField(
        verbose_name=_('opis')
    )

    def __str__(self):
        return self.title
