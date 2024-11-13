from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User

""" @admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'role', 'is_superadmin')
    list_filter = ('role', 'is_superadmin')
    search_fields = ('username', 'email') """

class UserAdmin(BaseUserAdmin):
    list_display = ('username', 'email', 'role', 'is_superadmin', 'is_staff', 'is_active')
    list_filter = ('is_staff', 'is_active', 'role')
    search_fields = ('username', 'email')
    ordering = ('email',)

    fieldsets = (
        (None, {'fields': ('email', 'username', 'password')}),
        ('Personal info', {'fields': ('role', 'department')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'password1', 'password2', 'is_staff', 'is_superuser'),
        }),
    )

admin.site.register(User, UserAdmin)
