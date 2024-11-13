import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './StaffDashboard.css';

const StaffDashboard = () => {
    const [staffData, setStaffData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/staff/')
            .then((response) => response.json())
            .then((data) => setStaffData(data));
    }, []);

    return (
        <div className="staff-dashboard-container">
            <h1>Staff Management Dashboard</h1>
            <Grid container spacing={2}>
                {staffData.map((staff) => (
                    <Grid item xs={12} sm={6} md={4} key={staff.id}>
                        <Card className="staff-card">
                            <CardContent>
                                <Typography variant="h6">{staff.user.username}</Typography>
                                <Typography variant="body2">{staff.role}</Typography>
                                <Typography variant="body2">Department: {staff.department}</Typography>
                                <Typography variant="body2">Salary: {staff.salary}</Typography>
                                <Button
                                    component={Link}
                                    to={`/staff/${staff.id}`}
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                >
                                    View Details
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default StaffDashboard;
