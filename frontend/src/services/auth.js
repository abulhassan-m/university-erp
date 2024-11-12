import axios from 'axios';

const API_URL = 'http://localhost:8000/api/'; /* process.env.REACT_APP_API_URL; */

export const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/auth/`, { username, password });
    if (response.data.access) {
        localStorage.setItem('token', response.data.access);
        return response.data.user;
    }
    throw new Error("Authentication failed");
};

export const logout = () => {
    localStorage.removeItem('token');
};
