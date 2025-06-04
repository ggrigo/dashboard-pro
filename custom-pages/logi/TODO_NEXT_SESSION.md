# TODO for Next Claude Code Session

## Outstanding Issues

### 1. Category Charts Canvas Reuse Error (Week 2-5)
**Problem:** "Canvas is already in use" error when switching between weeks
**Attempted Fix:** Added chart destroy logic, but still not working
**Root Cause:** Charts are being initialized multiple times, need better chart instance management
**Solution Ideas:**
- Use a global chart registry to track all chart instances
- Implement proper cleanup in tab switch handlers
- Consider using Chart.js's built-in chart registry

### 2. Mobile UI Implementation
**Designed but not implemented:**
- Tab dropdown selector (spreadsheet-style)
- Line charts instead of bar charts on mobile
- Swiper cards with dot indicators for revenue stats
**Files to modify:** `revenue-forecast.html`

### 3. Missing Elements on Some Week Tabs
**Problem:** Week 4-5 have different HTML structure (missing some classes)
**Fix:** Standardize HTML structure across all week tabs

### 4. Chart Initialization Timing
**Issue:** Sometimes charts initialize before DOM is ready
**Consider:** Using MutationObserver or more robust initialization

## Working Features
✅ Week 1 - All charts and category deep dives
✅ Weekly Progress tab with category breakdown
✅ Data Integration status (no blue background)
✅ Main week charts (W+2 through W+5)
✅ All data structures and calculations

## Next Session Game Plan
1. Fix the chart instance management issue first
2. Implement mobile UI improvements
3. Clean up diagnostic files
4. Final testing across all tabs