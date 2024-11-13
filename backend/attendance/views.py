from rest_framework import viewsets, status
from .models import AttendanceRecord, Session, LeaveRequest, CreditCalculation, PayrollRecord, Staff
from .serializers import (AttendanceSerializer, SessionSerializer, AttendanceSerializer,
                          LeaveRequestSerializer, CreditCalculationSerializer, PayrollRecordSerializer)
from rest_framework.response import Response
from rest_framework.decorators import action


class AttendanceViewSet(viewsets.ModelViewSet):
    queryset = AttendanceRecord.objects.all()
    serializer_class = AttendanceSerializer

    def create(self, request, *args, **kwargs):
        staff_id = request.data.get('staff')
        staff = Staff.objects.get(id=staff_id)
        date = request.data.get('date')
        status = request.data.get('status')

        attendance, created = AttendanceRecord.objects.get_or_create(
            staff=staff, date=date, defaults={'status': status}
        )
        if not created:
            attendance.status = status
            attendance.save()

        return Response({'message': 'Attendance updated successfully'})

class SessionViewSet(viewsets.ModelViewSet):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer

class LeaveRequestViewSet(viewsets.ModelViewSet):
    queryset = LeaveRequest.objects.all()
    serializer_class = LeaveRequestSerializer

class CreditCalculationViewSet(viewsets.ModelViewSet):
    queryset = CreditCalculation.objects.all()
    serializer_class = CreditCalculationSerializer

class PayrollRecordViewSet(viewsets.ModelViewSet):
    queryset = PayrollRecord.objects.all()
    serializer_class = PayrollRecordSerializer

class CreditCalculationViewSet(viewsets.ViewSet):
    queryset = CreditCalculation.objects.all()
    serializer_class = CreditCalculationSerializer

    # Endpoint to retrieve all student credits
    def list(self, request):
        credits = CreditCalculation.objects.all()
        serializer = CreditCalculationSerializer(credits, many=True)
        return Response(serializer.data)

    # Endpoint to update credits for a specific student
    @action(detail=True, methods=['patch'])
    def update_credits(self, request, pk=None):
        try:
            credit_record = CreditCalculation.objects.get(pk=pk)
        except CreditCalculation.DoesNotExist:
            return Response({"error": "Credit record not found."}, status=status.HTTP_404_NOT_FOUND)

        serializer = CreditCalculationSerializer(credit_record, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
