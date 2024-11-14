from django.db import models
from student.models import Student
from courses.models import Course

class Exam(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    marks_obtained = models.IntegerField()
    total_marks = models.IntegerField()

    def __str__(self):
        return f"{self.student.user.first_name} - {self.course.name}"
