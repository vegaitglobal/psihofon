from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import CIEmailField
from django.utils.translation import gettext_lazy as _
from simple_history.models import HistoricalRecords


class User(AbstractUser):
    class Meta:
        verbose_name = _('User')
        verbose_name_plural = _('Users')

    email = CIEmailField(
        verbose_name=_('email'),
        db_index=True,
        unique=True
    )

    # used for login
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    history = HistoricalRecords()

    def get_username(self):
        return self.email
