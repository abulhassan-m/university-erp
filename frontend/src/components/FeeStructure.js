import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, List, ListItem, ListItemText } from '@mui/material';

const FeeStructure = () => {
    const [feeStructure, setFeeStructure] = useState([]);
    const [newFee, setNewFee] = useState({ course_name: '', amount: '' });

    useEffect(() => {
        const fetchFeeStructure = async () => {
            try {
                const response = await axios.get('/api/fee/structure/');
                setFeeStructure(response.data);
            } catch (error) {
                console.error("Error fetching fee structure:", error);
            }
        };
        fetchFeeStructure();
    }, []);

    const handleChange = (e) => {
        setNewFee({ ...newFee, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/fee/structure/', newFee);
            alert("Fee structure added!");
            setFeeStructure([...feeStructure, newFee]);
        } catch (error) {
            console.error("Error adding fee structure:", error);
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Manage Fee Structure</Typography>
            <form onSubmit={handleSubmit}>
                <TextField name="course_name" label="Course Name" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="amount" label="Amount" type="number" fullWidth margin="normal" onChange={handleChange} />
                <Button type="submit" variant="contained" color="primary">Add Fee Structure</Button>
            </form>
            <Typography variant="h5" gutterBottom>Existing Fee Structures</Typography>
            <List>
                {feeStructure.map((fee, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={`Course: ${fee.course_name}, Amount: ${fee.amount}`} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default FeeStructure;
