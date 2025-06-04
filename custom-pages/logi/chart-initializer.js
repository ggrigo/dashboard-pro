// Chart Initializer - Ensures charts are properly initialized
console.log('Chart initializer loading...');

// Wait for all resources to load
window.addEventListener('load', function() {
    console.log('Page fully loaded, initializing charts...');
    
    // Check if Chart.js is available
    if (typeof Chart === 'undefined') {
        console.error('Chart.js is not loaded!');
        return;
    }
    
    // Check if DashboardConfig is available
    if (typeof DashboardConfig === 'undefined') {
        console.error('DashboardConfig is not loaded!');
        return;
    }
    
    // Check if forecastData is available
    if (typeof forecastData === 'undefined') {
        console.error('forecastData is not defined!');
        return;
    }
    
    // Force initialization of the first week's charts
    setTimeout(() => {
        console.log('Forcing chart initialization...');
        
        // Check if the functions exist
        if (typeof populateCategoryBreakdown === 'function') {
            populateCategoryBreakdown('1', forecastData['W+1']);
            console.log('Category breakdown populated');
        }
        
        if (typeof createDailyChart === 'function') {
            createDailyChart('1', forecastData['W+1']);
            console.log('Daily chart created');
        }
        
        if (typeof populateEventLegend === 'function') {
            populateEventLegend('1', forecastData['W+1']);
            console.log('Event legend populated');
        }
        
        // Also initialize charts for other weeks when their tabs are shown
        const weekTabs = document.querySelectorAll('a[href^="#week-"]');
        weekTabs.forEach(tab => {
            tab.addEventListener('shown.bs.tab', function(e) {
                const weekNum = e.target.getAttribute('href').replace('#week-', '');
                const weekKey = 'W+' + weekNum;
                console.log('Tab shown for week:', weekKey);
                
                if (forecastData[weekKey]) {
                    populateCategoryBreakdown(weekNum, forecastData[weekKey]);
                    createDailyChart(weekNum, forecastData[weekKey]);
                    populateEventLegend(weekNum, forecastData[weekKey]);
                }
            });
        });
        
    }, 500); // Small delay to ensure DOM is ready
});