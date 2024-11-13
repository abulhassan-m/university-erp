from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'students', views.StudentViewSet)
router.register(r'attendance', views.AttendanceViewSet)
router.register(r'notes', views.NoteViewSet)
router.register(r'syllabus', views.SyllabusViewSet)
router.register(r'exam_results', views.ExamResultViewSet)
router.register(r'performance_evaluation', views.PerformanceEvaluationViewSet)
router.register(r'leave_requests', views.LeaveRequestViewSet)
router.register(r'announcements', views.AnnouncementViewSet)
router.register(r'notices', views.NoticeViewSet)
router.register(r'schedules', views.ScheduleViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
