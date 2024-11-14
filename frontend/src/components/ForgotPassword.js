import React, { useState } from 'react';
import './ForgotPassword.css';
// import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    /* const navigate = useNavigate(); */

    const handleResetPassword = async (e) => {
        e.preventDefault();

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setError('');
        setMessage('Processing your request...');
    
        try {
            const response = await fetch('http://localhost:8000/accounts/send-reset-email/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                setMessage(data.message);
            } else {
                setError(data.error || 'An error occurred. Please try again later.');
            }
        } catch (err) {
            setError('Could not send reset request. Please try again later.');
        }
    };

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-box">
                <h2>Reset Your Password</h2>
                <p className="instructions">Enter your registered email address, and we'll send you a link to reset your password.</p>
                
                {message && <p className="message">{message}</p>}
                {error && <p className="error-message">{error}</p>}
                
                <form onSubmit={handleResetPassword}>
                    <div className="input-group">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <button type="submit" className="reset-button">Send Reset Link</button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;

