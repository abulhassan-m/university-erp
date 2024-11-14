import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography } from '@mui/material';

const ExamQuestionManager = () => {
    const [questionData, setQuestionData] = useState({ staff_id: '', course_name: '', question_text: '' });

    const handleChange = (e) => {
        setQuestionData({ ...questionData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/staff/exam-questions/', questionData);
            alert("Question added successfully!");
        } catch (error) {
            console.error("Error adding question:", error);
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Add Exam Question</Typography>
            <form onSubmit={handleSubmit}>
                <TextField name="staff_id" label="Staff ID" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="course_name" label="Course Name" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="question_text" label="Question Text" fullWidth multiline rows={4} margin="normal" onChange={handleChange} />
                <Button type="submit" variant="contained" color="primary">Add Question</Button>
            </form>
        </Container>
    );
};

export default ExamQuestionManager;
