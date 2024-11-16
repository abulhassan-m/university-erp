from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, ScheduleViewSet, AssignmentViewSet

router = DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'schedules', ScheduleViewSet)
router.register(r'assignments', AssignmentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
