/**
 * Dashboard Data Loader
 * Loads forecast data from JSON file instead of hardcoded values
 */

class DashboardDataLoader {
  constructor() {
    this.data = null;
    this.dataUrl = 'dashboard-data.json';
  }

  /**
   * Load data from JSON file
   */
  async loadData() {
    try {
      const response = await fetch(this.dataUrl);
      this.data = await response.json();
      return this.data;
    } catch (error) {
      console.error('Error loading dashboard data:', error);
      throw error;
    }
  }

  /**
   * Get forecast data for a specific week
   */
  getForecastData(week) {
    if (!this.data) return null;
    return this.data.forecastData[week];
  }

  /**
   * Get category daily data
   */
  getCategoryDailyData(category, week = 'W+1') {
    if (!this.data) return null;
    return this.data.categoryDailyData[category]?.[week];
  }

  /**
   * Get weekly progress data
   */
  getWeeklyProgressData() {
    if (!this.data) return [];
    return this.data.weeklyProgressData;
  }

  /**
   * Get calendar data for a specific week
   */
  getCalendarData(week) {
    if (!this.data) return [];
    return this.data.calendar[week] || [];
  }

  /**
   * Get session data for categories
   */
  getSessionData(category) {
    if (!this.data) return null;
    return this.data.sessionData[category];
  }

  /**
   * Get pipeline status
   */
  getPipelineStatus() {
    if (!this.data) return [];
    return this.data.pipelineStatus;
  }

  /**
   * Get historical accuracy data
   */
  getHistoricalAccuracy() {
    if (!this.data) return [];
    return this.data.historicalAccuracy;
  }

  /**
   * Transform data to match existing dashboard format
   */
  transformToLegacyFormat() {
    if (!this.data) return null;

    const forecastData = {};
    const categoryDailyData = {};

    // Transform forecast data
    Object.keys(this.data.forecastData).forEach(week => {
      const weekData = this.data.forecastData[week];
      forecastData[week] = {
        ...weekData,
        categories: weekData.categories.map(cat => ({
          name: cat.name,
          revenue: cat.revenue,
          change: cat.change
        })),
        daily: weekData.daily.map(day => ({
          day: day.day,
          date: day.date,
          revenue: day.revenue,
          special: day.special
        }))
      };
    });

    // Transform category daily data
    Object.keys(this.data.categoryDailyData).forEach(category => {
      const catData = this.data.categoryDailyData[category]['W+1'];
      if (catData) {
        categoryDailyData[category] = {
          daily: catData.daily,
          metrics: catData.metrics
        };
      }
    });

    // Transform weekly progress data
    const weeklyProgressData = this.data.weeklyProgressData.map(week => ({
      week: week.week,
      revenue: week.revenue,
      type: week.type
    }));

    return {
      forecastData,
      categoryDailyData,
      weeklyProgressData
    };
  }

  /**
   * Calculate summary statistics
   */
  getSummaryStats() {
    if (!this.data) return null;

    const historicalWeeks = this.data.weeklyProgressData.filter(w => w.type === 'historical');
    const forecastWeeks = this.data.weeklyProgressData.filter(w => w.type === 'forecast');

    const historicalAvg = historicalWeeks.reduce((sum, w) => sum + w.revenue, 0) / historicalWeeks.length;
    const forecastAvg = forecastWeeks.reduce((sum, w) => sum + w.revenue, 0) / forecastWeeks.length;

    const growthRate = ((forecastAvg - historicalAvg) / historicalAvg) * 100;

    const peakWeek = this.data.weeklyProgressData.reduce((max, w) => 
      w.revenue > max.revenue ? w : max
    );

    return {
      historicalAvg,
      forecastAvg,
      growthRate,
      peakWeek: {
        week: peakWeek.week,
        revenue: peakWeek.revenue
      }
    };
  }

  /**
   * Get events for a specific week
   */
  getWeekEvents(week) {
    if (!this.data) return [];
    
    const calendarData = this.data.calendar[week] || [];
    const events = [];
    
    calendarData.forEach(day => {
      if (day.events && day.events.length > 0) {
        day.events.forEach(event => {
          events.push({
            date: day.date,
            dayName: day.day_name,
            ...event
          });
        });
      }
    });
    
    return events;
  }

  /**
   * Calculate week-over-week metrics
   */
  calculateWoWMetrics() {
    if (!this.data) return {};

    const weeks = Object.keys(this.data.forecastData);
    const metrics = {};

    weeks.forEach((week, index) => {
      if (index > 0) {
        const currentWeek = this.data.forecastData[week];
        const previousWeek = this.data.forecastData[weeks[index - 1]];
        
        const change = ((currentWeek.revenue - previousWeek.revenue) / previousWeek.revenue) * 100;
        
        metrics[week] = {
          revenue: currentWeek.revenue,
          previousRevenue: previousWeek.revenue,
          change: change.toFixed(1),
          changeFormatted: (change >= 0 ? '+' : '') + change.toFixed(1) + '%'
        };
      }
    });

    return metrics;
  }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DashboardDataLoader;
}