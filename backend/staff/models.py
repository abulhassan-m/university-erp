from django.db import models
from accounts.models import User

class Staff(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    department = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    is_teaching_staff = models.BooleanField(default=False)

class Attendance(models.Model):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)
    date = models.DateField()
    status = models.CharField(max_length=10, choices=(("Present", "Present"), ("Absent", "Absent")))

class ExamQuestion(models.Model):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)
    course_name = models.CharField(max_length=100)
    question_text = models.TextField()

class ExamResult(models.Model):
    student = models.ForeignKey('student.Student', on_delete=models.CASCADE)
    course_name = models.CharField(max_length=100)
    grade = models.CharField(max_length=5)

class Payroll(models.Model):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)
    salary_date = models.DateField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)

class LeaveRequest(models.Model):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    reason = models.TextField()
    status = models.CharField(max_length=10, choices=(("Pending", "Pending"), ("Approved", "Approved"), ("Rejected", "Rejected")))

class Performance(models.Model):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)
    date = models.DateField()
    performance_score = models.IntegerField()
    feedback = models.TextField()
