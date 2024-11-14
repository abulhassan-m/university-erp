import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography } from '@mui/material';

const PayrollManager = () => {
    const [payrollData, setPayrollData] = useState({ staff_id: '', salary_date: '', amount: '' });

    const handleChange = (e) => {
        setPayrollData({ ...payrollData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/staff/payroll/', payrollData);
            alert("Payroll processed successfully!");
        } catch (error) {
            console.error("Error processing payroll:", error);
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Payroll Processing</Typography>
            <form onSubmit={handleSubmit}>
                <TextField name="staff_id" label="Staff ID" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="salary_date" label="Salary Date" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} onChange={handleChange} />
                <TextField name="amount" label="Amount" type="number" fullWidth margin="normal" onChange={handleChange} />
                <Button type="submit" variant="contained" color="primary">Process Payroll</Button>
            </form>
        </Container>
    );
};

export default PayrollManager;
