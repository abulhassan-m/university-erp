from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (StaffViewSet, AttendanceViewSet, ExamQuestionViewSet, ExamResultViewSet, PayrollViewSet,
                    LeaveRequestViewSet, PerformanceViewSet)

router = DefaultRouter()
router.register(r'staff', StaffViewSet)
router.register(r'attendance', AttendanceViewSet)
router.register(r'exam-questions', ExamQuestionViewSet)
router.register(r'exam-results', ExamResultViewSet)
router.register(r'payroll', PayrollViewSet)
router.register(r'leave-requests', LeaveRequestViewSet)
router.register(r'performance', PerformanceViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
