// TimePeriodTableViewer.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const TimePeriodTableViewer = () => {
    const [timetable, setTimetable] = useState([]);

    useEffect(() => {
        const fetchTimetable = async () => {
            const response = await axios.get('/api/student/schedules/');
            setTimetable(response.data);
        };
        fetchTimetable();
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Daily Session Timetable</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Session</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Subject</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {timetable.map((session) => (
                        <TableRow key={session.id}>
                            <TableCell>{session.event}</TableCell>
                            <TableCell>{session.date}</TableCell>
                            <TableCell>{session.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    );
};

export default TimePeriodTableViewer;
