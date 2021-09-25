from django.db import models
from django.utils.translation import gettext_lazy as _


class Organization(models.Model):
    class Meta:
        verbose_name = _('Organization')
        verbose_name_plural = _('Organizations')

    name = models.CharField(
        verbose_name=_('name'),
        max_length=255,
    )
    city = models.CharField(
        verbose_name=_('city'),
        max_length=255,
    )
    website_url = models.URLField(
        verbose_name=_('website URL'),
    )

    def __str__(self):
        return self.name
