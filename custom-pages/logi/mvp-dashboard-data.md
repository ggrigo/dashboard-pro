# Revenue Forecast Dashboard - MVP Data Structure

## Overview

This document contains the complete data structure and sample data to power an interactive revenue forecasting dashboard. It includes:

- **5 weeks of forecast data** (W+1 through W+5)
- **5 product categories** with unique characteristics
- **Daily granularity** with event impacts (WWDC 2025, July 4th)
- **Deep dive metrics** for each category (conversion rates, top products, patterns)
- **Historical accuracy tracking** for model performance
- **Pipeline monitoring** for data freshness
- **Full navigation structure** for interactive tabs

The data is structured to load into our MVP schema and power all dashboard views.

---

## 1. Calendar Data (dim_calendar)

```sql
-- Week W+1: June 2 - June 8, 2025
INSERT INTO dim_calendar (date, fiscal_week, day_of_week, day_name, is_weekend, events) VALUES
('2025-06-02', 'W+1', 1, 'Monday', FALSE, '[]'),
('2025-06-03', 'W+1', 2, 'Tuesday', FALSE, '[]'),
('2025-06-04', 'W+1', 3, 'Wednesday', FALSE, '[{"name": "WWDC 2025", "type": "conference", "impact": "high"}]'),
('2025-06-05', 'W+1', 4, 'Thursday', FALSE, '[{"name": "WWDC 2025", "type": "conference", "impact": "high"}]'),
('2025-06-06', 'W+1', 5, 'Friday', FALSE, '[]'),
('2025-06-07', 'W+1', 6, 'Saturday', TRUE, '[]'),
('2025-06-08', 'W+1', 7, 'Sunday', TRUE, '[]');
```

## 2. Forecast Data (forecast_tracking)

