from rest_framework import serializers
from .models import AttendanceRecord

class AttendanceRecordSerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(source="student.username", read_only=True)
    course_name = serializers.CharField(source="course.name", read_only=True)

    class Meta:
        model = AttendanceRecord
        fields = ['id', 'course', 'course_name', 'student', 'student_name', 'date', 'is_present']
        read_only_fields = ['student_name', 'course_name']
