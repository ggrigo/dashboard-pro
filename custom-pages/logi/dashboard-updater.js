// Simple dashboard data updater - no server needed
// Just include this script in your HTML

const dashboardData = {
  "W+1": {
    revenue: 3750000,
    tywin: 3600000,
    wow: 5.8,
    categories: {
      "MX Series": { total: 1650000, daily: [225000, 240000, 250000, 235000, 260000, 220000, 220000] },
      "G Series Gaming": { total: 825000, daily: [110000, 115000, 120000, 115000, 125000, 120000, 120000] },
      "Business Solutions": { total: 600000, daily: [90000, 85000, 85000, 90000, 80000, 85000, 85000] },
      "Webcams": { total: 450000, daily: [65000, 60000, 65000, 70000, 65000, 60000, 65000] },
      "Other": { total: 225000, daily: [30000, 35000, 30000, 35000, 30000, 35000, 30000] }
    }
  },
  "W+2": {
    revenue: 4100000,
    tywin: 3900000,
    wow: 9.3,
    categories: {
      "MX Series": { total: 1800000, daily: [240000, 255000, 265000, 250000, 275000, 235000, 235000] },
      "G Series Gaming": { total: 900000, daily: [120000, 125000, 130000, 125000, 135000, 130000, 130000] },
      "Business Solutions": { total: 650000, daily: [95000, 90000, 90000, 95000, 85000, 90000, 90000] },
      "Webcams": { total: 500000, daily: [70000, 65000, 70000, 75000, 70000, 65000, 70000] },
      "Other": { total: 250000, daily: [35000, 40000, 35000, 40000, 35000, 40000, 35000] }
    }
  }
  // Add more weeks as needed
};

// Simple update function - call this when page loads
function updateDashboard() {
  // Update week selector if you want dynamic weeks
  const weekSelector = document.querySelector('.nav-tabs');
  if (weekSelector && weekSelector.children.length === 0) {
    Object.keys(dashboardData).forEach((week, index) => {
      const li = document.createElement('li');
      li.className = 'nav-item';
      li.innerHTML = `
        <a class="nav-link ${index === 0 ? 'active' : ''}" data-bs-toggle="tab" href="#${week.toLowerCase()}" role="tab">
          ${week} ${index === 0 ? '<span class="badge ms-2 text-white" style="background-color: #2196f3;">Focus</span>' : ''}
        </a>
      `;
      weekSelector.appendChild(li);
    });
  }
  
  // Update specific values by ID or class
  // Example: Update W+1 stats
  const w1Data = dashboardData["W+1"];
  const revenueElement = document.querySelector('[data-metric="revenue-w1"]');
  if (revenueElement) {
    revenueElement.textContent = `$${(w1Data.revenue / 1000000).toFixed(2)}M`;
  }
  
  const tywinElement = document.querySelector('[data-metric="tywin-w1"]');
  if (tywinElement) {
    tywinElement.textContent = `$${(w1Data.tywin / 1000000).toFixed(2)}M`;
  }
  
  const wowElement = document.querySelector('[data-metric="wow-w1"]');
  if (wowElement) {
    wowElement.innerHTML = `<i class="fa fa-arrow-up text-sm"></i> ${w1Data.wow}%`;
  }
}

// Helper to format currency
function formatCurrency(value) {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(2)}M`;
  } else if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`;
  }
  return `$${value}`;
}

// Update a specific chart if it exists
function updateChart(chartId, data) {
  const canvas = document.getElementById(chartId);
  if (!canvas) return;
  
  // Get existing chart instance or create new one
  let chart = Chart.getChart(canvas);
  
  if (chart) {
    // Update existing chart data
    chart.data.datasets[0].data = data;
    chart.update();
  } else {
    // Create new chart with the data
    new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Revenue',
          data: data,
          borderColor: '#2196f3',
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            ticks: {
              callback: function(value) {
                return formatCurrency(value);
              }
            }
          }
        }
      }
    });
  }
}

// Call on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateDashboard);
} else {
  updateDashboard();
}

// Export for use in other scripts
window.dashboardData = dashboardData;
window.updateDashboard = updateDashboard;
window.updateChart = updateChart;