```sql
-- W+1 Forecasts by Category (Total: $18.75M)
INSERT INTO forecast_tracking (forecast_date, target_date, product_category, forecast_revenue, baseline_revenue, top_products) VALUES
-- Monday 6/2
('2025-06-01', '2025-06-02', 'MX Series', 578000, 560000, '[{"sku": "MX-001", "name": "MX MASTER 3S", "revenue_share": 0.35}, {"sku": "MX-002", "name": "MX KEYS", "revenue_share": 0.28}, {"sku": "MX-003", "name": "MX ANYWHERE 3", "revenue_share": 0.20}]'),
('2025-06-01', '2025-06-02', 'G Series Gaming', 723000, 645000, '[]'),
('2025-06-01', '2025-06-02', 'Business Solutions', 482000, 492000, '[]'),
('2025-06-01', '2025-06-02', 'Webcams', 361000, 345000, '[]'),
('2025-06-01', '2025-06-02', 'Other', 241000, 245000, '[]'),

-- Tuesday 6/3
('2025-06-01', '2025-06-03', 'MX Series', 589000, 570000, '[{"sku": "MX-001", "name": "MX MASTER 3S", "revenue_share": 0.35}, {"sku": "MX-002", "name": "MX KEYS", "revenue_share": 0.28}, {"sku": "MX-003", "name": "MX ANYWHERE 3", "revenue_share": 0.20}]'),
('2025-06-01', '2025-06-03', 'G Series Gaming', 745000, 662000, '[]'),
('2025-06-01', '2025-06-03', 'Business Solutions', 496000, 507000, '[]'),
('2025-06-01', '2025-06-03', 'Webcams', 372000, 355000, '[]'),
('2025-06-01', '2025-06-03', 'Other', 248000, 252000, '[]'),

-- Wednesday 6/4 (WWDC Day 1 - Spike)
('2025-06-01', '2025-06-04', 'MX Series', 847000, 580000, '[{"sku": "MX-001", "name": "MX MASTER 3S", "revenue_share": 0.38}, {"sku": "MX-002", "name": "MX KEYS", "revenue_share": 0.30}, {"sku": "MX-003", "name": "MX ANYWHERE 3", "revenue_share": 0.18}]'),
('2025-06-01', '2025-06-04', 'G Series Gaming', 962000, 680000, '[]'),
('2025-06-01', '2025-06-04', 'Business Solutions', 641000, 520000, '[]'),
('2025-06-01', '2025-06-04', 'Webcams', 481000, 365000, '[]'),
('2025-06-01', '2025-06-04', 'Other', 320000, 260000, '[]'),

-- Thursday 6/5 (WWDC Day 2 - Spike)
('2025-06-01', '2025-06-05', 'MX Series', 892000, 590000, '[{"sku": "MX-001", "name": "MX MASTER 3S", "revenue_share": 0.40}, {"sku": "MX-002", "name": "MX KEYS", "revenue_share": 0.30}, {"sku": "MX-003", "name": "MX ANYWHERE 3", "revenue_share": 0.17}]'),
('2025-06-01', '2025-06-05', 'G Series Gaming', 1015000, 695000, '[]'),
('2025-06-01', '2025-06-05', 'Business Solutions', 676000, 530000, '[]'),
('2025-06-01', '2025-06-05', 'Webcams', 507000, 375000, '[]'),
('2025-06-01', '2025-06-05', 'Other', 337000, 265000, '[]'),

-- Friday 6/6 (Peak Day for MX Series)
('2025-06-01', '2025-06-06', 'MX Series', 936000, 600000, '[{"sku": "MX-001", "name": "MX MASTER 3S", "revenue_share": 0.36}, {"sku": "MX-002", "name": "MX KEYS", "revenue_share": 0.29}, {"sku": "MX-003", "name": "MX ANYWHERE 3", "revenue_share": 0.19}]'),
('2025-06-01', '2025-06-06', 'G Series Gaming', 893000, 710000, '[]'),
('2025-06-01', '2025-06-06', 'Business Solutions', 594000, 540000, '[]'),
('2025-06-01', '2025-06-06', 'Webcams', 446000, 385000, '[]'),
('2025-06-01', '2025-06-06', 'Other', 296000, 270000, '[]'),

-- Saturday 6/7 (Weekend)
('2025-06-01', '2025-06-07', 'MX Series', 487000, 500000, '[{"sku": "MX-001", "name": "MX MASTER 3S", "revenue_share": 0.33}, {"sku": "MX-002", "name": "MX KEYS", "revenue_share": 0.27}, {"sku": "MX-003", "name": "MX ANYWHERE 3", "revenue_share": 0.22}]'),
('2025-06-01', '2025-06-07', 'G Series Gaming', 812000, 725000, '[]'),
('2025-06-01', '2025-06-07', 'Business Solutions', 540000, 550000, '[]'),
('2025-06-01', '2025-06-07', 'Webcams', 405000, 390000, '[]'),
('2025-06-01', '2025-06-07', 'Other', 269000, 275000, '[]'),

-- Sunday 6/8 (Weekend)
('2025-06-01', '2025-06-08', 'MX Series', 479000, 490000, '[{"sku": "MX-001", "name": "MX MASTER 3S", "revenue_share": 0.33}, {"sku": "MX-002", "name": "MX KEYS", "revenue_share": 0.27}, {"sku": "MX-003", "name": "MX ANYWHERE 3", "revenue_share": 0.22}]'),
('2025-06-01', '2025-06-08', 'G Series Gaming', 798000, 715000, '[]'),
('2025-06-01', '2025-06-08', 'Business Solutions', 531000, 542000, '[]'),
('2025-06-01', '2025-06-08', 'Webcams', 399000, 382000, '[]'),
('2025-06-01', '2025-06-08', 'Other', 265000, 270000, '[]');
```

## 3. Session Data for Conversion Metrics - All Categories

