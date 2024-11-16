import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const AssignmentManager = ({ courseId }) => {
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        const fetchAssignments = async () => {
            try {
                const response = await axios.get(`/api/assignments/?course=${courseId}`);
                setAssignments(response.data);
            } catch (error) {
                console.error("Error fetching assignments:", error);
            }
        };
        fetchAssignments();
    }, [courseId]);

    return (
        <Container>
            <Typography variant="h5" gutterBottom>Assignments</Typography>
            <List>
                {assignments.map((assignment) => (
                    <ListItem key={assignment.id}>
                        <ListItemText primary={assignment.title} secondary={`Due: ${assignment.due_date}`} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default AssignmentManager;
