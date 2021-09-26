from django.db import models
from django.utils.translation import gettext_lazy as _


class SelfEmpowermentExercise(models.Model):
    class Meta:
        verbose_name = _('Vežba za samoosnaživanje')
        verbose_name_plural = _('Vežbe za samoosnaživanje')

    title = models.CharField(
        verbose_name=_('naslov'),
        max_length=255,
    )
    week_number = models.SmallIntegerField(
        verbose_name=_('redni broj nedelje'),
    )
    preparation = models.TextField(
        verbose_name=_('priprema'),
    )
    description = models.TextField(
        verbose_name=_('opis'),
    )
    explanation = models.TextField(
        verbose_name=_('objašnjenje'),
    )
    duration_description = models.TextField(
        verbose_name=_('opis dužine'),
        default='',
    )

    def __str__(self):
        return self.title
