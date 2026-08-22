# CPL Quality Controls

## 1. Intake acceptance checks

Reject or return a submission when:

- the property is not in the eligible cohort population;
- a required identifier or quarter end is missing;
- total units are zero or change without explanation;
- occupied units exceed total units or are negative;
- lease, renewal, cancellation, or move-out counts are negative;
- a cost is negative without a documented credit or reversal;
- the same firm/property/quarter appears twice;
- source notes reveal resident, applicant, employee, unit-level, or contact data;
- source files contain hidden sheets or external links that have not been reviewed.

## 2. Reconciliation checks

For every property-quarter:

- Sum media components to the participant's media total where supplied.
- Sum demand-generation components to the participant's marketing total where
  supplied; explain mapping differences.
- Reconcile concessions, vacancy loss, turnover/make-ready, revenue, and NOI to
  the relevant source report or ledger excerpt.
- Confirm new leases and renewals use the standard's event definitions.
- Confirm attributed leases do not exceed executed new leases.
- Confirm cancellations are excluded from executed lease denominators.
- Confirm each source cost enters only one canonical input category.

Tolerance is the greater of $10 or 0.5 percent of the compared total. A difference
above tolerance requires correction or a documented exception.

## 3. Formula test cases

The controlled calculation model must pass these cases:

1. Complete synthetic property with independently calculated expected CPLs.
2. Zero new leases: all new-lease CPLs return blank; costs remain visible.
3. Zero renewals: Renewal CPL returns blank.
4. Missing denominator: result returns blank and status is Insufficient.
5. Partial attribution: total Media CPL remains based on all new leases; channel
   CPL and coverage remain separate.
6. Negative vendor credit: allowed only with a source note; subtotal remains
   mathematically correct.
7. Cancellation: excluded from the denominator after the 30-day freeze.
8. Central allocation: allocated amount equals pool multiplied by documented
   allocation rate.
9. TTM: sum-of-numerators divided by sum-of-denominators, not average quarterly CPL.
10. Duplicate row: blocked from analysis.
11. Extreme but valid concession: retained and flagged, not silently winsorized.
12. Owner concentration: cell suppressed when one firm exceeds 25 percent.

## 4. Confidence grading

Apply the lowest grade triggered by any material component:

| Grade | Reconciliation | Allocation | Completeness | Attribution |
|---|---|---|---|---|
| A | Source-system or GL tied | Direct or activity tracked | Required fields complete | ≥90% where used |
| B | Totals tied | Documented estimates | Required fields complete | ≥70% where used |
| C | Partial tie or exceptions | Broad allocation | Optional gaps or estimates | <70% where used |
| Insufficient | Unresolved | Untraceable | Required field missing | Not usable |

## 5. Dual review

- Analyst 1 prepares the mapping and calculation.
- Analyst 2 independently reviews all property inclusion decisions, exceptions,
  allocations, TTM formulas, and private report outputs.
- The participant confirms factual mappings but does not choose peer results.
- One external multifamily operator and one finance/accounting reviewer approve
  the methodology before public release.

## 6. Private report checks

- Participant's own properties are excluded from peer percentiles.
- No peer property or firm can be inferred from labels, sample size, or narrative.
- Metric confidence and peer-set counts are visible.
- Every recommendation distinguishes observed fact from analyst interpretation.
- All numbers tie to the approved calculation output.

## 7. Publication gates

Publish aggregate benchmark statistics only when all conditions pass:

- at least five unrelated firms and 25 valid properties overall;
- each reported cell contains at least five firms and ten properties;
- no firm contributes more than 25 percent of a reported cell;
- all included TTM property observations contain four valid quarters;
- the methodology and limitations are published with the result;
- the destruction protocol is complete for all included participants;
- legal and external methodology review is complete.

If the overall gate fails, publish the standard and methodology lessons only.
Label the work a Founding Cohort Methodology Pilot, not a benchmark.

## 8. Release checklist

- [ ] Version numbers agree across the standard, calculation model, reports, and brief.
- [ ] Participant facts are confirmed.
- [ ] Suppression tests pass.
- [ ] Owner-balanced sensitivity is complete.
- [ ] Restricted working files are destroyed or scheduled within the approved window.
- [ ] Public copy contains no participant names without separate written permission.
- [ ] Claims match the qualified sample and do not imply causality.
- [ ] Corrections contact and methodology challenge process are published.
