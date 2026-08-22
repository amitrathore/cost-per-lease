# CPL Calculation Specification

**Version:** 0.1-draft
**Companion to:** CPL Standard v0.1

## 1. Canonical input categories

Each property-quarter uses the following non-overlapping source fields. Blank
means unavailable; zero means confirmed none. Never replace a blank with zero.

### Property and period

`firm_code`, `property_code`, `quarter_end`, `market_tier`, `asset_class`,
`total_units`, `property_age_years`, `stabilized_flag`, `accounting_basis`

### Occupancy and lease events

`begin_occupied_units`, `end_occupied_units`, `executed_new_leases`,
`executed_renewals`, `lease_cancellations_30d`, `move_outs`,
`average_vacant_days`, `attributed_new_leases`

### Costs

`paid_digital_media`, `ils_expense`, `offline_paid_media`,
`marketing_agency_creative`, `marketing_events_referrals`,
`marketing_technology`, `marketing_labor_allocated`, `other_demand_generation`,
`leasing_labor_allocated`, `leasing_commissions`, `leasing_technology_allocated`,
`new_lease_concessions`, `vacancy_loss`, `turnover_make_ready`,
`renewal_communications`, `renewal_labor_allocated`,
`renewal_technology_allocated`, `renewal_incentives`

### Context

`average_effective_monthly_rent`, `average_lease_term_months`,
`property_revenue`, `property_noi`, `source_notes`, `allocation_method`,
`attribution_method`

## 2. Derived values

```text
average_occupied_units
  = (begin_occupied_units + end_occupied_units) / 2

media_cost
  = paid_digital_media + ils_expense + offline_paid_media

demand_generation_cost
  = media_cost
  + marketing_agency_creative
  + marketing_events_referrals
  + marketing_technology
  + marketing_labor_allocated
  + other_demand_generation

fully_loaded_new_lease_cost
  = demand_generation_cost
  + leasing_labor_allocated
  + leasing_commissions
  + leasing_technology_allocated
  + new_lease_concessions

economic_new_lease_cost
  = fully_loaded_new_lease_cost
  + vacancy_loss
  + turnover_make_ready

renewal_cost
  = renewal_communications
  + renewal_labor_allocated
  + renewal_technology_allocated
  + renewal_incentives

total_occupancy_cost
  = economic_new_lease_cost + renewal_cost
```

## 3. Metric formulas

Return blank, not zero or an error, whenever the relevant denominator is blank or
zero.

```text
media_cpl                    = media_cost / executed_new_leases
acquisition_cpl              = demand_generation_cost / executed_new_leases
fully_loaded_new_lease_cpl   = fully_loaded_new_lease_cost / executed_new_leases
economic_new_lease_cpl       = economic_new_lease_cost / executed_new_leases
renewal_cpl                  = renewal_cost / executed_renewals
cost_per_occupied_unit       = total_occupancy_cost / average_occupied_units
attribution_coverage         = attributed_new_leases / executed_new_leases
occupancy_rate_begin         = begin_occupied_units / total_units
occupancy_rate_end           = end_occupied_units / total_units
renewal_share                = executed_renewals / (executed_new_leases + executed_renewals)
noi_margin                   = property_noi / property_revenue
```

## 4. TTM calculation

TTM CPL is calculated as the sum of four consecutive quarters' numerator divided
by the sum of those quarters' denominator. Do not average quarterly CPLs.

Example:

`TTM Media CPL = sum(media_cost for Q-3 through Q) / sum(executed_new_leases for Q-3 through Q)`

At least three of four quarters must be valid for a directional private result.
All four are required for inclusion in a public benchmark cell.

## 5. Allocation rules

For each allocated field, record both `allocation_method` and the percentage or
driver used in `source_notes`.

- Central marketing labor: property-coded time, then campaign activity, then
  executed new leases, then units.
- Central leasing labor: property-coded time, then tour/application/lease
  activity, then executed new leases, then units.
- Technology: active licensed units or seats, then units.
- Mixed marketing/leasing tools: documented functional split before property
  allocation.
- Renewal labor and technology: direct renewal activity, then executed renewals,
  then occupied units.

If the only available method is a portfolio-wide percentage without a traceable
driver, grade the affected metric no higher than C.

## 6. Aggregation

1. Calculate TTM values per property.
2. Exclude properties failing required-field or reconciliation checks.
3. Create the leave-one-participant-out comparison set for each private report.
4. Apply suppression thresholds before any segmented calculation is saved.
5. Calculate count, median, P25, and P75 across equally weighted properties.
6. Run an owner-balanced sensitivity check using the median property value within
   each firm, then the median across firms.
7. If the property-weighted and owner-balanced medians differ by more than 15
   percent, disclose concentration sensitivity and do not describe the property-
   weighted result as representative.

Do not winsorize or delete a valid outlier solely because it is extreme. Investigate
it, retain it if valid, and prefer robust statistics.

## 7. Channel-level CPL

Channel analysis is optional and never substitutes for total Media CPL.

`Channel CPL = channel spend / leases attributed to channel`

Require a documented attribution model, report attributed lease count, and state
that attribution is not causal incrementality. Do not combine channel results
across firms unless source taxonomies have been mapped and coverage passes the
quality gate.

## 8. Reclassification log

Every movement from a participant ledger category into a CPL category must record:

- participant source label;
- source amount and period;
- CPL target category;
- allocation method and rate;
- analyst decision;
- participant confirmation;
- date and reviewer initials.

The log is restricted source data and follows the destruction protocol.
