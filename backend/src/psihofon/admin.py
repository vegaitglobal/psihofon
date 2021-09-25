from django.contrib import admin
from psihofon.models import Organization


@admin.register(Organization)
class OrganizationAdmin(admin.ModelAdmin):
    pass
