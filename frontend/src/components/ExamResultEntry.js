import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography } from '@mui/material';

const ExamResultEntry = () => {
    const [resultData, setResultData] = useState({ student_id: '', course_name: '', grade: '' });

    const handleChange = (e) => {
        setResultData({ ...resultData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/staff/exam-results/', resultData);
            alert("Exam result recorded successfully!");
        } catch (error) {
            console.error("Error recording exam result:", error);
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Enter Exam Results</Typography>
            <form onSubmit={handleSubmit}>
                <TextField name="student_id" label="Student ID" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="course_name" label="Course Name" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="grade" label="Grade" fullWidth margin="normal" onChange={handleChange} />
                <Button type="submit" variant="contained" color="primary">Submit Result</Button>
            </form>
        </Container>
    );
};

export default ExamResultEntry;
