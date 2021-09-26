from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.validators import MinValueValidator, MaxValueValidator
from django.core.exceptions import ValidationError


class Answer(models.Model):
    class Meta:
        verbose_name = _('Odgovor')
        verbose_name_plural = _('Odgovori')

    text = models.TextField(
        verbose_name=_('tekst'),
    )
    order_number = models.SmallIntegerField(
        verbose_name=_('redni broj'),
        validators=[
            MinValueValidator(1),
            MaxValueValidator(5)  # default
        ],
    )
    questionnaire = models.ForeignKey(
        to='psihofon.Questionnaire',
        verbose_name=_('upitnik'),
        on_delete=models.CASCADE,
        related_name='answers'
    )

    def __str__(self):
        return f"{_('Odgovor')} {self.order_number}"


    def clean(self):
        # limit order number by number of answer objects in questionnaire
        answer_count = self.questionnaire.answers.count()
        max_order_number = answer_count if answer_count != 0 else 1

        if self.order_number > max_order_number:
            raise ValidationError(_(f"Ova vrednost mora da bude manja od {max_order_number} ili tačno toliko."))
