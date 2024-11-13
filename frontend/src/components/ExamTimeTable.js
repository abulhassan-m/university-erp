// ExamTimeTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const ExamTimeTable = () => {
    const [examSchedule, setExamSchedule] = useState([]);

    useEffect(() => {
        const fetchExamSchedule = async () => {
            const response = await axios.get('/api/student/exam-schedule/');
            setExamSchedule(response.data);
        };
        fetchExamSchedule();
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Exam Schedule</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Subject</TableCell>
                        <TableCell>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {examSchedule.map((exam) => (
                        <TableRow key={exam.id}>
                            <TableCell>{exam.subject}</TableCell>
                            <TableCell>{exam.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    );
};

export default ExamTimeTable;
