// StudentRegistration.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

const StudentRegistration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department: '',
        yearOfStudy: '',
        // add more fields as required
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/student/students/', formData);
            alert("Registration successful!");
        } catch (error) {
            console.error("Error registering student:", error);
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Student Registration</Typography>
            <form onSubmit={handleSubmit}>
                <TextField name="name" label="Name" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="email" label="Email" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="department" label="Department" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="yearOfStudy" label="Year of Study" fullWidth margin="normal" onChange={handleChange} />
                <Button type="submit" variant="contained" color="primary">Register</Button>
            </form>
        </Container>
    );
};

export default StudentRegistration;
