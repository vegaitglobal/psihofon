from django.db import models
from django.utils.translation import gettext_lazy as _


class MentalState(models.Model):
    class Meta:
        verbose_name = _('Mentalno stanje')
        verbose_name_plural = _('Mentalno stanje')

    name = models.CharField(
        verbose_name=_('naziv'),
        max_length=255,
    )
    exercise_list_label = models.CharField(
        verbose_name=_('naslov za listu vežbi'),
        max_length=255,
        help_text=_(
            'Ovaj naslov će se koristiti pri prezentovanju '
            'liste vežbi ovog mentalnog stanja'
        )
    )

    def __str__(self):
        return self.name
