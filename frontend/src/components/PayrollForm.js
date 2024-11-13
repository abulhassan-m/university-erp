// components/PayrollForm.js

import React, { useState } from 'react';
import './PayrollForm.css';

const PayrollForm = ({ payroll, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        staff_name: payroll ? payroll.staff_name : '',
        month: payroll ? payroll.month : '',
        year: payroll ? payroll.year : '',
        total_days_present: payroll ? payroll.total_days_present : '',
        salary_paid: payroll ? payroll.salary_paid : '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="payroll-form-container">
            <h2>{payroll ? 'Edit Payroll Record' : 'Add Payroll Record'}</h2>
            <form onSubmit={handleSubmit} className="payroll-form">
                <input type="text" name="staff_name" placeholder="Staff Name" value={formData.staff_name} onChange={handleChange} required />
                <input type="text" name="month" placeholder="Month" value={formData.month} onChange={handleChange} required />
                <input type="number" name="year" placeholder="Year" value={formData.year} onChange={handleChange} required />
                <input type="number" name="total_days_present" placeholder="Total Days Present" value={formData.total_days_present} onChange={handleChange} required />
                <input type="number" name="salary_paid" placeholder="Salary Paid" value={formData.salary_paid} onChange={handleChange} required />
                <button type="submit" className="save-button">Save</button>
                <button type="button" className="cancel-button" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default PayrollForm;
