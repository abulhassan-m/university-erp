import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button } from '@mui/material';

const StudentFeePayment = ({ studentId }) => {
    const [feeDetails, setFeeDetails] = useState({ total_fee: 0, due_amount: 0 });
    const [payment, setPayment] = useState({ student_id: studentId, amount: '' });

    useEffect(() => {
        const fetchFeeDetails = async () => {
            try {
                const response = await axios.get(`/api/fee/payment/${studentId}`);
                setFeeDetails(response.data);
            } catch (error) {
                console.error("Error fetching fee details:", error);
            }
        };
        fetchFeeDetails();
    }, [studentId]);

    const handleChange = (e) => {
        setPayment({ ...payment, amount: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/api/fee/pay`, payment);
            alert("Payment successful!");
            setFeeDetails({ ...feeDetails, due_amount: feeDetails.due_amount - payment.amount });
        } catch (error) {
            console.error("Error processing payment:", error);
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Student Fee Payment</Typography>
            <Typography variant="body1">Total Fee: {feeDetails.total_fee}</Typography>
            <Typography variant="body1">Due Amount: {feeDetails.due_amount}</Typography>
            <form onSubmit={handleSubmit}>
                <TextField name="amount" label="Enter Payment Amount" type="number" fullWidth margin="normal" onChange={handleChange} />
                <Button type="submit" variant="contained" color="primary">Make Payment</Button>
            </form>
        </Container>
    );
};

export default StudentFeePayment;
