import React from 'react';
import Chart from '@/pages/chart';
import { TradingPanel } from '@/components/trading/TradingPanel';
import './dtrader-integrated.scss';

/**
 * Integrated DTrader Component
 * 
 * Uses your own Chart and TradingPanel components
 * - No iframe needed
 * - Uses your app's existing authentication
 * - All trades use YOUR app_id (68794) automatically
 * - No separate login required
 */
const DTraderIntegrated: React.FC = () => {
    const [selectedSymbol] = React.useState('R_100');

    return (
        <div className='dtrader-integrated-container'>
            <div className='dtrader-chart-section'>
                <Chart show_digits_stats={true} />
            </div>
            <div className='dtrader-trading-section'>
                <TradingPanel symbol={selectedSymbol} />
            </div>
        </div>
    );
};

export default DTraderIntegrated;
