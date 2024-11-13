from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'students', views.StudentViewSet)
router.register(r'staff', views.StaffViewSet)
router.register(r'fees', views.FeeInvoiceViewSet)
router.register(r'payroll', views.PayrollViewSet)
router.register(r'tasks', views.TaskViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('send-reset-email/', views.send_reset_email, name='send_reset_email'),
]