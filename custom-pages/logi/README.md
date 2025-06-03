# Logi Revenue Forecast Dashboard

This is a self-contained revenue forecast dashboard for Logi. All necessary files are included in this folder.

## Quick Start

1. Open `revenue-forecast.html` in a web browser
2. That's it! Everything is self-contained.

## Deployment

To deploy this dashboard:

1. Upload the entire `logi` folder to your web server
2. Access `revenue-forecast.html` through your web server
3. No build process or compilation needed

## Folder Structure

```
logi/
├── revenue-forecast.html        # Main dashboard page
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