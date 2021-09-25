from django.db import models
from django.utils.translation import gettext_lazy as _


class SelfEmpowermentExercise(models.Model):
    class Meta:
        verbose_name = _('Self Empowerment Exercise')
        verbose_name_plural = _('Self Empowerment Exercises')

    title = models.CharField(
        verbose_name=_('title'),
        max_length=255,
    )
    week_number = models.SmallIntegerField(
        verbose_name=_('week number'),
    )
    preparation = models.TextField(
        verbose_name=_('preparation'),
    )
    description = models.TextField(
        verbose_name=_('description'),
    )
    explanation = models.TextField(
        verbose_name=_('explanation'),
    )
    duration_description = models.TextField(
        verbose_name=_('duration description'),
        default='',
    )

    def __str__(self):
        return self.title
