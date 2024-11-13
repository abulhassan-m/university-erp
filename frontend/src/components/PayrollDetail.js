// components/PayrollDetail.js

import React from 'react';
import './PayrollDetail.css';

const PayrollDetail = ({ payroll, onClose }) => {
    return (
        <div className="payroll-detail-container">
            <button className="close-button" onClick={onClose}>×</button>
            <h2>Payroll Details</h2>
            <p><strong>Staff Name:</strong> {payroll.staff_name}</p>
            <p><strong>Month:</strong> {payroll.month}</p>
            <p><strong>Year:</strong> {payroll.year}</p>
            <p><strong>Total Days Present:</strong> {payroll.total_days_present}</p>
            <p><strong>Salary Paid:</strong> ${payroll.salary_paid}</p>
        </div>
    );
};

export default PayrollDetail;
