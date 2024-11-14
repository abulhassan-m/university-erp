import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const StaffDashboard = () => {
    return (
        <Container>
            <Typography variant="h3">Staff Dashboard</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Button component={Link} to="/staff-registration" fullWidth variant="contained">Registration</Button>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Button component={Link} to="/attendance-manager" fullWidth variant="contained">Attendance</Button>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Button component={Link} to="/exam-questions" fullWidth variant="contained">Exam Questions</Button>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Button component={Link} to="/exam-results" fullWidth variant="contained">Exam Results</Button>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Button component={Link} to="/payroll" fullWidth variant="contained">Payroll</Button>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Button component={Link} to="/leave-management" fullWidth variant="contained">Leave Management</Button>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Button component={Link} to="/performance-tracker" fullWidth variant="contained">Performance Tracker</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default StaffDashboard;
