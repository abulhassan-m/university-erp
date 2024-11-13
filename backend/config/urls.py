from django.urls import path, include
from django.contrib import admin
from rest_framework.routers import DefaultRouter
from users.views import UserList, CustomTokenObtainPairView
from courses.views import CourseViewSet, AssignmentViewSet
from attendance.views import AttendanceViewSet

router = DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'assignments', AssignmentViewSet)
router.register(r'attendance', AttendanceViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/accounts/', include('accounts.urls')),
    path('api/users/', UserList.as_view(), name='user-list'),
    path('api/auth/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/student/', include('student.urls')),
]