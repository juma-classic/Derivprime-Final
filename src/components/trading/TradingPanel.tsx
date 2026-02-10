import React, { useState, useEffect } from 'react';
import { api_base } from '@/external/bot-skeleton';
import { useStore } from '@/hooks/useStore';
import './TradingPanel.scss';

interface ProposalResponse {
    proposal?: {
        id: string;
        ask_price: number;
        payout: number;
        spot: number;
        display_value: string;
    };
    error?: {
        message: string;
    };
}

export const TradingPanel: React.FC<{ symbol: string }> = ({ symbol }) => {
    const { client } = useStore();
    const [contractType, setContractType] = useState('CALL');
    const [stake, setStake] = useState(10);
    const [duration, setDuration] = useState(5);
    const [durationType, setDurationType] = useState<'t' | 'm'>('t');
    const [proposal, setProposal] = useState<ProposalResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const isLoggedIn = Boolean(client?.loginid);

    // Get proposal whenever parameters change (only if logged in)
    useEffect(() => {
        if (!isLoggedIn) {
            setProposal(null);
            return;
        }

        const getProposal = async () => {
            if (!api_base.api) return;

            try {
                const response = await api_base.api.proposal({
                    proposal: 1,
                    amount: stake,
                    basis: 'stake',
                    contract_type: contractType,
                    currency: client.currency || 'USD',
                    duration: duration,
                    duration_unit: durationType,
                    symbol: symbol,
                });

                setProposal(response as ProposalResponse);
                setError(null);
            } catch (err: any) {
                console.error('Proposal error:', err);
                setError(err.message || 'Failed to get proposal');
            }
        };

        const debounce = setTimeout(getProposal, 500);
        return () => clearTimeout(debounce);
    }, [contractType, stake, duration, durationType, symbol, client?.loginid, client?.currency, isLoggedIn]);

    const handleTrade = async () => {
        if (!api_base.api || !proposal?.proposal) {
            setError('No proposal available');
            return;
        }

        setIsLoading(true);
        setError(null);
        setSuccessMessage(null);

        try {
            const buyResponse = await api_base.api.buy({
                buy: proposal.proposal.id,
                price: stake,
            });

            if (buyResponse.buy) {
                setSuccessMessage(
                    `✅ Trade executed! Contract ID: ${buyResponse.buy.contract_id}`
                );
                console.log('🎯 Trade executed:', buyResponse);
            } else if (buyResponse.error) {
                setError(buyResponse.error.message);
            }
        } catch (err: any) {
            console.error('Trade error:', err);
            setError(err.message || 'Failed to execute trade');
        } finally {
            setIsLoading(false);
        }
    };

    const contractTypes = [
        { value: 'CALL', label: 'Rise', icon: '📈' },
        { value: 'PUT', label: 'Fall', icon: '📉' },
        { value: 'DIGITEVEN', label: 'Even', icon: '⚖️' },
        { value: 'DIGITODD', label: 'Odd', icon: '🎲' },
        { value: 'DIGITMATCH', label: 'Matches', icon: '🎯' },
        { value: 'DIGITDIFF', label: 'Differs', icon: '❌' },
        { value: 'DIGITOVER', label: 'Over', icon: '⬆️' },
        { value: 'DIGITUNDER', label: 'Under', icon: '⬇️' },
    ];

    return (
        <div className='trading-panel'>
            <div className='trading-panel__header'>
                <h3>Trade Parameters</h3>
                <div className='account-badge'>
                    {client?.currency} {Number(client?.balance || 0).toFixed(2)}
                </div>
            </div>

            <div className='trading-panel__content'>
                {/* Contract Type Selection */}
                <div className='form-section'>
                    <label>Contract Type</label>
                    <div className='contract-type-grid'>
                        {contractTypes.map((type) => (
                            <button
                                key={type.value}
                                className={`contract-type-btn ${contractType === type.value ? 'active' : ''}`}
                                onClick={() => setContractType(type.value)}
                            >
                                <span className='icon'>{type.icon}</span>
                                <span className='label'>{type.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Stake Amount */}
                <div className='form-section'>
                    <label>Stake Amount ({client?.currency || 'USD'})</label>
                    <div className='input-group'>
                        <button
                            className='adjust-btn'
                            onClick={() => setStake(Math.max(1, stake - 1))}
                        >
                            -
                        </button>
                        <input
                            type='number'
                            value={stake}
                            onChange={(e) => setStake(Math.max(1, Number(e.target.value)))}
                            min='1'
                            step='1'
                        />
                        <button
                            className='adjust-btn'
                            onClick={() => setStake(stake + 1)}
                        >
                            +
                        </button>
                    </div>
                    <div className='quick-amounts'>
                        {[5, 10, 25, 50, 100].map((amount) => (
                            <button
                                key={amount}
                                className='quick-amount-btn'
                                onClick={() => setStake(amount)}
                            >
                                {amount}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Duration */}
                <div className='form-section'>
                    <label>Duration</label>
                    <div className='duration-controls'>
                        <div className='input-group'>
                            <button
                                className='adjust-btn'
                                onClick={() => setDuration(Math.max(1, duration - 1))}
                            >
                                -
                            </button>
                            <input
                                type='number'
                                value={duration}
                                onChange={(e) => setDuration(Math.max(1, Number(e.target.value)))}
                                min='1'
                            />
                            <button
                                className='adjust-btn'
                                onClick={() => setDuration(duration + 1)}
                            >
                                +
                            </button>
                        </div>
                        <select
                            value={durationType}
                            onChange={(e) => setDurationType(e.target.value as 't' | 'm')}
                            className='duration-type-select'
                        >
                            <option value='t'>Ticks</option>
                            <option value='m'>Minutes</option>
                        </select>
                    </div>
                </div>

                {/* Proposal Info */}
                {proposal?.proposal && (
                    <div className='proposal-info'>
                        <div className='proposal-row'>
                            <span>Payout:</span>
                            <span className='value'>
                                {client?.currency} {proposal.proposal.payout.toFixed(2)}
                            </span>
                        </div>
                        <div className='proposal-row'>
                            <span>Potential Profit:</span>
                            <span className='value profit'>
                                {client?.currency} {(proposal.proposal.payout - stake).toFixed(2)}
                            </span>
                        </div>
                    </div>
                )}

                {/* Error Message */}
                {error && (
                    <div className='message error-message'>
                        {error}
                    </div>
                )}

                {/* Success Message */}
                {successMessage && (
                    <div className='message success-message'>
                        {successMessage}
                    </div>
                )}

                {/* Login Required Message */}
                {!isLoggedIn && (
                    <div className='message info-message'>
                        Please log in to start trading
                    </div>
                )}

                {/* Trade Button */}
                <button
                    className='trade-button'
                    onClick={handleTrade}
                    disabled={isLoading || !proposal?.proposal || !isLoggedIn}
                    title={!isLoggedIn ? 'Please log in to trade' : ''}
                >
                    {isLoading ? (
                        <>
                            <span className='spinner'></span>
                            Processing...
                        </>
                    ) : !isLoggedIn ? (
                        <>
                            <span className='icon'>🔐</span>
                            Login to Trade
                        </>
                    ) : (
                        <>
                            <span className='icon'>🚀</span>
                            Trade Now
                        </>
                    )}
                </button>

                {/* Info Notice */}
                <div className='info-notice'>
                    <p>
                        💰 Trades execute through YOUR app_id
                        <br />
                        ✅ You receive commissions on all trades
                    </p>
                </div>
            </div>
        </div>
    );
};
