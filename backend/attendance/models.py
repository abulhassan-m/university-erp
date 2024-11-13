from django.db import models
from django.contrib.auth.models import User
from accounts.models import Student, Staff
    
class AttendanceRecord(models.Model):
    DATE_TYPE_CHOICES = [
        ('Present', 'Present'),
        ('Absent', 'Absent'),
        ('Leave', 'Leave'),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    status = models.CharField(max_length=10, choices=DATE_TYPE_CHOICES)
    is_student = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.user.username} - {self.date} - {self.status}"

class Session(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    subject = models.CharField(max_length=100)
    start_time = models.TimeField()
    end_time = models.TimeField()
    date = models.DateField()

    def __str__(self):
        return f"{self.subject} - {self.student.user.username} - {self.date}"

class LeaveRequest(models.Model):
    LEAVE_STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Approved', 'Approved'),
        ('Rejected', 'Rejected'),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    reason = models.TextField()
    status = models.CharField(max_length=10, choices=LEAVE_STATUS_CHOICES, default='Pending')

    def __str__(self):
        return f"{self.user.username} - {self.status} ({self.start_date} to {self.end_date})"

class CreditCalculation(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    total_credits = models.FloatField(default=0)
    required_credits = models.FloatField(default=75)  # Minimum credits for exam eligibility

    def __str__(self):
        return f"{self.student.user.username} - {self.total_credits}/{self.required_credits}"

class PayrollRecord(models.Model):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)
    month = models.CharField(max_length=20)
    year = models.IntegerField()
    total_days_present = models.IntegerField(default=0)
    salary_paid = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)

    def __str__(self):
        return f"{self.staff.user.username} - {self.month}/{self.year} - ${self.salary_paid}"
