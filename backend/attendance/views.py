from rest_framework import viewsets
from .models import AttendanceRecord
from .serializers import AttendanceRecordSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
from datetime import date

class AttendanceRecordViewSet(viewsets.ModelViewSet):
    queryset = AttendanceRecord.objects.all()
    serializer_class = AttendanceRecordSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save()

    @action(detail=False, methods=['get'], url_path='course/(?P<course_id>[^/.]+)/date/(?P<attendance_date>[^/.]+)')
    def get_course_attendance(self, request, course_id=None, attendance_date=None):
        attendance_records = AttendanceRecord.objects.filter(course_id=course_id, date=attendance_date)
        serializer = self.get_serializer(attendance_records, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['post'], url_path='mark-attendance')
    def mark_attendance(self, request, pk=None):
        student_id = request.data.get('student')
        attendance_date = request.data.get('date', date.today())
        is_present = request.data.get('is_present', True)

        attendance_record, created = AttendanceRecord.objects.update_or_create(
            course_id=pk,
            student_id=student_id,
            date=attendance_date,
            defaults={'is_present': is_present}
        )

        if created:
            return Response({"status": "attendance marked"}, status=status.HTTP_201_CREATED)
        else:
            return Response({"status": "attendance updated"}, status=status.HTTP_200_OK)