```sql
-- Session data to support conversion rates by category
-- MX Series: 3.2% conversion rate
-- G Series Gaming: 2.8% conversion rate  
-- Business Solutions: 4.1% conversion rate
-- Webcams: 2.4% conversion rate
-- Other: 1.9% conversion rate

INSERT INTO fact_sessions (session_id, session_date, product_category, converted, properties) VALUES
-- MX Series Sessions (3.2% conversion)
('mx-bulk-w1', '2025-06-02', 'MX Series', FALSE, '{"note": "Represents ~3000 daily sessions with 3.2% conversion", "avg_daily_sessions": 3000, "avg_conversions": 96}'),

-- G Series Gaming Sessions (2.8% conversion)
('g-bulk-w1', '2025-06-02', 'G Series Gaming', FALSE, '{"note": "Represents ~4500 daily sessions with 2.8% conversion", "avg_daily_sessions": 4500, "avg_conversions": 126}'),

-- Business Solutions Sessions (4.1% conversion)
('bs-bulk-w1', '2025-06-02', 'Business Solutions', FALSE, '{"note": "Represents ~1800 daily sessions with 4.1% conversion", "avg_daily_sessions": 1800, "avg_conversions": 74}'),

-- Webcams Sessions (2.4% conversion)
('wc-bulk-w1', '2025-06-02', 'Webcams', FALSE, '{"note": "Represents ~2500 daily sessions with 2.4% conversion", "avg_daily_sessions": 2500, "avg_conversions": 60}'),

-- Other Sessions (1.9% conversion)
('ot-bulk-w1', '2025-06-02', 'Other', FALSE, '{"note": "Represents ~2000 daily sessions with 1.9% conversion", "avg_daily_sessions": 2000, "avg_conversions": 38}');

-- Note: On WWDC days (Wed/Thu), session counts increase by ~40-50%
```

## 4. Weekly Summary Metrics

```sql
-- Category Performance Summary for W+1
-- Total Week Revenue: $18.75M (+5.2% vs last week)
-- Tywin Variance: +3.8%

-- MX Series: $4.69M (+8.2% WoW)
-- G Series Gaming: $5.62M (+12.5% WoW)
-- Business Solutions: $3.75M (-2.1% WoW)
-- Webcams: $2.81M (+4.7% WoW)
-- Other: $1.87M (-1.3% WoW)
```

## 5. Key Performance Indicators - All Categories

```sql
-- MX Series Deep Dive Metrics
UPDATE forecast_tracking 
SET properties = '{
  "conversion_rate": 3.2,
  "weekend_impact": -16.7,
  "peak_day": "Friday",
  "avg_daily_revenue": 668571,
  "event_lift_pct": 45.8,
  "top_products": [
    {"name": "MX MASTER 3S", "sku": "MX-001"},
    {"name": "MX KEYS", "sku": "MX-002"},
    {"name": "MX ANYWHERE 3", "sku": "MX-003"}
  ]
}'
WHERE product_category = 'MX Series' AND fiscal_week = 'W+1';

-- G Series Gaming Deep Dive Metrics
UPDATE forecast_tracking 
SET properties = '{
  "conversion_rate": 2.8,
  "weekend_impact": +8.3,
  "peak_day": "Thursday",
  "avg_daily_revenue": 803571,
  "event_lift_pct": 42.1,
  "top_products": [
    {"name": "G PRO X SUPERLIGHT", "sku": "G-001"},
    {"name": "G915 TKL", "sku": "G-002"},
    {"name": "G733", "sku": "G-003"}
  ]
}'
WHERE product_category = 'G Series Gaming' AND fiscal_week = 'W+1';

-- Business Solutions Deep Dive Metrics
UPDATE forecast_tracking 
SET properties = '{
  "conversion_rate": 4.1,
  "weekend_impact": -28.4,
  "peak_day": "Thursday",
  "avg_daily_revenue": 535714,
  "event_lift_pct": 25.2,
  "top_products": [
    {"name": "RALLY BAR", "sku": "BS-001"},
    {"name": "MEETUP", "sku": "BS-002"},
    {"name": "ZONE WIRELESS", "sku": "BS-003"}
  ]
}'
WHERE product_category = 'Business Solutions' AND fiscal_week = 'W+1';

-- Webcams Deep Dive Metrics
UPDATE forecast_tracking 
SET properties = '{
  "conversion_rate": 2.4,
  "weekend_impact": -12.1,
  "peak_day": "Thursday",
  "avg_daily_revenue": 401429,
  "event_lift_pct": 33.5,
  "top_products": [
    {"name": "BRIO 4K", "sku": "WC-001"},
    {"name": "C920s HD PRO", "sku": "WC-002"},
    {"name": "STREAMCAM", "sku": "WC-003"}
  ]
}'
WHERE product_category = 'Webcams' AND fiscal_week = 'W+1';

-- Other Category Deep Dive Metrics
UPDATE forecast_tracking 
SET properties = '{
  "conversion_rate": 1.9,
  "weekend_impact": -5.2,
  "peak_day": "Thursday",
  "avg_daily_revenue": 267857,
  "event_lift_pct": 28.9,
  "top_products": [
    {"name": "CRAYON", "sku": "OT-001"},
    {"name": "SPOTLIGHT", "sku": "OT-002"},
    {"name": "COMBO TOUCH", "sku": "OT-003"}
  ]
}'
WHERE product_category = 'Other' AND fiscal_week = 'W+1';
```

