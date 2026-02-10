type TTabsTitle = {
    [key: string]: string | number;
};

type TDashboardTabIndex = {
    [key: string]: number;
};

export const tabs_title: TTabsTitle = Object.freeze({
    WORKSPACE: 'Workspace',
    CHART: 'Chart',
});

export const DBOT_TABS: TDashboardTabIndex = Object.freeze({
    DASHBOARD: 0,
    BOT_BUILDER: 1,
    CHART: 2,
    TUTORIAL: 3,
    PATEL_SIGNALS: 4,
    PATEL_SIGNAL_CENTER: 5,
    ANALYSIS_TOOL: 6,
    SIGNALS: 7,
    DTRADER: 8,
    SIGNALS_SCANNER: 9,
    FREE_BOTS: 10,
    SIGNAL_SAVVY: 11,
    FAST_LANE: 12,
    ZEN: 13,
    ELVIS_ZONE: 14,
    TICKSHARK: 15,
    COPY_TRADING: 16,
    ACCUMULATOR: 17,
    DIGIT_HACKER: 18,
});

export const MAX_STRATEGIES = 10;

export const TAB_IDS = [
    'id-dbot-dashboard',
    'id-bot-builder',
    'id-charts',
    'id-tutorials',
    'id-patel-signals',
    'id-patel-signal-center',
    'id-analysis-tool',
    'id-signals',
    'id-dtrader',
    'id-signals-scanner',
    'id-free-bots',
    'id-signal-savvy',
    'id-fast-lane',
    'id-zen',
    'id-elvis-zone',
    'id-tickshark',
    'id-copy-trading',
    'id-accumulator',
    'id-digit-hacker',
];

export const DEBOUNCE_INTERVAL_TIME = 500;
