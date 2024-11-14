from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .models import Staff, Payroll, Task, StudentUser, FeeInvoice, User
from .serializers import (UserSerializer, StudentSerializer, 
                          FeeInvoiceSerializer,  StaffSerializer, PayrollSerializer, TaskSerializer)
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.core.mail import send_mail
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.http import JsonResponse
from django.urls import reverse
from django.conf import settings

class StudentUserViewSet(viewsets.ModelViewSet):
    queryset = StudentUser.objects.all()
    serializer_class = StudentSerializer

class FeeInvoiceViewSet(viewsets.ModelViewSet):
    queryset = FeeInvoice.objects.all()
    serializer_class = FeeInvoiceSerializer


# Initialize token generator
token_generator = PasswordResetTokenGenerator()

def send_reset_email(request):
    if request.method == "POST":
        email = request.POST.get('email')
        try:
            user = User.objects.get(email=email)
            token = token_generator.make_token(user)
            uid = urlsafe_base64_encode(force_bytes(user.pk))

            # Construct password reset URL
            reset_url = f"{settings.FRONTEND_URL}/reset-password/{uid}/{token}"

            # Send the email
            send_mail(
                'Password Reset Request',
                f'Click the link below to reset your password:\n\n{reset_url}',
                'noreply@universityerp.com',
                [email],
                fail_silently=False,
            )

            return JsonResponse({"message": "Password reset email sent!"}, status=200)
        except User.DoesNotExist:
            return JsonResponse({"error": "Email address not found."}, status=404)

    return JsonResponse({"error": "Invalid request method."}, status=400)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance.is_superadmin:
            return Response({"detail": "Cannot delete super admin"}, status=status.HTTP_403_FORBIDDEN)
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

class StaffViewSet(viewsets.ModelViewSet):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer

class PayrollViewSet(viewsets.ModelViewSet):
    queryset = Payroll.objects.all()
    serializer_class = PayrollSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def create(self, request, *args, **kwargs):
        staff_id = request.data.get('staff')
        staff = Staff.objects.get(id=staff_id)
        task_title = request.data.get('task_title')
        task_description = request.data.get('task_description')
        due_date = request.data.get('due_date')

        task = Task.objects.create(
            staff=staff, task_title=task_title, task_description=task_description, due_date=due_date
        )

        return Response({'message': 'Task assigned successfully'})
