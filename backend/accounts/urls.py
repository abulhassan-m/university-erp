from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet
from . import views

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'students', views.StudentViewSet)
router.register(r'courses', views.CourseViewSet)
router.register(r'exams', views.ExamViewSet)
router.register(r'fees', views.FeeInvoiceViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('send-reset-email/', views.send_reset_email, name='send_reset_email'),
]