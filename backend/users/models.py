from django.contrib.auth.models import AbstractUser
from django.db import models

class Role(models.TextChoices):
    ADMIN = "ADMIN", "Administrator"
    FACULTY = "FACULTY", "Faculty"
    STUDENT = "STUDENT", "Student"

class User(AbstractUser):
    role = models.CharField(max_length=50, choices=Role.choices, default=Role.STUDENT)
    is_active = models.BooleanField(default=True)