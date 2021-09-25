from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from psihofon.models import Organization, User


@admin.register(Organization)
class OrganizationAdmin(admin.ModelAdmin):
    pass


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    pass
