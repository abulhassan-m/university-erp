import React, { useState } from 'react';
import './Login.css';
import { useNavigate,Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Basic validation
        if (username === '' || password === '') {
            setError('Please enter both username and password.');
            return;
        }

        // Placeholder for authentication API call
        if (username === 'admin' && password === 'admin') {
            // Redirect to the dashboard if login is successful
            navigate('/dashboard');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>University ERP Login</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <p className="forgot-password">
                    <Link to="/forgot-password">Forgot password?</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
