from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework import status
from .models import User, Student, Course, Exam, FeeInvoice
from .serializers import UserSerializer, StudentSerializer, CourseSerializer, ExamSerializer, FeeInvoiceSerializer
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.http import JsonResponse
from django.urls import reverse
from django.conf import settings

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class ExamViewSet(viewsets.ModelViewSet):
    queryset = Exam.objects.all()
    serializer_class = ExamSerializer

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
