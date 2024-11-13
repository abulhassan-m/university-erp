// ExamResultsViewer.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const ExamResultsViewer = () => {
    const [examResults, setExamResults] = useState([]);

    useEffect(() => {
        const fetchExamResults = async () => {
            const response = await axios.get('/api/student/exam_results/');
            setExamResults(response.data);
        };
        fetchExamResults();
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Exam Results</Typography>
            <List>
                {examResults.map((result) => (
                    <ListItem key={result.id}>
                        <ListItemText
                            primary={`${result.subject}: ${result.grade}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default ExamResultsViewer;