## 5a. Daily Revenue Patterns by Category (for Deep Dive Charts)

```sql
-- Category-specific daily patterns already included in Section 2 forecast data
-- Here's a view to extract daily patterns for each category:

CREATE VIEW v_category_daily_patterns AS
SELECT 
    fc.target_date,
    fc.product_category,
    fc.forecast_revenue as daily_revenue,
    dc.day_name,
    dc.is_weekend,
    CASE 
        WHEN dc.events::text != '[]' THEN 'Event Day'
        ELSE 'Normal Day'
    END as day_type,
    -- Calculate percentage of weekly total
    fc.forecast_revenue / SUM(fc.forecast_revenue) OVER (
        PARTITION BY fc.product_category, dc.fiscal_week
    ) * 100 as pct_of_week
FROM forecast_tracking fc
JOIN dim_calendar dc ON fc.target_date = dc.date
WHERE dc.fiscal_week = 'W+1';

-- This view enables the bar charts in each category deep dive tab
```

## 6. Data Pipeline Status (Expanded)

```sql
-- Detailed pipeline monitoring for dashboard section
INSERT INTO data_pipeline_status (pipeline_name, last_run, status, records_processed, properties) VALUES
-- Core Data Pipelines
('sales_etl', '2025-06-01 23:45:00', 'success', 45234, 
 '{"duration_seconds": 342, "source": "transactional_db", "destination": "warehouse", "error_count": 0, "warning_count": 2}'),

('forecast_model_v2.3.1', '2025-06-02 00:15:00', 'success', 35, 
 '{"model_version": "2.3.1", "categories_processed": 5, "weeks_forecast": 5, "mape": 2.8, "confidence": 94.2}'),

('session_analytics', '2025-06-02 00:30:00', 'success', 128453, 
 '{"unique_visitors": 98234, "sessions_processed": 128453, "conversion_events": 3847, "avg_processing_time_ms": 2.3}'),

('inventory_sync', '2025-06-02 01:00:00', 'success', 847, 
 '{"products_updated": 847, "stock_warnings": 3, "critical_items": ["MX-001", "G-001"], "sync_source": "SAP"}'),

-- Supporting Pipelines
('competitive_intelligence', '2025-06-02 02:00:00', 'success', 156,
 '{"competitors_tracked": 5, "price_changes_detected": 12, "new_products_found": 3}'),

('marketing_attribution', '2025-06-02 02:30:00', 'success', 23567,
 '{"campaigns_processed": 48, "attributed_revenue": 2341000, "channels": ["google", "meta", "email"]}'),

('customer_segmentation', '2025-06-02 03:00:00', 'success', 98234,
 '{"segments_updated": 8, "customers_reclassified": 1823, "new_customers": 342}'),

-- Real-time Streams
('realtime_transactions', '2025-06-02 03:45:00', 'running', 2341,
 '{"status": "healthy", "lag_seconds": 2.1, "throughput_per_minute": 156, "uptime_hours": 724}'),

('web_analytics_stream', '2025-06-02 03:45:00', 'running', 8923,
 '{"status": "healthy", "events_per_second": 148, "error_rate": 0.001, "buffer_usage": 23.4}');

-- Create monitoring view for dashboard
CREATE VIEW v_pipeline_health AS
SELECT 
    CASE 
        WHEN pipeline_name LIKE '%stream%' THEN 'Real-time'
        WHEN pipeline_name LIKE '%etl%' THEN 'Batch ETL'
        WHEN pipeline_name LIKE '%model%' THEN 'ML Models'
        ELSE 'Analytics'
    END as pipeline_category,
    COUNT(*) as pipeline_count,
    SUM(CASE WHEN status = 'success' THEN 1 ELSE 0 END) as successful,
    SUM(CASE WHEN status = 'running' THEN 1 ELSE 0 END) as running,
    SUM(CASE WHEN status = 'failed' THEN 1 ELSE 0 END) as failed,
    MAX(last_run) as last_update
FROM data_pipeline_status
GROUP BY 1;
```

