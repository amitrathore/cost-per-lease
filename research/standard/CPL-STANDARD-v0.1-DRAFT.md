# CPL Standard v0.1

**Status:** Draft for founding-cohort review
**Published by:** Cost Per Lease, independent research initiative
**Effective date:** Not yet effective
**Reporting population:** Stabilized, conventional, market-rate multifamily

## 1. Purpose

The CPL Standard gives owners and operators a shared method for measuring the
cost of creating and maintaining revenue-producing occupancy. It separates new
lease acquisition from renewal economics, then connects both to a period-based
cost per occupied unit.

This standard is an economic management framework. It is not GAAP, tax,
valuation, or causal-attribution guidance. Where it differs from property
accounting presentation, the source accounting values remain unchanged and the
CPL reclassification is documented.

## 2. Reporting basis

- **Observation:** one property-quarter.
- **Primary comparison period:** trailing four quarters (TTM) per property.
- **History requested:** eight consecutive completed quarters.
- **Currency:** U.S. dollars, reported without inflation adjustment in v0.1.
- **Expense basis:** accrual basis when available; otherwise disclose cash basis.
- **Lease basis:** executed leases, subject to a 30-day cancellation freeze.
- **Property eligibility:** stabilized before the first reported quarter;
  conventional, market-rate multifamily; no active lease-up.
- **Excluded populations:** affordable/regulatory-restricted, student, senior,
  military, single-family rental, build-to-rent, and commercial properties.

## 3. Defined lease events

### 3.1 Executed new lease

A signed lease for a new household with a commencement date, excluding renewals,
transfers within the same property, employee units, model units, corporate holds,
and leases cancelled within 30 days after execution.

### 3.2 Executed renewal

A signed extension or replacement agreement for an existing household in the
same unit, excluding month-to-month continuations without a newly executed term.

### 3.3 Cancellation

An executed lease that is rescinded, denied, or otherwise does not proceed
within the 30-day freeze. Cancellations are reported separately and excluded
from CPL denominators.

## 4. Core measures

### 4.1 Media CPL

Measures direct paid-media efficiency.

`Media CPL = direct paid media and ILS expense / executed new leases`

Channel CPL may also be reported as channel spend divided by leases attributed
to that channel. Overall Media CPL always uses all executed new leases; source
attribution coverage is disclosed separately so incomplete attribution cannot
improve the headline metric.

### 4.2 Acquisition CPL

Measures the full cost of generating new demand.

`Acquisition CPL = total demand-generation expense / executed new leases`

Demand-generation expense includes Media CPL costs plus marketing agencies,
creative production, marketing technology, marketing labor allocation, events,
new-resident referral payouts, call tracking, and other documented acquisition
programs.

The word **incremental** is not used in v0.1. Incrementality requires a causal
design that the founding cohort does not provide.

### 4.3 Fully Loaded New-Lease CPL

Measures the operating cost associated with producing new signed leases.

`Fully Loaded New-Lease CPL = (demand-generation + leasing labor + commissions + leasing technology + new-lease concessions) / executed new leases`

### 4.4 Economic New-Lease CPL

Adds period vacancy and turnover economics to the fully loaded measure.

`Economic New-Lease CPL = (fully loaded new-lease costs + vacancy loss + turnover/make-ready cost) / executed new leases`

This is a period-allocation measure, not a claim that each dollar of vacancy or
turnover cost was caused by leases executed in that quarter. TTM is the primary
comparison view because quarterly lease timing can distort this measure.

### 4.5 Renewal CPL

Separates retention economics from new lease acquisition.

`Renewal CPL = (renewal communications + renewal labor + renewal technology allocation + renewal incentives) / executed renewals`

### 4.6 Cost Per Occupied Unit

Measures the period cost of creating and maintaining occupied units.

`Cost Per Occupied Unit = total occupancy creation and maintenance cost / average occupied units`

Total occupancy cost includes acquisition, leasing operations, renewal activity,
concessions, vacancy loss, and turnover/make-ready costs without double counting.
Average occupied units equals the mean of beginning and ending occupied units.

## 5. Cost classification

