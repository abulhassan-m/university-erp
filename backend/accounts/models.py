from django.contrib.auth.models import User, AbstractUser, Group, Permission
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

class Course(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=10, unique=True)
    credits = models.IntegerField()

    def __str__(self):
        return self.name

class Exam(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    marks_obtained = models.IntegerField()
    total_marks = models.IntegerField()

    def __str__(self):
        return f"{self.student.user.first_name} - {self.course.name}"

class FeeInvoice(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    is_paid = models.BooleanField(default=False)

    def __str__(self):
        return f"Invoice #{self.id} - {self.student.user.first_name}"
