// components/PayrollDashboard.js

import React, { useState } from 'react';
import PayrollList from './PayrollList';
import PayrollForm from './PayrollForm';
import PayrollDetail from './PayrollDetail';

const PayrollDashboard = () => {
    const [selectedPayroll, setSelectedPayroll] = useState(null);
    const [editing, setEditing] = useState(false);

    const handleSelectPayroll = (payroll) => {
        setSelectedPayroll(payroll);
        setEditing(false);
    };

    const handleAddPayroll = () => {
        setSelectedPayroll(null);
        setEditing(true);
    };

    const handleSavePayroll = (payrollData) => {
        // Save payroll logic here
        setEditing(false);
        setSelectedPayroll(null);
    };

    return (
        <div className="payroll-dashboard">
            {editing ? (
                <PayrollForm payroll={selectedPayroll} onSave={handleSavePayroll} onCancel={() => setEditing(false)} />
            ) : selectedPayroll ? (
                <PayrollDetail payroll={selectedPayroll} onClose={() => setSelectedPayroll(null)} />
            ) : (
                <>
                    <PayrollList onPayrollSelect={handleSelectPayroll} />
                    <button onClick={handleAddPayroll} className="add-button">Add Payroll</button>
                </>
            )}
        </div>
    );
};

export default PayrollDashboard;
