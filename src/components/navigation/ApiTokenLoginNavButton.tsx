import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ApiTokenLoginNavButton.scss';

export const ApiTokenLoginNavButton: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = location.pathname === '/api-token-login';

    return (
        <button
            className={`api-token-login-nav-button ${isActive ? 'active' : ''}`}
            onClick={() => navigate('/api-token-login')}
            title='API Token Login'
        >
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                <rect x='3' y='11' width='18' height='11' rx='2' ry='2'></rect>
                <path d='M7 11V7a5 5 0 0 1 10 0v4'></path>
            </svg>
            <span>API Login</span>
        </button>
    );
};
