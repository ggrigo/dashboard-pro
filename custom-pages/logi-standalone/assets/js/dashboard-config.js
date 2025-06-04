// Dashboard Configuration
// Centralized configuration for colors, charts, and other settings

const DashboardConfig = {
  // Color Palette - Blue Theme
  colors: {
    primary: '#2196f3',      // Blue (main)
    orange: '#ff9800',       // Orange (special events)
    purple: '#7c4dff',       // Purple (category events - lighter purple for better contrast with blue)
    success: '#4caf50',      // Green
    danger: '#f44335',       // Red
    info: '#03a9f4',         // Light Blue
    warning: '#ff9800',      // Yellow/Orange
    dark: '#212529',         // Dark gray
    gray: '#6c757d',         // Medium gray
    grayLight: '#e9ecef',    // Light gray
    white: '#ffffff'
  },

  // Chart Default Options
  chartDefaults: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5],
          color: '#e5e5e5'
        },
        ticks: {
          display: true,
          padding: 10,
          color: '#737373',
          font: {
            size: 12,
            family: "Inter",
            style: 'normal',
            lineHeight: 2
          }
        }
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false
        },
        ticks: {
          display: true,
          color: '#737373',
          padding: 10,
          font: {
            size: 11,
            family: "Inter",
            style: 'normal'
          }
        }
      }
    }
  },

  // Get color for chart elements
  getChartColor: function(type, isSpecial = false) {
    if (isSpecial) {
      return type === 'category' ? this.colors.purple : this.colors.orange;
    }
    return this.colors.primary;
  },

  // Get text color class based on value
  getChangeColorClass: function(value) {
    return value.startsWith('+') ? 'text-success' : 'text-danger';
  },

  // Format large numbers
  formatNumber: function(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  }
};