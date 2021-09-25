from django.db import models
from django.utils.translation import gettext_lazy as _

class CrisisExercise(models.Model):
    class Meta:
        verbose_name = _('CrisisExercise')
        verbose_name_plural = _('CrisisExercises')

    title = models.CharField(
        verbose_name=_('title'),
        max_length=255,
    )
    description = models.TextField(
        verbose_name=_('description')
    )
