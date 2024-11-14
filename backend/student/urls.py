from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'stud/students', views.StudentViewSet)
router.register(r'stud/attendance', views.AttendanceViewSet)
router.register(r'stud/notes', views.NoteViewSet)
router.register(r'stud/syllabus', views.SyllabusViewSet)
router.register(r'stud/exam_results', views.ExamResultViewSet)
router.register(r'stud/performance_evaluation', views.PerformanceEvaluationViewSet)
router.register(r'stud/leave_requests', views.LeaveRequestViewSet)
router.register(r'stud/announcements', views.AnnouncementViewSet)
router.register(r'stud/notices', views.NoticeViewSet)
router.register(r'stud/schedules', views.ScheduleViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
