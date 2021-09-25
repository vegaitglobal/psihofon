from django.db import models
from django.utils.translation import gettext_lazy as _


class MentalState(models.Model):
    class Meta:
        verbose_name = _('Mental State')
        verbose_name_plural = _('Mental States')

    name = models.CharField(
        verbose_name=_('name'),
        max_length=255,
    )
    exercise_list_label = models.CharField(
        verbose_name=_('exercise list label'),
        max_length=255,
    )

    def __str__(self):
        return self.name
