# DTrader Integration Guide

## Why Integrate DTrader Directly?

When you integrate DTrader directly into your application (instead of using an iframe), you get:

1. **Commission Attribution** - All trades are attributed to YOUR app_id, so you receive commissions
2. **Shared Authentication** - Users don't need to log in separately
3. **Full Control** - Customize the UI, branding, and user experience
4. **Better Performance** - No iframe overhead or cross-origin limitations
5. **Seamless Integration** - Share state, data, and functionality across your app

## Current Setup

Your application already has:
- ✅ Deriv API connection configured with your app_id
- ✅ Authentication system in place
- ✅ SmartCharts package installed (`@deriv/deriv-charts`)
- ✅ API base configured in `src/external/bot-skeleton`

## How App ID Works

### What is an App ID?
An app_id is a unique identifier that Deriv uses to:
- Track which application initiated a trade
- Attribute commissions to the correct partner
- Apply specific configurations and permissions

### Your Current App ID
Check your app_id in these locations:
1. `src/external/bot-skeleton/services/api/app-id.js`
2. Environment variables (if configured)
3. API connection initialization

### Commission Flow
```
User trades on your site
    ↓
Trade executed via Deriv API with YOUR app_id
    ↓
Deriv attributes trade to your app_id
    ↓
You receive commission on the trade
```

## Integration Options

### Option 1: Use Existing Chart Component (Recommended)

You already have a Chart component that uses SmartCharts. Extend it for trading:

```typescript
// src/pages/dtrader-full.tsx
import React from 'react';
import Chart from './chart/chart';
import TradingPanel from '@/components/trading/TradingPanel';

const DTraderFull: React.FC = () => {
    return (
        <div className="dtrader-full">
            <Chart show_digits_stats={true} />
            <TradingPanel />
        </div>
    );
};
```

### Option 2: Build Custom Trading Interface

Create a custom trading interface using Deriv's API:

```typescript
import { api_base } from '@/external/bot-skeleton';

// Buy a contract
const buyContract = async (params) => {
    const response = await api_base.api.buy({
        buy: params.contract_id,
        price: params.stake,
    });
    return response;
};

// Get available contracts
const getContracts = async (symbol) => {
    const response = await api_base.api.proposal({
        proposal: 1,
        amount: 10,
        basis: 'stake',
        contract_type: 'CALL',
        currency: 'USD',
        duration: 5,
        duration_unit: 't',
        symbol: symbol,
    });
    return response;
};
```

### Option 3: Use Deriv's Official Packages

Install and use Deriv's official trading components:

```bash
npm install @deriv/components @deriv/shared
```

## Step-by-Step Integration

### Step 1: Verify Your App ID

Check that your app_id is correctly configured:

```typescript
// src/external/bot-skeleton/services/api/app-id.js
export const getAppId = () => {
    // Your app_id should be here
    return process.env.REACT_APP_DERIV_APP_ID || '68794'; // Your app_id
};
```

### Step 2: Create Trading Panel Component

```typescript
// src/components/trading/TradingPanel.tsx
import React, { useState } from 'react';
import { api_base } from '@/external/bot-skeleton';

export const TradingPanel: React.FC = () => {
    const [contractType, setContractType] = useState('CALL');
    const [stake, setStake] = useState(10);
    const [duration, setDuration] = useState(5);

    const handleTrade = async () => {
        try {
            // Get proposal
            const proposal = await api_base.api.proposal({
                proposal: 1,
                amount: stake,
                basis: 'stake',
                contract_type: contractType,
                currency: 'USD',
                duration: duration,
                duration_unit: 't',
                symbol: 'R_100', // Volatility 100 Index
            });

            // Buy contract
            if (proposal.proposal) {
                const buy = await api_base.api.buy({
                    buy: proposal.proposal.id,
                    price: stake,
                });
                
                console.log('Trade executed:', buy);
                // Trade is now attributed to YOUR app_id!
            }
        } catch (error) {
            console.error('Trade failed:', error);
        }
    };

    return (
        <div className="trading-panel">
            <h3>Trade Parameters</h3>
            
            <div className="form-group">
                <label>Contract Type</label>
                <select value={contractType} onChange={(e) => setContractType(e.target.value)}>
                    <option value="CALL">Rise</option>
                    <option value="PUT">Fall</option>
                    <option value="DIGITEVEN">Even</option>
                    <option value="DIGITODD">Odd</option>
                </select>
            </div>

            <div className="form-group">
                <label>Stake (USD)</label>
                <input 
                    type="number" 
                    value={stake} 
                    onChange={(e) => setStake(Number(e.target.value))}
                    min="1"
                />
            </div>

            <div className="form-group">
                <label>Duration (ticks)</label>
                <input 
                    type="number" 
                    value={duration} 
                    onChange={(e) => setDuration(Number(e.target.value))}
                    min="1"
                />
            </div>

            <button onClick={handleTrade} className="trade-button">
                Trade Now
            </button>
        </div>
    );
};
```

