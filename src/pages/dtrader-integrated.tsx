import React, { useEffect, useState } from 'react';
import { useStore } from '@/hooks/useStore';
import './dtrader-integrated.scss';

/**
 * Integrated DTrader Component
 * 
 * Loads DTrader with custom app_id configuration
 * Uses external DTrader but with localStorage override for app_id
 */
const DTraderIntegrated: React.FC = () => {
    const { client } = useStore();
    const [iframeUrl, setIframeUrl] = useState('https://deriv-dtrader.vercel.app');

    useEffect(() => {
        // Set custom app_id in localStorage before DTrader loads
        // This will be picked up by the getAppId function
        localStorage.setItem('config.app_id', '68794');
        
        console.log('🎯 DTrader: Set custom app_id 68794 in localStorage');
        
        // Pass authentication token to DTrader via URL parameters
        const activeLoginid = client?.loginid;
        
        if (activeLoginid) {
            // Get token from localStorage (where Deriv stores it)
            const token = localStorage.getItem(`client.accounts.${activeLoginid}.token`);
            
            if (token) {
                const url = new URL('https://deriv-dtrader.vercel.app');
                url.searchParams.set('token', token);
                url.searchParams.set('acct1', activeLoginid);
                url.searchParams.set('app_id', '68794'); // Pass app_id via URL
                setIframeUrl(url.toString());
                
                console.log('🔐 DTrader: Passing authentication token and app_id to DTrader');
            }
        } else {
            // Even without login, pass app_id
            const url = new URL('https://deriv-dtrader.vercel.app');
            url.searchParams.set('app_id', '68794');
            setIframeUrl(url.toString());
        }
    }, [client?.loginid]);

    return (
        <div className='dtrader-integrated-container'>
            <iframe
                src={iframeUrl}
                title='DTrader'
                className='dtrader-iframe'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
            />
        </div>
    );
};

export default DTraderIntegrated;
