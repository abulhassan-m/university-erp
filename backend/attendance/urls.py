# attendance/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (AttendanceRecordViewSet, SessionViewSet, LeaveRequestViewSet, 
                    CreditCalculationViewSet, PayrollRecordViewSet)

router = DefaultRouter()
router.register(r'attendance', AttendanceRecordViewSet)
router.register(r'sessions', SessionViewSet)
router.register(r'leave-requests', LeaveRequestViewSet)
router.register(r'credit-calculations', CreditCalculationViewSet)
router.register(r'payrolls', PayrollRecordViewSet)
router.register(r'credit-calculations', CreditCalculationViewSet, basename='credit-calculations')

urlpatterns = [
    path('', include(router.urls)),
]
# attendance/urls.py