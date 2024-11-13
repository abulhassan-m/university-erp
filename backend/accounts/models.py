from django.contrib.auth.models import User, AbstractUser, Group, Permission
from django.db import models
from courses.models import Course

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

class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    enrollment_number = models.CharField(max_length=20, unique=True)
    department = models.CharField(max_length=100)
    year = models.IntegerField()
    courses = models.ManyToManyField('Course', blank=True)
    fees_paid = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    attendance = models.FloatField(default=0.0)  # Percentage

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"

class Staff(models.Model):
    ROLE_CHOICES = [
        ('Teaching', 'Teaching'),
        ('Non-Teaching', 'Non-Teaching'),
        ('Class Advisor', 'Class Advisor'),
        ('Student Counsellor', 'Student Counsellor'),
        ('Subject Teacher', 'Subject Teacher'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=50, choices=ROLE_CHOICES)
    department = models.CharField(max_length=100)
    hire_date = models.DateField()
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    assigned_class = models.CharField(max_length=100, blank=True, null=True)
    assigned_group = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.user.username

class Payroll(models.Model):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)
    month = models.CharField(max_length=20)
    year = models.PositiveIntegerField()
    basic_salary = models.DecimalField(max_digits=10, decimal_places=2)
    bonus = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    deductions = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    total_salary = models.DecimalField(max_digits=10, decimal_places=2)

    def save(self, *args, **kwargs):
        self.total_salary = self.basic_salary + self.bonus - self.deductions
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.staff.user.username} - {self.month} {self.year}"


class Task(models.Model):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)
    task_title = models.CharField(max_length=255)
    task_description = models.TextField()
    due_date = models.DateField()
    status = models.CharField(max_length=20, choices=[('Pending', 'Pending'), ('In Progress', 'In Progress'), ('Completed', 'Completed')])

    def __str__(self):
        return self.task_title

class FeeInvoice(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    is_paid = models.BooleanField(default=False)

    def __str__(self):
        return f"Invoice #{self.id} - {self.student.user.first_name}"
