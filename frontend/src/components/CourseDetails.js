import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import ScheduleManager from './ScheduleManager';
import AssignmentManager from './AssignmentManager';

const CourseDetails = ({ courseId }) => {
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await axios.get(`/api/courses/${courseId}/`);
                setCourse(response.data);
            } catch (error) {
                console.error("Error fetching course:", error);
            }
        };
        fetchCourse();
    }, [courseId]);

    return (
        <Container>
            {course && (
                <>
                    <Typography variant="h4" gutterBottom>{course.title}</Typography>
                    <Typography variant="body1" paragraph>{course.description}</Typography>
                    <Typography variant="body2">Credits: {course.credits}</Typography>

                    <ScheduleManager courseId={courseId} />
                    <AssignmentManager courseId={courseId} />
                </>
            )}
        </Container>
    );
};

export default CourseDetails;
