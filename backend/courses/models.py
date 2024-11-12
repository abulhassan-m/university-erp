from django.db import models
from users.models import User

class Course(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    faculty = models.ForeignKey(User, on_delete=models.CASCADE, related_name="courses")

class Assignment(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="assignments")
    title = models.CharField(max_length=100)
    due_date = models.DateField()
    description = models.TextField()
