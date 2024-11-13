import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';

const StaffDetail = ({ match }) => {
    const { staffId } = match.params;
    const [staff, setStaff] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/api/staff/${staffId}/`)
            .then((response) => response.json())
            .then((data) => setStaff(data));
    }, [staffId]);

    if (!staff) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Typography variant="h4">{staff.user.username}</Typography>
            <Typography variant="h6">{staff.role}</Typography>
            <Typography variant="body1">{staff.department}</Typography>
            <Typography variant="body1">Salary: {staff.salary}</Typography>
            {/* Display and manage tasks, attendance, and payroll */}
            <Button variant="contained" color="primary">
                Assign Task
            </Button>
        </div>
    );
};

export default StaffDetail;
