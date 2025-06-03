# Custom Pages

This folder contains custom dashboard variations that are separate from the Material Dashboard template examples. These pages are designed to be copied to other repositories.

## Structure

```
custom-pages/
├── dashboards/
│   └── revenue-forecast.html    # Revenue Forecast Dashboard (migrated from React)
└── README.md
```

## Usage

1. These pages use the Material Dashboard template assets via relative paths (`../../assets/`)
2. They include custom configuration files:
   - `/assets/css/custom-dashboard.css` - Custom color overrides
   - `/assets/js/dashboard-config.js` - JavaScript configuration

## Copying to Another Repo

When copying these pages to another repository:

1. Copy the HTML file from `custom-pages/dashboards/`
2. Also copy these required files:
   - `/assets/css/custom-dashboard.css`
   - `/assets/js/dashboard-config.js`
3. Ensure the target repo has Material Dashboard assets or update the paths accordingly

## Pages

### Revenue Forecast Dashboard
- **File**: `dashboards/revenue-forecast.html`
- **Description**: Complete revenue forecasting dashboard with weekly views, category breakdowns, and historical trends
- **Features**: 
  - Week-by-week revenue forecasts (W+1 to W+5)
  - Category revenue breakdown
  - Daily revenue charts with special events
  - Weekly progress visualization
  - Category deep-dive analysis
- **Color Theme**: Blue (#2196f3) primary with orange/purple accents