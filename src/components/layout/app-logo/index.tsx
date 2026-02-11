import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { standalone_routes } from '@/components/shared';
import { useDevice } from '@deriv-com/ui';
import './app-logo.scss';

export const AppLogo = () => {
    const { isDesktop } = useDevice();
    const navigate = useNavigate();
    const [tapCount, setTapCount] = useState(0);
    const tapTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleLogoClick = (e: React.MouseEvent) => {
        // Only apply secret gesture on mobile
        if (isDesktop) return;

        e.preventDefault();

        const newCount = tapCount + 1;
        setTapCount(newCount);

        // Clear existing timeout
        if (tapTimeoutRef.current) {
            clearTimeout(tapTimeoutRef.current);
        }

        // If 5 taps reached, navigate to API Token Login
        if (newCount === 5) {
            setTapCount(0);
            navigate('/api-token-login');
            return;
        }

        // Reset tap count after 2 seconds of inactivity
        tapTimeoutRef.current = setTimeout(() => {
            setTapCount(0);
        }, 2000);
    };

    if (!isDesktop) {
        return (
            <div
                onClick={handleLogoClick}
                className='app-header__logo tradermaster-logo mobile-logo'
                style={{ cursor: 'pointer' }}
            >
                <span className='tradermaster-text'>TM</span>
            </div>
        );
    }

    return (
        <a
            href='https://www.tradermaster.site/'
            target='_blank'
            rel='noopener noreferrer'
            className='app-header__logo tradermaster-logo'
        >
            <span className='tradermaster-text'>TRADER MASTER</span>
        </a>
    );
};
