import React, { useState, useEffect } from 'react';
import './danalysis.scss';

interface DigitStats {
    digit: number;
    count: number;
    percentage: number;
    isHighest: boolean;
    is2ndHighest: boolean;
    isLowest: boolean;
    is2ndLowest: boolean;
}

const DAnalysis: React.FC = () => {
    const [selectedMarket, setSelectedMarket] = useState('Circles');
    const [selectedIndex, setSelectedIndex] = useState('Volatility 10 Index');
    const [tickCount, setTickCount] = useState(1000);
    const [currentPrice, setCurrentPrice] = useState('5428.603');
    const [recentTicks, setRecentTicks] = useState<number[]>([4, 3, 9, 1, 2, 2, 1, 4, 4, 4, 8, 2, 1, 6, 7, 3, 5, 9, 6, 3]);
    const [digitStats, setDigitStats] = useState<DigitStats[]>([]);
    const [lastDigit, setLastDigit] = useState<number>(() => {
        // Initialize with the last digit of the initial price
        return parseInt('5428.603'.slice(-1));
    });

    // Update price and recent ticks periodically
    useEffect(() => {
        const updateLiveData = () => {
            // Generate new price based on selected index
            let basePrice = 5428.603;
            let variation = 50; // Default variation
            
            if (selectedIndex.includes('Volatility 10')) {
                basePrice = Math.random() > 0.5 ? 5428.603 : 4892.156;
                variation = 30;
            } else if (selectedIndex.includes('Volatility 25')) {
                basePrice = Math.random() > 0.5 ? 6234.891 : 5678.234;
                variation = 75;
            } else if (selectedIndex.includes('Volatility 50')) {
                basePrice = Math.random() > 0.5 ? 7891.456 : 7234.789;
                variation = 125;
            } else if (selectedIndex.includes('Volatility 75')) {
                basePrice = Math.random() > 0.5 ? 8456.123 : 7890.456;
                variation = 175;
            } else if (selectedIndex.includes('Volatility 100')) {
                basePrice = Math.random() > 0.5 ? 9123.789 : 8567.234;
                variation = 225;
            } else if (selectedIndex.includes('Jump')) {
                basePrice = Math.random() > 0.5 ? 12345.67 : 11234.56;
                variation = 500;
            } else if (selectedIndex.includes('Crash')) {
                basePrice = Math.random() > 0.5 ? 987.654 : 876.543;
                variation = 100;
            } else if (selectedIndex.includes('Boom')) {
                basePrice = Math.random() > 0.5 ? 1234.567 : 1123.456;
                variation = 150;
            } else if (selectedIndex.includes('Step')) {
                basePrice = Math.random() > 0.5 ? 2345.678 : 2234.567;
                variation = 25;
            } else if (selectedIndex.includes('Bear')) {
                basePrice = Math.random() > 0.5 ? 3456.789 : 3345.678;
                variation = 80;
            } else if (selectedIndex.includes('Bull')) {
                basePrice = Math.random() > 0.5 ? 4567.890 : 4456.789;
                variation = 90;
            }
            
            const priceVariation = (Math.random() - 0.5) * variation;
            const newPrice = (basePrice + priceVariation).toFixed(3);
            setCurrentPrice(newPrice);

            // Extract last digit from price
            const priceLastDigit = parseInt(newPrice.slice(-1));
            setLastDigit(priceLastDigit);

            // Add new tick to recent ticks (use the last digit)
            setRecentTicks(prev => {
                const updated = [priceLastDigit, ...prev];
                return updated.slice(0, 20); // Keep only last 20 ticks
            });
        };

        // Update every 2 seconds
        const interval = setInterval(updateLiveData, 2000);
        return () => clearInterval(interval);
    }, [selectedIndex]);

    // Generate mock digit statistics
    useEffect(() => {
        const generateStats = () => {
            // Generate different base percentages based on selected market and index
            let baseCounts: number[];
            
            // Different patterns based on index type
            if (selectedIndex.includes('Jump')) {
                baseCounts = [8.2, 9.8, 11.5, 9.1, 8.7, 12.3, 9.4, 8.9, 10.6, 11.5];
            } else if (selectedIndex.includes('Crash')) {
                baseCounts = [12.1, 8.5, 9.2, 11.8, 8.9, 7.6, 10.4, 9.7, 10.8, 11.0];
            } else if (selectedIndex.includes('Boom')) {
                baseCounts = [9.5, 11.2, 8.8, 9.6, 12.1, 8.4, 9.9, 10.3, 8.7, 11.5];
            } else if (selectedIndex.includes('Step')) {
                baseCounts = [10.5, 10.5, 10.5, 10.5, 9.8, 9.8, 9.8, 9.8, 9.6, 9.6];
            } else if (selectedIndex.includes('Bear')) {
                baseCounts = [11.8, 9.2, 8.5, 10.6, 9.1, 8.8, 10.2, 9.4, 10.7, 11.7];
            } else if (selectedIndex.includes('Bull')) {
                baseCounts = [8.9, 10.8, 11.4, 9.3, 10.6, 11.2, 9.1, 8.7, 9.5, 10.5];
            } else if (selectedIndex.includes('(1s)')) {
                // 1-second volatility indices have different patterns
                baseCounts = [9.2, 10.8, 9.6, 11.1, 8.9, 9.7, 10.4, 9.3, 10.5, 10.5];
            } else {
                // Standard volatility indices
                switch (selectedMarket) {
                    case 'Matches':
                        baseCounts = [8.5, 11.2, 9.8, 12.1, 8.9, 6.8, 10.5, 9.1, 8.2, 14.9];
                        break;
                    case 'Differs':
                        baseCounts = [11.1, 9.3, 10.8, 8.7, 10.5, 8.9, 9.6, 10.2, 9.8, 11.1];
                        break;
                    default: // Circles
                        baseCounts = [9.9, 10.3, 10.5, 10.9, 9.5, 7.6, 9.8, 9.4, 7.9, 9.2];
                }
            }

            // Add some randomness to simulate live data
            const randomizedCounts = baseCounts.map(count => {
                const variation = (Math.random() - 0.5) * 2; // ±1% variation
                return Math.max(0, Math.min(20, count + variation));
            });

            const stats: DigitStats[] = randomizedCounts.map((percentage, index) => ({
                digit: index,
                count: Math.round((percentage / 100) * tickCount),
                percentage: parseFloat(percentage.toFixed(1)),
                isHighest: false,
                is2ndHighest: false,
                isLowest: false,
                is2ndLowest: false
            }));

            // Sort to find highest and lowest
            const sortedByPercentage = [...stats].sort((a, b) => b.percentage - a.percentage);
            
            // Mark highest and 2nd highest
            if (sortedByPercentage[0]) sortedByPercentage[0].isHighest = true;
            if (sortedByPercentage[1]) sortedByPercentage[1].is2ndHighest = true;
            
            // Mark lowest and 2nd lowest
            const sortedAsc = [...stats].sort((a, b) => a.percentage - b.percentage);
            if (sortedAsc[0]) sortedAsc[0].isLowest = true;
            if (sortedAsc[1]) sortedAsc[1].is2ndLowest = true;

            setDigitStats(stats);
        };

        generateStats();
        
        // Update stats every 3 seconds to simulate live data
        const interval = setInterval(() => {
            generateStats();
        }, 3000);

        return () => clearInterval(interval);
    }, [tickCount, selectedMarket, selectedIndex]);

    const getDigitClass = (stat: DigitStats) => {
        if (stat.isHighest) return 'highest';
        if (stat.is2ndHighest) return 'second-highest';
        if (stat.isLowest) return 'lowest';
        if (stat.is2ndLowest) return 'second-lowest';
        return '';
    };

    const marketOptions = ['Circles', 'Matches', 'Differs'];
    const indexOptions = [
        'Volatility 10 Index',
        'Volatility 25 Index', 
        'Volatility 50 Index',
        'Volatility 75 Index',
        'Volatility 100 Index',
        'Volatility 10 (1s) Index',
        'Volatility 25 (1s) Index',
        'Volatility 50 (1s) Index',
        'Volatility 75 (1s) Index',
        'Volatility 100 (1s) Index',
        'Jump 10 Index',
        'Jump 25 Index',
        'Jump 50 Index',
        'Jump 75 Index',
        'Jump 100 Index',
        'Crash 300 Index',
        'Crash 500 Index',
        'Crash 1000 Index',
        'Boom 300 Index',
        'Boom 500 Index',
        'Boom 1000 Index',
        'Step Index',
        'Bear Market Index',
        'Bull Market Index'
    ];

    return (
        <div className="danalysis">
            <div className="danalysis__header">
                <h1>DAnalysis - Digit Statistics</h1>
            </div>

            <div className="danalysis__controls">
                <div className="control-group">
                    <select 
                        value={selectedMarket} 
                        onChange={(e) => setSelectedMarket(e.target.value)}
                        className="control-select"
                    >
                        {marketOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>

                <div className="control-group">
                    <select 
                        value={selectedIndex} 
                        onChange={(e) => setSelectedIndex(e.target.value)}
                        className="control-select"
                    >
                        {indexOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>

                <div className="control-group">
                    <button 
                        onClick={() => {
                            setTickCount(1000);
                            setRecentTicks([4, 3, 9, 1, 2, 2, 1, 4, 4, 4, 8, 2, 1, 6, 7, 3, 5, 9, 6, 3]);
                            setCurrentPrice('5428.603');
                            setLastDigit(3);
                        }}
                        className="reset-button"
                    >
                        Reset Data
                    </button>
                </div>
            </div>

            <div className="danalysis__stats">
                <div className="stats-header">
                    <div className="ticks-section">
                        <label>TICKS</label>
                        <input 
                            type="number" 
                            value={tickCount} 
                            onChange={(e) => setTickCount(parseInt(e.target.value) || 1000)}
                            className="ticks-input"
                        />
                    </div>
                    <div className="price-section">
                        <span className="price-label">PRICE</span>
                        <span className="price-value">{currentPrice}</span>
                    </div>
                </div>

                <div className="recent-ticks">
                    <h3>LAST 20 TICKS</h3>
                    <div className="ticks-grid">
                        {recentTicks.map((tick, index) => (
                            <div key={index} className="tick-item">
                                {tick}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="digit-analysis">
                    <div className="digit-circles-container">
                        <div className="digit-circles">
                            {digitStats.map((stat) => (
                                <div 
                                    key={stat.digit} 
                                    className={`digit-circle ${getDigitClass(stat)} ${lastDigit === stat.digit ? 'active' : ''}`}
                                >
                                    <div className="digit-number">{stat.digit}</div>
                                    <div className="digit-percentage">{stat.percentage}%</div>
                                    {lastDigit === stat.digit && (
                                        <div className="triangle-indicator">
                                            <div className="triangle"></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="legend">
                        <div className="legend-item">
                            <span className="legend-dot highest"></span>
                            <span>Highest</span>
                        </div>
                        <div className="legend-item">
                            <span className="legend-dot second-highest"></span>
                            <span>2nd Highest</span>
                        </div>
                        <div className="legend-item">
                            <span className="legend-dot lowest"></span>
                            <span>Lowest</span>
                        </div>
                        <div className="legend-item">
                            <span className="legend-dot second-lowest"></span>
                            <span>2nd Lowest</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DAnalysis;