import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography } from '@mui/material';

const StaffRegistration = () => {
    const [formData, setFormData] = useState({
        name: '',
        department: '',
        position: '',
        is_teaching_staff: false,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/staff/staff/', formData);
            alert("Staff registered successfully!");
        } catch (error) {
            console.error("Error registering staff:", error);
        }
    };

    return (
        <Container>
            <Typography variant="h4">Staff Registration</Typography>
            <form onSubmit={handleSubmit}>
                <TextField name="name" label="Name" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="department" label="Department" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="position" label="Position" fullWidth margin="normal" onChange={handleChange} />
                <Button type="submit" variant="contained" color="primary">Register</Button>
            </form>
        </Container>
    );
};

export default StaffRegistration;
