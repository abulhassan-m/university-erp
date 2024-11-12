from django.contrib import admin
from .models import User

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'role', 'is_superadmin')
    list_filter = ('role', 'is_superadmin')
    search_fields = ('username', 'email')