| Cost | Media | Acquisition | Fully loaded | Economic | Renewal | CPOU |
|---|---:|---:|---:|---:|---:|---:|
| Paid digital and offline media | Yes | Yes | Yes | Yes | No | Yes |
| Internet listing services | Yes | Yes | Yes | Yes | No | Yes |
| Marketing agency, creative, events | No | Yes | Yes | Yes | No | Yes |
| Marketing technology and labor | No | Yes | Yes | Yes | No | Yes |
| Leasing labor, commissions, leasing technology | No | No | Yes | Yes | No | Yes |
| New-lease concessions | No | No | Yes | Yes | No | Yes |
| Vacancy loss and turnover/make-ready | No | No | No | Yes | No | Yes |
| Renewal labor, technology, communications, incentives | No | No | No | No | Yes | Yes |

Costs are assigned once to their most specific category. A subtotal may roll
into later CPL layers, but a source expense may not enter the same layer twice.

## 6. Allocation hierarchy

Shared costs follow this hierarchy:

1. Direct property ledger or invoice assignment.
2. Documented time or activity tracking.
3. Activity driver, such as executed leases or renewal workload.
4. Active units for technology and general shared services.
5. Total units only when no better driver exists.

The allocation method and percentage must be supplied for every centralized
cost. Changes in allocation method between quarters require an explanation and
restatement of comparable prior quarters where practical.

## 7. Concessions and vacancy

- Record the face value of new-lease concessions against the quarter of lease
  execution, not accounting amortization.
- Record renewal incentives separately from new-lease concessions.
- Use the property accounting value for vacancy loss and disclose the ledger
  definition.
- Exclude bad debt, delinquency, and write-offs from vacancy loss.
- Record turnover/make-ready costs incurred during the quarter, including labor,
  materials, vendor expense, cleaning, and unit preparation. Exclude capital
  improvements and casualty restoration.

## 8. Data quality and confidence

Every reported metric receives a confidence grade:

- **A:** reconciled to source systems or general ledger; required fields complete;
  direct allocations; attribution coverage at least 90 percent where relevant.
- **B:** reconciled totals; required fields complete; documented allocation
  estimates; attribution coverage at least 70 percent where relevant.
- **C:** material estimates, missing optional fields, or attribution coverage
  below 70 percent; usable directionally but excluded from narrow benchmark cells.
- **Insufficient:** missing denominator, unreconciled total, impossible value, or
  unresolved category conflict. Metric is not benchmarked.

## 9. Benchmark reporting

- The unit of analysis is a property TTM observation.
- Each property receives equal weight in the primary benchmark.
- Report count, median, 25th percentile, and 75th percentile. Do not report a
  mean as the headline result.
- Private peer comparisons exclude the receiving participant's own properties.
- A published or retained cell requires at least five unrelated firms and ten
  properties, with no firm contributing more than 25 percent.
- The public study requires at least five firms and 25 valid properties overall.
  Below that gate, publish methodology findings only and call the work a pilot.

## 10. Prohibited interpretations

The standard does not support claims that:

- lower CPL always means better asset performance;
- a marketing channel caused an attributed lease;
- one property is superior without considering rent, asset, market, quality, and
  occupancy context;
- cohort findings represent the entire multifamily industry;
- aggregated findings identify or rank a participant.

## 11. Governance and revision

Cost Per Lease maintains the standard independently of Leaser AI. Participant
data is not available to Leaser AI, used for commercial prospecting, or used to
train AI models. Material definition changes require a new version and a dated
change log. Cohort methodology reviewers may recommend changes but do not gain
ownership of the standard.

## 12. Version history

| Version | Date | Status | Change |
|---|---|---|---|
| 0.1-draft | 2026-08-22 | Founding-cohort draft | Initial new-lease, renewal, and occupied-unit framework |

## Sources and legal note

This document is an original research framework. Copyright does not protect
ideas, procedures, processes, systems, methods of operation, concepts, or facts;
it may protect the original written expression and qualifying compilations.
See the [U.S. Copyright Office](https://www.copyright.gov/title17/92chap1.html)
and its [database guidance](https://www.copyright.gov/register/tx-databases.html).

Copyright © 2026 Cost Per Lease. Draft; not for external reliance.
