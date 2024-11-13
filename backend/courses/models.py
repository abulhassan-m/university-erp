from django.db import models
from users.models import User

class Course(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=10, unique=True)
    credits = models.IntegerField()
    description = models.TextField()
    faculty = models.ForeignKey(User, on_delete=models.CASCADE, related_name="courses")

    def __str__(self):
        return self.name

class Assignment(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="assignments")
    title = models.CharField(max_length=100)
    due_date = models.DateField()
    description = models.TextField()
