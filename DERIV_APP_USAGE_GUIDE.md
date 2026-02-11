# Official Deriv App (app.deriv.com) Usage Guide

## Overview
You have the complete official Deriv app build in `public/app.deriv.com/`. This is the production-ready DTrader application from app.deriv.com.

## What You Can Do With These Files

### 1. **Host the Official DTrader Directly**
You can serve these files from your domain and inject your app_id to receive commissions.

**How app_id Works:**
- The app reads `app_id` from `localStorage.getItem("config.app_id")`
- If not set, it uses a default app_id from the domain configuration
- All WebSocket connections use: `wss://[server]/websockets/v3?app_id=${app_id}`
- All trades executed through this connection are attributed to your app_id

### 2. **App_ID Injection Methods**

#### Method A: LocalStorage Injection (Recommended)
Inject your app_id before the Deriv app loads:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Your Trading Platform</title>
    <script>
        // Set your app_id BEFORE loading Deriv app
        localStorage.setItem('config.app_id', 'YOUR_APP_ID');
        localStorage.setItem('config.server_url', 'frontend.derivws.com');
    </script>
</head>
<body>
    <iframe src="/app.deriv.com/dtrader/index.html" 
            style="width:100%;height:100vh;border:none;">
    </iframe>
</body>
</html>
```

#### Method B: Direct JavaScript Bundle Modification
Modify the JavaScript files to hardcode your app_id:

1. Find the default app_id in `core.main.*.js`
2. Replace with your app_id
3. This ensures your app_id is always used

### 3. **Integration Options**

#### Option 1: Iframe Integration
```typescript
// In your React component
const DTraderOfficial = () => {
  useEffect(() => {
    // Set app_id in parent window's localStorage
    localStorage.setItem('config.app_id', 'YOUR_APP_ID');
  }, []);

  return (
    <iframe 
      src="/app.deriv.com/dtrader/index.html"
      style={{ width: '100%', height: '100vh', border: 'none' }}
      title="DTrader"
    />
  );
};
```

#### Option 2: Direct Hosting
Serve the files directly from your domain:
- Access via: `https://yourdomain.com/app.deriv.com/dtrader/`
- The app will use your domain's app_id configuration

#### Option 3: Wrapper Page
Create a wrapper that injects authentication and app_id:

```html
<!DOCTYPE html>
<html>
<head>
    <script>
        // Get token from your app
        const token = new URLSearchParams(window.location.search).get('token');
        if (token) {
            localStorage.setItem('authToken', token);
        }
        
        // Set your app_id
        localStorage.setItem('config.app_id', 'YOUR_APP_ID');
    </script>
</head>
<body>
    <script src="/app.deriv.com/js/core.main.3b91927ada4b6b154a30.js"></script>
    <!-- Other scripts will load automatically -->
</body>
</html>
```

## Key Files Structure

```
public/app.deriv.com/
├── dtrader/
│   └── index.html          # DTrader entry point
├── js/
│   ├── core.main.*.js      # Main application bundle (contains app_id logic)
│   ├── core.chunk.trader.*.js  # Trading functionality
│   └── smartcharts/        # Chart components
├── css/
│   └── core.main.*.css     # Styles
├── manifest.json           # PWA manifest
└── service-worker.js       # Service worker for caching
```

## Commission Attribution

### How It Works:
1. User loads your site
2. Your app_id is set in localStorage
3. User trades using the Deriv app
4. All API calls include your app_id
5. Deriv attributes commissions to your app_id

### Verification:
Check the WebSocket connection in browser DevTools:
```
wss://frontend.derivws.com/websockets/v3?app_id=YOUR_APP_ID&l=en&brand=deriv
```

## Important Notes

### ✅ Advantages:
- Official Deriv app - fully tested and production-ready
- All features included (charts, trading, account management)
- Automatic updates when you download new builds
- Full commission attribution to your app_id

### ⚠️ Considerations:
- Large file size (~several MB of JavaScript)
- Requires proper app_id configuration
- May need CORS configuration for API calls
- Service worker may cache files aggressively

### 🔒 Security:
- The app handles authentication via Deriv's OAuth
- Tokens are stored in localStorage
- All API calls go through Deriv's servers
- Your app_id must be registered with Deriv

## Recommended Approach

For your use case (commission attribution), I recommend:

1. **Create a wrapper page** that:
   - Sets your app_id in localStorage
   - Passes authentication token from your app
   - Loads the official Deriv app in an iframe

2. **Add to your navigation** as a tab:
   - Tab name: "DTrader"
   - Route: `/dtrader-official`
   - Component: Wrapper that loads `/app.deriv.com/dtrader/`

3. **Ensure app_id injection** happens before the app loads

## Next Steps

Would you like me to:
1. Create a wrapper component that properly injects your app_id?
2. Add a new tab to your navigation for the official DTrader?
3. Create a script to modify the JavaScript bundles with your app_id?
4. Set up proper routing to serve these files?

Let me know which approach you prefer!
