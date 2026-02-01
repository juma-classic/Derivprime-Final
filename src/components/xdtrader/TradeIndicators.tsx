import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import './TradeIndicators.scss';

export interface TradePosition {
    id: string;
    contractId: string;
    contractType: string;
    symbol: string;
    entryPrice: number;
    entryTime: number;
    stake: number;
    payout: number;
    prediction: 'RISE' | 'FALL' | 'HIGHER' | 'LOWER' | 'OVER' | 'UNDER' | 'EVEN' | 'ODD' | 'MATCHES' | 'DIFFERS';
    barrier?: number;
    duration: number;
    durationType: 'ticks' | 'minutes';
    status: 'OPEN' | 'WON' | 'LOST';
    currentPrice?: number;
    isWinning?: boolean;
}

interface TradeIndicatorsProps {
    trades: TradePosition[];
    currentPrice: number;
    onTradeUpdate?: (trade: TradePosition) => void;
}

const TradeIndicators: React.FC<TradeIndicatorsProps> = observer(({ trades, currentPrice, onTradeUpdate }) => {
    const [activeTrades, setActiveTrades] = useState<TradePosition[]>([]);

    useEffect(() => {
        // Update active trades with current price and winning status
        const updatedTrades = trades.map(trade => {
            if (trade.status === 'OPEN') {
                const isWinning = calculateIsWinning(trade, currentPrice);
                const updatedTrade = {
                    ...trade,
                    currentPrice,
                    isWinning,
                };
                
                // Notify parent of trade update
                if (onTradeUpdate && (trade.isWinning !== isWinning || trade.currentPrice !== currentPrice)) {
                    onTradeUpdate(updatedTrade);
                }
                
                return updatedTrade;
            }
            return trade;
        });

        setActiveTrades(updatedTrades);
    }, [trades, currentPrice, onTradeUpdate]);

    const calculateIsWinning = (trade: TradePosition, price: number): boolean => {
        switch (trade.prediction) {
            case 'RISE':
            case 'HIGHER':
                return price > trade.entryPrice;
            case 'FALL':
            case 'LOWER':
                return price < trade.entryPrice;
            case 'OVER':
                if (trade.barrier !== undefined) {
                    const lastDigit = Math.floor((price * 10000) % 10);
                    return lastDigit > trade.barrier;
                }
                return false;
            case 'UNDER':
                if (trade.barrier !== undefined) {
                    const lastDigit = Math.floor((price * 10000) % 10);
                    return lastDigit < trade.barrier;
                }
                return false;
            case 'EVEN':
                const evenDigit = Math.floor((price * 10000) % 10);
                return evenDigit % 2 === 0;
            case 'ODD':
                const oddDigit = Math.floor((price * 10000) % 10);
                return oddDigit % 2 === 1;
            case 'MATCHES':
                if (trade.barrier !== undefined) {
                    const matchDigit = Math.floor((price * 10000) % 10);
                    return matchDigit === trade.barrier;
                }
                return false;
            case 'DIFFERS':
                if (trade.barrier !== undefined) {
                    const differDigit = Math.floor((price * 10000) % 10);
                    return differDigit !== trade.barrier;
                }
                return false;
            default:
                return false;
        }
    };

    const getTradeIcon = (prediction: string): string => {
        switch (prediction) {
            case 'RISE':
            case 'HIGHER':
                return '📈';
            case 'FALL':
            case 'LOWER':
                return '📉';
            case 'OVER':
                return '⬆️';
            case 'UNDER':
                return '⬇️';
            case 'EVEN':
                return '2️⃣';
            case 'ODD':
                return '1️⃣';
            case 'MATCHES':
                return '🎯';
            case 'DIFFERS':
                return '❌';
            default:
                return '📊';
        }
    };

    const getTradeLabel = (trade: TradePosition): string => {
        switch (trade.prediction) {
            case 'OVER':
            case 'UNDER':
                return `${trade.prediction} ${trade.barrier}`;
            case 'MATCHES':
            case 'DIFFERS':
                return `${trade.prediction} ${trade.barrier}`;
            default:
                return trade.prediction;
        }
    };

    const formatPrice = (price: number): string => {
        return price.toFixed(5);
    };

    const formatTime = (timestamp: number): string => {
        return new Date(timestamp).toLocaleTimeString();
    };

    return (
        <div className="trade-indicators">
            {activeTrades.map(trade => (
                <div
                    key={trade.id}
                    className={`trade-flag ${trade.status.toLowerCase()} ${
                        trade.status === 'OPEN' 
                            ? (trade.isWinning ? 'winning' : 'losing')
                            : trade.status.toLowerCase()
                    }`}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        right: '380px', // Position relative to trading panel width
                        transform: 'translateY(-50%)',
                        zIndex: 1000,
                    }}
                >
                    <div className="flag-pole"></div>
                    <div className="flag-content">
                        <div className="flag-header">
                            <span className="trade-icon">{getTradeIcon(trade.prediction)}</span>
                            <span className="trade-type">{getTradeLabel(trade)}</span>
                            <span className="trade-status-indicator">
                                {trade.status === 'OPEN' && (
                                    trade.isWinning ? '✅' : '❌'
                                )}
                                {trade.status === 'WON' && '🎉'}
                                {trade.status === 'LOST' && '💔'}
                            </span>
                        </div>
                        
                        <div className="flag-details">
                            <div className="price-info">
                                <span className="label">Entry:</span>
                                <span className="value">{formatPrice(trade.entryPrice)}</span>
                            </div>
                            {trade.currentPrice && (
                                <div className="price-info">
                                    <span className="label">Current:</span>
                                    <span className="value">{formatPrice(trade.currentPrice)}</span>
                                </div>
                            )}
                            <div className="stake-info">
                                <span className="label">Stake:</span>
                                <span className="value">${trade.stake}</span>
                            </div>
                            <div className="payout-info">
                                <span className="label">Payout:</span>
                                <span className="value">${trade.payout.toFixed(2)}</span>
                            </div>
                            <div className="time-info">
                                <span className="label">Time:</span>
                                <span className="value">{formatTime(trade.entryTime)}</span>
                            </div>
                        </div>

                        {/* Progress indicator for time-based contracts */}
                        {trade.durationType === 'minutes' && trade.status === 'OPEN' && (
                            <div className="progress-bar">
                                <div className="progress-fill" style={{
                                    width: `${Math.min(100, ((Date.now() - trade.entryTime) / (trade.duration * 60000)) * 100)}%`
                                }}></div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
});

export default TradeIndicators;