### Step 3: Integrate with Chart

```typescript
// src/pages/dtrader-full.tsx
import React, { useState } from 'react';
import Chart from './chart/chart';
import { TradingPanel } from '@/components/trading/TradingPanel';
import './dtrader-full.scss';

const DTraderFull: React.FC = () => {
    const [symbol, setSymbol] = useState('R_100');

    return (
        <div className="dtrader-full-container">
            <div className="chart-section">
                <Chart show_digits_stats={true} />
            </div>
            <div className="trading-section">
                <TradingPanel symbol={symbol} />
            </div>
        </div>
    );
};

export default DTraderFull;
```

## Important: App ID Configuration

### Where to Set Your App ID

1. **Environment Variable** (Recommended)
```bash
# .env
REACT_APP_DERIV_APP_ID=YOUR_APP_ID_HERE
```

2. **API Configuration**
```typescript
// src/external/bot-skeleton/services/api/app-id.js
export const getAppId = () => {
    return 'YOUR_APP_ID_HERE';
};
```

3. **API Connection**
```typescript
// When initializing the API
const api = new DerivAPI({
    app_id: 'YOUR_APP_ID_HERE',
    endpoint: 'wss://ws.derivws.com/websockets/v3',
});
```

## Verifying Commission Attribution

### How to Verify Trades Are Attributed to You

1. **Check API Response**
```typescript
const buy = await api_base.api.buy({
    buy: proposal.proposal.id,
    price: stake,
});

// The response will include your app_id
console.log('App ID:', buy.buy.app_id); // Should be YOUR app_id
```

2. **Monitor in Deriv Partner Dashboard**
- Log in to your Deriv partner account
- Check the "Reports" section
- Verify trades are showing up under your app_id

3. **Test with Demo Account**
- Use a demo account first
- Execute test trades
- Verify they appear in your partner dashboard

## Security Considerations

1. **Never expose your app_id secret** (if you have one)
2. **Validate all user inputs** before sending to API
3. **Implement rate limiting** to prevent abuse
4. **Use HTTPS** for all API communications (already configured)
5. **Sanitize user data** before displaying

## Next Steps

1. ✅ Verify your app_id is correctly configured
2. ✅ Test with demo account first
3. ✅ Build the trading panel component
4. ✅ Integrate with your existing chart
5. ✅ Add error handling and validation
6. ✅ Test thoroughly before going live
7. ✅ Monitor trades in partner dashboard

## Resources

- [Deriv API Documentation](https://api.deriv.com/)
- [Deriv WebSocket API](https://developers.deriv.com/docs/websocket-api/)
- [SmartCharts Documentation](https://github.com/deriv-com/smartcharts)
- [Deriv Partner Program](https://deriv.com/partners/)

## Support

If you need help with integration:
1. Check Deriv's API documentation
2. Join Deriv's developer community
3. Contact Deriv partner support
4. Review example implementations in the codebase

---

**Remember**: The key to receiving commissions is ensuring all trades are executed through the Deriv API with YOUR app_id. The iframe approach doesn't give you this control, which is why direct integration is essential.
