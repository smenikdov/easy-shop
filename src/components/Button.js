import React from 'react';

const Button = ({ children, onClick, className = '', ...props }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;

