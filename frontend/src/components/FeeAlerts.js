import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Button, List, ListItem, ListItemText } from '@mui/material';

const FeeAlerts = () => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        const fetchAlerts = async () => {
            try {
                const response = await axios.get('/api/fee/alerts/');
                setAlerts(response.data);
            } catch (error) {
                console.error("Error fetching alerts:", error);
            }
        };
        fetchAlerts();
    }, []);

    const handleSendAlerts = async () => {
        try {
            await axios.post('/api/fee/send-alerts/');
            alert("Alerts sent to students with pending fees!");
        } catch (error) {
            console.error("Error sending alerts:", error);
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Fee Payment Alerts</Typography>
            <Button variant="contained" color="primary" onClick={handleSendAlerts}>Send Fee Payment Alerts</Button>
            <Typography variant="h5" gutterBottom>Pending Fee Alerts</Typography>
            <List>
                {alerts.map((alert, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={`Student ID: ${alert.student_id}, Due Amount: ${alert.due_amount}`} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default FeeAlerts;
