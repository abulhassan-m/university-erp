import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('/api/courses/');
                setCourses(response.data);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };
        fetchCourses();
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Courses</Typography>
            <List>
                {courses.map((course) => (
                    <ListItem key={course.id} component={Link} to={`/courses/${course.id}`}>
                        <ListItemText primary={course.title} secondary={course.description} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default CourseList;
