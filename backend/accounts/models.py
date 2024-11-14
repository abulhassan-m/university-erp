from django.contrib.auth.models import Group, Permission, AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.conf import settings
from django.utils import timezone
from courses.models import Course

class UserManager(BaseUserManager):
    def create_user(self, username, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set.")
        email = self.normalize_email(email)
        user = self.model(username=username, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get('is_superuser') is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(username, email, password, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
    
    USER_ROLES = [
        ('ADMIN', 'Admin'),
        ('staff', 'staff'),
        ('STUDENT', 'Student'),
    ]

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

    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=10, choices=USER_ROLES, default='STUDENT')
    department = models.CharField(max_length=100, blank=True, null=True)
    date_joined = models.DateTimeField(default=timezone.now)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superadmin = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.username


class StudentUser(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    enrollment_number = models.CharField(max_length=20, unique=True)
    department = models.CharField(max_length=100)
    year = models.IntegerField()
    courses = models.ManyToManyField(Course, blank=True)
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

    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
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
    student = models.ForeignKey(StudentUser, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    is_paid = models.BooleanField(default=False)

    def __str__(self):
        return f"Invoice #{self.id} - {self.student.user.first_name}"
