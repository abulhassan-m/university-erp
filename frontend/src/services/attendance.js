import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchAttendance = async (courseId, date) => {
    const response = await axios.get(`${API_URL}/attendance/course/${courseId}/date/${date}/`);
    return response.data;
};

export const markAttendance = async (courseId, studentId, date, isPresent) => {
    const response = await axios.post(`${API_URL}/attendance/${courseId}/mark-attendance/`, {
        student: studentId,
        date: date,
        is_present: isPresent
    });
    return response.data;
};
