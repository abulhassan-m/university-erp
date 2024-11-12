import React from 'react';
import './Button.css';

const Button = ({ onClick, children, style }) => {
    return (
        <button onClick={onClick} className="custom-button" style={style}>
            {children}
        </button>
    );
};

export default Button;
