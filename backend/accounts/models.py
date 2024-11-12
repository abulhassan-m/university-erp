from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class User(AbstractUser):
    USER_ROLES = [
        ('ADMIN', 'Admin'),
        ('FACULTY', 'Faculty'),
        ('STUDENT', 'Student'),
    ]
    role = models.CharField(max_length=10, choices=USER_ROLES, default='STUDENT')
    is_superadmin = models.BooleanField(default=False)

    groups = models.ManyToManyField(
        Group,
        related_name="custom_user_groups",  # Add unique related_name here
        blank=True
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="custom_user_permissions",  # Add unique related_name here
        blank=True
    )

    def __str__(self):
        return self.username
