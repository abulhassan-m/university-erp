// StudentDashboard.js
import React from 'react';
import { Container, Button, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>Student Dashboard</Typography>
            <Grid container spacing={2}>
                <Grid item>
                    <Button component={Link} to="/attendance" variant="contained">Attendance</Button>
                </Grid>
                <Grid item>
                    <Button component={Link} to="/notes" variant="contained">Notes</Button>
                </Grid>
                <Grid item>
                    <Button component={Link} to="/exam-schedule" variant="contained">Exam Schedule</Button>
                </Grid>
                <Grid item>
                    <Button component={Link} to="/exam-results" variant="contained">Exam Results</Button>
                </Grid>
                <Grid item>
                    <Button component={Link} to="/leave-request" variant="contained">Leave Request</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default StudentDashboard;