## 7. Historical Forecast Accuracy (Expanded for Dashboard Section)

```sql
-- Historical accuracy by week and category
INSERT INTO forecast_tracking (forecast_date, target_date, product_category, forecast_revenue, actual_revenue, baseline_revenue) VALUES
-- W-4 (4 weeks ago)
('2025-05-05', '2025-05-11', 'MX Series', 4150000, 4080000, 4000000),
('2025-05-05', '2025-05-11', 'G Series Gaming', 4750000, 4812000, 4650000),
('2025-05-05', '2025-05-11', 'Business Solutions', 3680000, 3625000, 3600000),
('2025-05-05', '2025-05-11', 'Webcams', 2690000, 2710000, 2650000),
('2025-05-05', '2025-05-11', 'Other', 1880000, 1873000, 1850000),

-- W-3 (3 weeks ago)
('2025-05-12', '2025-05-18', 'MX Series', 4250000, 4180000, 4100000),
('2025-05-12', '2025-05-18', 'G Series Gaming', 4890000, 5012000, 4750000),
('2025-05-12', '2025-05-18', 'Business Solutions', 3720000, 3690000, 3650000),
('2025-05-12', '2025-05-18', 'Webcams', 2730000, 2695000, 2680000),
('2025-05-12', '2025-05-18', 'Other', 1910000, 1923000, 1870000),

-- W-2 (2 weeks ago)
('2025-05-19', '2025-05-25', 'MX Series', 4320000, 4285000, 4200000),
('2025-05-19', '2025-05-25', 'G Series Gaming', 4950000, 4998000, 4850000),
('2025-05-19', '2025-05-25', 'Business Solutions', 3750000, 3710000, 3700000),
('2025-05-19', '2025-05-25', 'Webcams', 2760000, 2742000, 2700000),
('2025-05-19', '2025-05-25', 'Other', 1920000, 1890000, 1880000),

-- W-1 (Last week - current week becoming historical)
('2025-05-26', '2025-06-01', 'MX Series', 4340000, 4335000, 4250000),
('2025-05-26', '2025-06-01', 'G Series Gaming', 5000000, 4995000, 4900000),
('2025-05-26', '2025-06-01', 'Business Solutions', 3830000, 3825000, 3800000),
('2025-05-26', '2025-06-01', 'Webcams', 2690000, 2685000, 2650000),
('2025-05-26', '2025-06-01', 'Other', 1890000, 1895000, 1860000);

-- Create accuracy metrics view
CREATE VIEW v_forecast_accuracy AS
SELECT 
    DATE_TRUNC('week', target_date) as week,
    product_category,
    AVG(ABS(forecast_revenue - actual_revenue) / actual_revenue * 100) as mape,
    AVG((forecast_revenue - actual_revenue) / actual_revenue * 100) as bias,
    COUNT(*) as data_points
FROM forecast_tracking
WHERE actual_revenue IS NOT NULL
GROUP BY 1, 2;

-- Overall accuracy: MAPE ~2.8%, slight positive bias of +0.7%
```

## 8. Future Weeks Data (W+2 through W+5)

### W+2: June 9-15, 2025 (Post-WWDC Normalization)
```sql
-- Calendar entries for W+2
INSERT INTO dim_calendar (date, fiscal_week, day_of_week, day_name, is_weekend, events) VALUES
('2025-06-09', 'W+2', 1, 'Monday', FALSE, '[]'),
('2025-06-10', 'W+2', 2, 'Tuesday', FALSE, '[]'),
('2025-06-11', 'W+2', 3, 'Wednesday', FALSE, '[]'),
('2025-06-12', 'W+2', 4, 'Thursday', FALSE, '[]'),
('2025-06-13', 'W+2', 5, 'Friday', FALSE, '[]'),
('2025-06-14', 'W+2', 6, 'Saturday', TRUE, '[]'),
('2025-06-15', 'W+2', 7, 'Sunday', TRUE, '[]');

-- W+2 Weekly Totals (Post-event dip expected)
-- Total: $16.9M (-9.9% vs W+1)
-- MX Series: $4.21M (-10.2%)
-- G Series Gaming: $4.98M (-11.4%) 
-- Business Solutions: $3.58M (-4.5%)
-- Webcams: $2.53M (-10.0%)
-- Other: $1.60M (-14.4%)
```

