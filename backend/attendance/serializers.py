from rest_framework import serializers
from .models import AttendanceRecord, Session, LeaveRequest, CreditCalculation, PayrollRecord

class AttendanceRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = AttendanceRecord
        fields = '__all__'

class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = '__all__'

class LeaveRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = LeaveRequest
        fields = '__all__'

class CreditCalculationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreditCalculation
        fields = '__all__'

class PayrollRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = PayrollRecord
        fields = '__all__'
