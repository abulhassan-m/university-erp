// components/PayrollList.js

import React, { useEffect, useState } from 'react';
import './PayrollList.css';

const PayrollList = ({ onPayrollSelect }) => {
    const [payrolls, setPayrolls] = useState([]);

    useEffect(() => {
        fetch('/api/payrolls/')
            .then(response => response.json())
            .then(data => setPayrolls(data));
    }, []);

    return (
        <div className="payroll-list-container">
            <h2>Staff Payroll Records</h2>
            <table className="payroll-table">
                <thead>
                    <tr>
                        <th>Staff Name</th>
                        <th>Month</th>
                        <th>Year</th>
                        <th>Total Days Present</th>
                        <th>Salary Paid</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {payrolls.map(payroll => (
                        <tr key={payroll.id} onClick={() => onPayrollSelect(payroll)}>
                            <td>{payroll.staff_name}</td>
                            <td>{payroll.month}</td>
                            <td>{payroll.year}</td>
                            <td>{payroll.total_days_present}</td>
                            <td>${payroll.salary_paid}</td>
                            <td>
                                <button className="view-button">View</button>
                                <button className="edit-button">Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PayrollList;
