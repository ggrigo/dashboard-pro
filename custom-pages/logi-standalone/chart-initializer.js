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
        
        // Handle Weekly Progress tab
        const progressTab = document.querySelector('a[href="#weekly-progress"]');
        if (progressTab) {
            progressTab.addEventListener('shown.bs.tab', function() {
                console.log('Weekly Progress tab shown');
                if (typeof createWeeklyProgressChart === 'function') {
                    createWeeklyProgressChart();
                }
                if (typeof createCategoryProgressCharts === 'function') {
                    createCategoryProgressCharts();
                }
            });
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
                    
                    // Generate and create category charts
                    if (typeof generateCategoryDailyData === 'function') {
                        const weekCategoryData = generateCategoryDailyData(weekKey);
                        if (weekCategoryData) {
                            console.log('Creating category charts for', weekKey);
                            Object.keys(weekCategoryData).forEach(catName => {
                                let catId = '';
                                if (catName === 'MX Series') {
                                    catId = 'mx';
                                } else if (catName === 'G Series Gaming') {
                                    catId = 'gaming';
                                } else if (catName === 'Business Solutions') {
                                    catId = 'business';
                                } else if (catName === 'Webcams') {
                                    catId = 'webcams';
                                } else if (catName === 'Other') {
                                    catId = 'other';
                                }
                                createCategoryChart(`${catId}-${weekNum}`, weekCategoryData[catName]);
                                populateEventLegend(`${catId}-${weekNum}`, weekCategoryData[catName], true);
                            });
                        }
                    }
                }
            });
        });
        
    }, 500); // Small delay to ensure DOM is ready
});