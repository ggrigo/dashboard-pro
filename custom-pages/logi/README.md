# Logi Revenue Forecast Dashboard

This is a self-contained revenue forecast dashboard for Logi. All necessary files are included in this folder.

## Quick Start

1. Open `revenue-forecast.html` in a web browser
2. That's it! Everything is self-contained.

## Development Log

### 2025-01-06 - Dynamic Data Loading Implementation
- Created `dashboard-data.json` - Extracted all forecast data from SQL statements in `mvp-dashboard-data.md`
- Created `dashboard-data-loader.js` - JavaScript class for loading and accessing JSON data
- Created `revenue-forecast-dynamic.html` - Fully dynamic version that reads from JSON
- Added `dashboard-updater.js` - Simple script for micro-dynamic updates without full rebuild
- Decision: Kept original static version as primary, dynamic loading as optional enhancement

### Key Files Created:
- `dashboard-data.json` (19KB) - Complete forecast data in JSON format
- `dashboard-data-loader.js` (5KB) - Data loading utilities
- `revenue-forecast-dynamic.html` - Dynamic dashboard version
- `dashboard-updater.js` - Minimal update script

### Architecture Decision:
Chose simplicity over complexity - the static HTML with embedded data remains the primary approach. Dynamic loading available as an option but not required. This avoids over-engineering and keeps deployment simple.

### 2025-01-06 - Bug Fixes & Mobile Design Concepts
- Fixed JavaScript error preventing Week 2-5 charts from loading (null reference checks)
- Designed mobile UI improvements (not yet implemented):
  - Tab dropdown selector for mobile (spreadsheet-style)
  - Line charts instead of bar charts on mobile
  - Swiper cards with dot indicators for stats
- Created diagnostic tools for debugging JavaScript issues
- Added COLLABORATION_NOTES.md for working style documentation

## Deployment

To deploy this dashboard:

1. Upload the entire `logi` folder to your web server
2. Access `revenue-forecast.html` through your web server
3. No build process or compilation needed

## Folder Structure

```
logi/
├── revenue-forecast.html          # Main dashboard page (static, production-ready)
├── revenue-forecast-dynamic.html  # Dynamic version (loads from JSON)
├── dashboard-data.json           # Extracted forecast data
├── dashboard-data-loader.js      # JSON data loader class
├── dashboard-updater.js          # Simple value updater
├── assets/
│   ├── css/
│   │   ├── material-dashboard.css   # Template styles
│   │   ├── custom-dashboard.css     # Custom color overrides
│   │   ├── nucleo-icons.css        # Icon fonts
│   │   └── nucleo-svg.css          # SVG icons
│   ├── js/
│   │   ├── dashboard-config.js      # Dashboard configuration
│   │   ├── material-dashboard.min.js # Template JavaScript
│   │   ├── core/
│   │   │   ├── bootstrap.min.js     # Bootstrap framework
│   │   │   └── popper.min.js        # Tooltips
│   │   └── plugins/
│   │       ├── chartjs.min.js       # Chart library
│   │       ├── perfect-scrollbar.min.js
│   │       └── smooth-scrollbar.min.js
│   └── fonts/                       # Icon fonts
├── *.md files                       # Documentation and data definitions
└── README.md
```

## Features

- **Weekly Revenue Forecasts**: View forecasts for weeks W+1 through W+5
- **Category Breakdown**: Revenue by product category (MX Series, Gaming, etc.)
- **Daily Charts**: Visual representation of daily revenue with special events
- **Historical Trends**: 12-week historical view with 5-week forecast
- **Interactive**: Click tabs to switch between weeks and categories

## Customization

### Colors
- Primary color: Blue (#2196f3)
- Edit `assets/css/custom-dashboard.css` to change colors
- Edit `assets/js/dashboard-config.js` for JavaScript color references

### Data
- Revenue data is in `revenue-forecast.html` in the `forecastData` object
- Update the data directly in the JavaScript section

## External Dependencies

The dashboard loads these from CDN:
- Google Fonts (Inter)
- Font Awesome Icons
- Material Symbols (Google Icons)

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Notes

- This is a static dashboard (no backend required)
- All data is embedded in the HTML file
- Fully responsive design

## Data Update Options

### Option 1: Direct Edit (Simplest)
Edit values directly in `revenue-forecast.html`:
```javascript
// Find and update values like:
<h4 class="mb-0">$3.75M</h4>
```

### Option 2: Use Dashboard Updater
1. Uncomment the script tag at the bottom of `revenue-forecast.html`
2. Edit values in `dashboard-updater.js`
3. Refresh the page

### Option 3: Use Dynamic Version
1. Edit `dashboard-data.json` with new values
2. Open `revenue-forecast-dynamic.html`
3. Data loads from JSON automatically

## Documentation Files

- `ai-collaboration-journey.md` - The story of how this dashboard was designed
- `mvp-dashboard-data.md` - SQL schema and data generation scripts
- `revenue-forecast-brief.md` - Business context and assumptions
- `forecast-assumptions-template.md` - Template for documenting forecast assumptions
- `EVENT_CALENDAR.md` - Major events that impact revenue