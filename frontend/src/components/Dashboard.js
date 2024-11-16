import React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardActionArea, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReportIcon from '@mui/icons-material/Report';

const Dashboard = () => {
    const modules = [
        { name: 'Student', path: '/students-db', icon: <SchoolIcon fontSize="large" /> },
        { name: 'Staff Management', path: '/staff-management', icon: <PeopleIcon fontSize="large" /> },
        { name: 'Attendance Tracking', path: '/attendance-tracker', icon: <EventAvailableIcon fontSize="large" /> },
        { name: 'Fee Management', path: '/fee-structure', icon: <AttachMoneyIcon fontSize="large" /> },
        { name: 'Course Management', path: '/courses', icon: <LibraryBooksIcon fontSize="large" /> },
        { name: 'Examination', path: '/exam-management', icon: <AssignmentIcon fontSize="large" /> },
        { name: 'Notifications', path: '/notifications', icon: <NotificationsActiveIcon fontSize="large" /> },
        { name: 'Reports', path: '/reports', icon: <ReportIcon fontSize="large" /> },
    ];

    return (
        <Container maxWidth="lg" sx={{ mt: 5 }}>
            <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
                <Typography variant="h3" color="primary" fontWeight="bold">
                    University ERP Dashboard
                </Typography>
                <DashboardIcon color="primary" fontSize="large" sx={{ ml: 2 }} />
            </Box>
            <Grid container spacing={4}>
                {modules.map((module, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ boxShadow: 3, transition: '0.3s', '&:hover': { boxShadow: 6 } }}>
                            <CardActionArea component={Link} to={module.path} sx={{ padding: '20px', textAlign: 'center' }}>
                                <Box color="primary.main">{module.icon}</Box>
                                <CardContent>
                                    <Typography variant="h6" color="textSecondary">
                                        {module.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Dashboard;
