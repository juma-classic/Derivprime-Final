# Official Deriv App Integration Guide

## Current Situation

You have:
1. ✅ Official Deriv app files in `public/app.deriv.com/`
2. ✅ Your app_id configured: `82255`
3. ✅ Custom integrated DTrader in `src/pages/dtrader-integrated.tsx`

## Understanding the Files

### What is `public/app.deriv.com/`?
This is the complete production build of the official Deriv app (app.deriv.com). It includes:
- Full DTrader functionality
- SmartCharts integration
- Account management
- All trading features

### How App_ID Works in Official Deriv App

The official app reads app_id from:
```javascript
localStorage.getItem('config.app_id')
```

Then connects to WebSocket:
```javascript
wss://frontend.derivws.com/websockets/v3?app_id=82255&l=en&brand=deriv
```

All trades executed through this connection are attributed to your app_id `82255`, ensuring you receive commissions.

## Integration Options

### Option 1: Use Official Deriv App (Recommended for Full Features)

**Pros:**
- Complete official app with all features
- Tested and production-ready
- Automatic commission attribution
- Professional UI/UX

**Cons:**
- Larger file size
- Less customization
- Requires iframe or wrapper

**Implementation:**
```typescript
// src/pages/dtrader-official.tsx
import React, { useEffect } from 'react';

const DTraderOfficial: React.FC = () => {
    useEffect(() => {
        // Ensure your app_id is set
        localStorage.setItem('config.app_id', '82255');
        localStorage.setItem('config.server_url', 'frontend.derivws.com');
    }, []);

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <iframe
                src="/app.deriv.com/dtrader/index.html"
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                }}
                title="DTrader Official"
            />
        </div>
    );
};

export default DTraderOfficial;
```

### Option 2: Use Your Custom Integrated DTrader (Current)

**Pros:**
- Full customization
- Smaller bundle size
- Direct control over UI
- Already implemented

**Cons:**
- Need to maintain code
- May miss new features
- Requires updates

**Current Implementation:**
- File: `src/pages/dtrader-integrated.tsx`
- Uses your app_id via `api_base.api`
- All trades already attributed to your app_id

### Option 3: Hybrid Approach

Use both:
- Custom DTrader for simple trades (your current implementation)
- Official app for advanced features (charts, analysis, etc.)

## Commission Attribution Verification

### Your Current Setup ✅
Your app is already configured correctly:

```typescript
// From src/components/shared/utils/config/config.ts
export const APP_IDS = {
    LOCALHOST: 82255,
    STAGING: 82255,
    PRODUCTION: 82255,
    LIVE: 80058,
};

export const getAppId = () => {
    let app_id = window.localStorage.getItem('config.app_id');
    if (!app_id || app_id === '80058') {
        app_id = '82255';
        window.localStorage.setItem('config.app_id', app_id);
    }
    return app_id;
};
```

### How to Verify Commission Attribution

1. **Check WebSocket Connection:**
   - Open browser DevTools → Network → WS
   - Look for WebSocket connection
   - URL should contain: `app_id=82255`

2. **Check API Calls:**
   - All `buy` requests should include your app_id
   - Check response for `app_id` field

3. **Verify in Deriv Dashboard:**
   - Log into your Deriv affiliate/API dashboard
   - Check transactions attributed to app_id `82255`

## Recommended Solution

Based on your requirements (commission attribution), I recommend:

### Keep Your Current Custom DTrader
Your current implementation (`src/pages/dtrader-integrated.tsx`) is perfect because:
1. ✅ Uses your app_id (82255)
2. ✅ All trades attributed to you
3. ✅ Customizable interface
4. ✅ Smaller bundle size
5. ✅ Direct control

### Optional: Add Official App as Alternative
If users want advanced features, add the official app as a separate tab:

```typescript
// Add to src/pages/main/main.tsx
{
    id: 'dtrader-advanced',
    title: 'DTrader Pro',
    icon: <Icon icon='IcTrade' />,
    content: <DTraderOfficial />,
}
```

## What to Do with `public/app.deriv.com/`

### Option A: Keep as Backup
- Keep the files for reference
- Use if you need specific features
- Serve via iframe when needed

### Option B: Remove to Save Space
- Your custom implementation is sufficient
- Official app is large (~10MB+)
- Can always re-download if needed

### Option C: Use for Advanced Features
- Create "DTrader Pro" tab
- Load official app for power users
- Keep your custom version for simple trades

## Implementation Steps

### If You Want to Use Official App:

1. **Create wrapper component:**
```bash
# I can create this for you
src/pages/dtrader-official.tsx
```

2. **Add to navigation:**
```typescript
// Update src/pages/main/main.tsx
// Add new tab for official DTrader
```

3. **Test commission attribution:**
```bash
# Execute a test trade
# Verify app_id in WebSocket connection
```

### If You Want to Keep Current Implementation:

1. **No changes needed** - your current setup is perfect
2. **Optional:** Remove `public/app.deriv.com/` to save space
3. **Continue using** `src/pages/dtrader-integrated.tsx`

## Summary

### Your Current Status: ✅ WORKING CORRECTLY

- Your custom DTrader uses app_id `82255`
- All trades are attributed to your app_id
- You receive commissions for all trades
- No changes needed for commission attribution

### The Official App Files:

- Can be used as an alternative/advanced option
- Provides full Deriv app experience
- Requires iframe integration
- Larger file size but more features

## Next Steps

What would you like to do?

1. **Keep current implementation** (recommended) - No action needed
2. **Add official app as "Pro" version** - I'll create the wrapper
3. **Replace with official app** - I'll update navigation
4. **Remove official app files** - I'll clean up the directory

Let me know your preference!
