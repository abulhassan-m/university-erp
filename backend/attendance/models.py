from django.db import models
from users.models import User
from courses.models import Course

class AttendanceRecord(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="attendance_records")
    student = models.ForeignKey(User, on_delete=models.CASCADE, related_name="attendance_records")
    date = models.DateField()
    is_present = models.BooleanField(default=False)

    class Meta:
        unique_together = ('course', 'student', 'date')

    def __str__(self):
        return f"{self.student.username} - {self.course.name} on {self.date}"