### W+3: June 16-22, 2025 (Return to Baseline)
```sql
-- W+3 Weekly Totals
-- Total: $17.8M (+5.3% vs W+2)
-- MX Series: $4.45M (+5.7%)
-- G Series Gaming: $5.25M (+5.4%)
-- Business Solutions: $3.70M (+3.4%)
-- Webcams: $2.65M (+4.7%)
-- Other: $1.75M (+9.4%)
```

### W+4: June 23-29, 2025 (End of Quarter Push)
```sql
-- W+4 Weekly Totals
-- Total: $19.2M (+7.9% vs W+3)
-- MX Series: $4.80M (+7.9%)
-- G Series Gaming: $5.68M (+8.2%)
-- Business Solutions: $4.05M (+9.5%) -- Quarter-end B2B deals
-- Webcams: $2.80M (+5.7%)
-- Other: $1.87M (+6.9%)
```

### W+5: June 30-July 6, 2025 (Q3 Start + July 4th)
```sql
-- Calendar entries showing July 4th holiday
INSERT INTO dim_calendar (date, fiscal_week, day_of_week, day_name, is_weekend, events) VALUES
('2025-07-04', 'W+5', 5, 'Friday', FALSE, '[{"name": "Independence Day", "type": "holiday", "impact": "negative"}]');

-- W+5 Weekly Totals
-- Total: $16.5M (-14.1% vs W+4) -- Holiday impact
-- MX Series: $4.12M (-14.2%)
-- G Series Gaming: $4.95M (-12.9%)
-- Business Solutions: $3.20M (-21.0%) -- Biggest holiday impact
-- Webcams: $2.45M (-12.5%)
-- Other: $1.78M (-4.8%)
```

### Sample Daily Forecast for W+2 (for interactive drill-down)
```sql
-- Monday 6/9 (Post-WWDC Monday)
INSERT INTO forecast_tracking (forecast_date, target_date, product_category, forecast_revenue, baseline_revenue) VALUES
('2025-06-01', '2025-06-09', 'MX Series', 520000, 560000),
('2025-06-01', '2025-06-09', 'G Series Gaming', 640000, 645000),
('2025-06-01', '2025-06-09', 'Business Solutions', 460000, 492000),
('2025-06-01', '2025-06-09', 'Webcams', 325000, 345000),
('2025-06-01', '2025-06-09', 'Other', 205000, 245000);
-- Continue pattern for rest of W+2...
```

## 9. Weekly Progress View Data

```sql
-- Create view for Weekly Progress tab
CREATE VIEW v_weekly_progress AS
SELECT 
    fiscal_week,
    SUM(forecast_revenue) as total_revenue,
    -- Category breakdown
    SUM(CASE WHEN product_category = 'MX Series' THEN forecast_revenue END) as mx_revenue,
    SUM(CASE WHEN product_category = 'G Series Gaming' THEN forecast_revenue END) as gaming_revenue,
    SUM(CASE WHEN product_category = 'Business Solutions' THEN forecast_revenue END) as business_revenue,
    SUM(CASE WHEN product_category = 'Webcams' THEN forecast_revenue END) as webcam_revenue,
    SUM(CASE WHEN product_category = 'Other' THEN forecast_revenue END) as other_revenue,
    -- Variance calculations
    SUM(forecast_revenue - baseline_revenue) / SUM(baseline_revenue) * 100 as tywin_variance,
    -- Event flags
    MAX(CASE WHEN dc.events::text != '[]' THEN 1 ELSE 0 END) as has_event
FROM forecast_tracking ft
JOIN dim_calendar dc ON ft.target_date = dc.date
GROUP BY fiscal_week;

-- Weekly Progress Summary Data
INSERT INTO forecast_tracking (forecast_date, target_date, product_category, forecast_revenue, baseline_revenue, top_products)
SELECT 
    '2025-06-01' as forecast_date,
    date as target_date,
    'WEEKLY_SUMMARY' as product_category,
    CASE fiscal_week
        WHEN 'W+1' THEN 18750000  -- $18.75M
        WHEN 'W+2' THEN 16900000  -- $16.90M
        WHEN 'W+3' THEN 17800000  -- $17.80M
        WHEN 'W+4' THEN 19200000  -- $19.20M
        WHEN 'W+5' THEN 16500000  -- $16.50M
    END as forecast_revenue,
    CASE fiscal_week
        WHEN 'W+1' THEN 18100000  -- Tywin baseline
        WHEN 'W+2' THEN 17200000
        WHEN 'W+3' THEN 17500000
        WHEN 'W+4' THEN 18500000
        WHEN 'W+5' THEN 17000000
    END as baseline_revenue,
    '[]' as top_products
FROM dim_calendar
WHERE date IN ('2025-06-08', '2025-06-15', '2025-06-22', '2025-06-29', '2025-07-06');
```

## 10. Interactive Navigation Structure

```sql
-- Create metadata table for UI navigation
CREATE TABLE dashboard_metadata (
    view_type VARCHAR(50),
    view_name VARCHAR(100),
    display_order INTEGER,
    is_active BOOLEAN DEFAULT true,
    properties JSONB DEFAULT '{}'
);

INSERT INTO dashboard_metadata (view_type, view_name, display_order, properties) VALUES
-- Top-level week tabs
('week_tab', 'W+1', 1, '{"date_range": "Jun 2 - Jun 8, 2025", "is_focus": true}'),
('week_tab', 'W+2', 2, '{"date_range": "Jun 9 - Jun 15, 2025"}'),
('week_tab', 'W+3', 3, '{"date_range": "Jun 16 - Jun 22, 2025"}'),
('week_tab', 'W+4', 4, '{"date_range": "Jun 23 - Jun 29, 2025"}'),
('week_tab', 'W+5', 5, '{"date_range": "Jun 30 - Jul 6, 2025"}'),
('week_tab', 'Weekly Progress', 6, '{"type": "summary_view"}'),

-- Category deep dive tabs
('category_tab', 'MX Series', 1, '{"color": "#0066CC"}'),
('category_tab', 'G Series Gaming', 2, '{"color": "#00AA44"}'),
('category_tab', 'Business Solutions', 3, '{"color": "#FF6600"}'),
('category_tab', 'Webcams', 4, '{"color": "#AA00FF"}'),
('category_tab', 'Other', 5, '{"color": "#666666"}');
```

## Notes

1. **Tywin Variance**: Calculated as (forecast_revenue - baseline_revenue) / baseline_revenue
2. **Conversion Rates**: Derived from fact_sessions joined with fact_sales
3. **Weekend Impact**: Calculated comparing weekend vs weekday revenue
4. **Event Impact**: WWDC days show ~45-50% lift vs baseline
5. **Top Products**: Stored as JSON in forecast_tracking for quick access
6. **Category Characteristics**:
   - **MX Series**: Strong weekday bias, Friday peak
   - **G Series Gaming**: Weekend positive (gamers!), Thursday peak  
   - **Business Solutions**: Strongest weekday bias (-28% weekends)
   - **Webcams**: Moderate weekday bias
   - **Other**: Minimal weekend impact

This data structure now supports:
- All 5 category deep dive tabs with unique metrics
- W+1 through W+5 week navigation
- Weekly Progress summary view
- Full interactivity for dashboard navigation!

## Data Coverage Summary

### ✅ Complete Data Available:
- **W+1 (Focus Week)**: Full daily detail for all categories
- **All Category Tabs**: Metrics, conversion rates, top products, patterns
- **Weekly Summaries**: W+1 through W+5 totals with growth rates
- **Event Tracking**: WWDC 2025 and July 4th impacts
- **Navigation Structure**: All tabs and views defined

### 🔄 Ready for Extension:
- **Daily Detail for W+2-W+5**: Structure exists, sample data provided
- **Historical Data**: Can backfill previous weeks for trending
- **Real-time Updates**: fact_sales can receive live data
- **Additional Events**: Easy to add via dim_calendar JSON
- **New Products**: Flexible JSON structure in forecast_tracking