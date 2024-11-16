import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const ScheduleManager = ({ courseId }) => {
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        const fetchSchedules = async () => {
            try {
                const response = await axios.get(`/api/schedules/?course=${courseId}`);
                setSchedules(response.data);
            } catch (error) {
                console.error("Error fetching schedules:", error);
            }
        };
        fetchSchedules();
    }, [courseId]);

    return (
        <Container>
            <Typography variant="h5" gutterBottom>Schedule</Typography>
            <List>
                {schedules.map((schedule) => (
                    <ListItem key={schedule.id}>
                        <ListItemText primary={`${schedule.day} - ${schedule.start_time} to ${schedule.end_time}`} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default ScheduleManager;
