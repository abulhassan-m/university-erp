from rest_framework import viewsets
from .models import Student, Attendance, Note, Syllabus, ExamResult, PerformanceEvaluation, LeaveRequest, Announcement, Notice, Schedule
from .serializers import StudentSerializer, AttendanceSerializer, NoteSerializer, SyllabusSerializer, ExamResultSerializer, PerformanceEvaluationSerializer, LeaveRequestSerializer, AnnouncementSerializer, NoticeSerializer, ScheduleSerializer

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class AttendanceViewSet(viewsets.ModelViewSet):
    queryset = Attendance.objects.all()
    serializer_class = AttendanceSerializer

class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

class SyllabusViewSet(viewsets.ModelViewSet):
    queryset = Syllabus.objects.all()
    serializer_class = SyllabusSerializer

class ExamResultViewSet(viewsets.ModelViewSet):
    queryset = ExamResult.objects.all()
    serializer_class = ExamResultSerializer

class PerformanceEvaluationViewSet(viewsets.ModelViewSet):
    queryset = PerformanceEvaluation.objects.all()
    serializer_class = PerformanceEvaluationSerializer

class LeaveRequestViewSet(viewsets.ModelViewSet):
    queryset = LeaveRequest.objects.all()
    serializer_class = LeaveRequestSerializer

class AnnouncementViewSet(viewsets.ModelViewSet):
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer

class NoticeViewSet(viewsets.ModelViewSet):
    queryset = Notice.objects.all()
    serializer_class = NoticeSerializer

class ScheduleViewSet(viewsets.ModelViewSet):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer
