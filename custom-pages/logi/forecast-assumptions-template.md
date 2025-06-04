# Revenue Forecast Assumptions Template

## Overview
This template standardizes how we document and communicate forecast assumptions. Each forecast period should explicitly state assumptions, quantify impacts, and assess risks.

---

## 1. TEMPORAL ASSUMPTIONS
*How time-based factors affect the forecast*

### [SEASONAL ASSUMPTION]
- **Pattern:** [e.g., "Back-to-school drives 25% lift in Business Solutions"]
- **Historical Basis:** [e.g., "5-year average shows 22-28% range"]
- **This Period Adjustment:** [e.g., "+3% due to return-to-office trends"]
- **Confidence:** [High/Medium/Low]
- **Risk:** [What could invalidate this]

### [CALENDAR ASSUMPTION]
- **Key Dates:** [holidays, events, observances]
- **Business Day Count:** [vs. normal period]
- **Regional Impacts:** [by geography]
- **Historical Impact:** [% change from baseline]

### [CYCLICAL ASSUMPTION]
- **Cycle Type:** [monthly, quarterly, annual]
- **Current Position:** [e.g., "End of Q2, start of Q3"]
- **Expected Behavior:** [e.g., "Budget flush" or "Summer slowdown"]
- **Magnitude:** [% impact]

---

## 2. EVENT-DRIVEN ASSUMPTIONS
*Specific events that create deviation from baseline*

### [EVENT ASSUMPTION]
- **Event Name:** [e.g., "Prime Day", "WWDC", "Black Friday"]
- **Event Dates:** [specific days]
- **Expected Lift:** [% over baseline by category]
- **Historical Range:** [min-max based on past events]
- **Categories Affected:** [ranked by impact]
- **Halo Effect:** [days before/after impact]
- **Cannibalization:** [% of demand pulled forward]

### [MARKETING ASSUMPTION]
- **Campaign Type:** [promotion, launch, brand]
- **Investment Level:** [$X]
- **Expected ROI:** [X.X based on historical]
- **Channel Mix:** [digital %, traditional %]
- **Timing:** [launch date, duration]
- **Category Focus:** [which products]

---

## 3. BEHAVIORAL ASSUMPTIONS
*How customers and stakeholders act*

### [CUSTOMER ASSUMPTION]
- **Behavior Pattern:** [e.g., "Payday purchasing on 1st and 15th"]
- **Segment Affected:** [B2B, B2C, specific demos]
- **Magnitude:** [% of customers exhibiting behavior]
- **Trend Direction:** [increasing/stable/decreasing]
- **Data Source:** [cohort analysis, surveys, etc.]

### [B2B ASSUMPTION]
- **Procurement Pattern:** [e.g., "Quarter-end acceleration"]
- **Budget Dynamics:** [frozen, released, use-it-or-lose-it]
- **Deal Size Trends:** [increasing/decreasing]
- **Sales Cycle Changes:** [longer/shorter]
- **Win Rate Assumption:** [X% based on pipeline]

### [COMPETITIVE ASSUMPTION]
- **Competitor Actions:** [known or anticipated]
- **Market Share Assumption:** [stable/gaining/losing]
- **Price Competition:** [aggressive/rational]
- **New Entrants:** [threat level]
- **Our Response:** [match/ignore/differentiate]

---

## 4. OPERATIONAL ASSUMPTIONS
*Internal capabilities and constraints*

### [INVENTORY ASSUMPTION]
- **Stock Levels:** [weeks of supply by category]
- **Replenishment:** [lead times, reliability]
- **Allocation Priority:** [which channels/products]
- **Stockout Risk:** [SKUs at risk]
- **Fulfillment Capacity:** [% of peak we can handle]

### [PLATFORM ASSUMPTION]
- **Website Uptime:** [target %]
- **Page Load Speed:** [impact on conversion]
- **Payment Processing:** [capacity, backup systems]
- **Mobile Experience:** [% of traffic, conversion rate]

### [STAFFING ASSUMPTION]
- **Coverage Level:** [% of normal]
- **Overtime Authorized:** [yes/no, budget]
- **Seasonal Hires:** [count, training completion]
- **Productivity:** [calls/hour, orders/person]

---

## 5. EXTERNAL ASSUMPTIONS
*Macro factors beyond our control*

### [ECONOMIC ASSUMPTION]
- **GDP Growth:** [stable/recession/expansion]
- **Consumer Confidence:** [index level, trend]
- **Unemployment:** [rate, direction]
- **Inflation Impact:** [on costs, pricing power]

### [MARKET ASSUMPTION]
- **Category Growth:** [% YoY]
- **Technology Adoption:** [emerging trends]
- **Regulatory Changes:** [tariffs, taxes, compliance]
- **Currency Fluctuation:** [range, hedging]

---

## 6. MODEL ASSUMPTIONS
*Technical parameters and adjustments*

### [ALGORITHM ASSUMPTION]
- **Model Type:** [XGBoost, Prophet, ensemble]
- **Training Window:** [months of history]
- **Feature Selection:** [key variables included/excluded]
- **Confidence Interval:** [%, typically 80-95%]

### [MANUAL ADJUSTMENT]
- **Adjustment Reason:** [model blind spot]
- **Direction & Magnitude:** [+X% or -Y%]
- **Categories Affected:** [specific or all]
- **Justification:** [data or expertise based]

### [BASELINE ASSUMPTION]
- **Baseline Type:** [conservative/aggressive/neutral]
- **Construction Method:** [previous year, rolling average, etc.]
- **Variance Calculation:** [(Forecast - Baseline) / Baseline]

---

## 7. RISK REGISTRY
*What's not in the numbers*

### Unmodeled Risks (Impact if Realized)
1. **[Risk Type]:** [Description] | Impact: [-X% to -Y%]
2. **[Risk Type]:** [Description] | Impact: [-X% to -Y%]
3. **[Risk Type]:** [Description] | Impact: [-X% to -Y%]

### Unmodeled Opportunities (Upside if Realized)
1. **[Opportunity]:** [Description] | Impact: [+X% to +Y%]
2. **[Opportunity]:** [Description] | Impact: [+X% to +Y%]

---

## 8. ASSUMPTION VALIDATION

### Confidence by Time Horizon
- **Week 1:** [X%] - [Rationale]
- **Week 2:** [X%] - [Rationale]
- **Week 3-4:** [X%] - [Rationale]
- **Week 5+:** [X%] - [Rationale]

### Key Metrics to Monitor
1. **Leading Indicator:** [Metric] | Target: [X] | Actual: [Y]
2. **Leading Indicator:** [Metric] | Target: [X] | Actual: [Y]
3. **Leading Indicator:** [Metric] | Target: [X] | Actual: [Y]

### Assumption Review Triggers
- If [metric] deviates by [X%] → Review [assumption]
- If [event] occurs → Revise [assumption]
- If [date] passes → Update [assumption]

---

## TEMPLATE USAGE NOTES

1. **Not all sections required** - Use what's relevant for the forecast period
2. **Be specific** - Quantify impacts in % or $ where possible
3. **Show your work** - Reference historical data, not just intuition
4. **Acknowledge uncertainty** - Ranges are better than false precision
5. **Make it actionable** - Each assumption should inform a decision

### Example Quick Reference:
- **Q4/Holiday Period:** Focus on EVENT (Black Friday), SEASONAL (gifting), INVENTORY (stock up)
- **Q1/New Year:** Focus on BEHAVIORAL (resolutions), B2B (new budgets), RETURNS (post-holiday)
- **Q2/Spring:** Focus on CYCLICAL (tax refunds), MARKETING (spring campaigns), COMPETITIVE (new launches)
- **Q3/Summer:** Focus on CALENDAR (vacations), REGIONAL (school schedules), SEASONAL (back-to-school)

---

*Template Version: 1.0 | Last Updated: [Date] | Next Review: [Quarterly]*