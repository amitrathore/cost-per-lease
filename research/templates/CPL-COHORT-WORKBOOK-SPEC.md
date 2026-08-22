# Controlled Cohort Workbook Specification

This specification governs the Excel/Google Sheets version of the cohort intake.
Until a controlled workbook is generated and visually verified, participants may
use `CPL-COHORT-INTAKE.csv` with `CPL-COHORT-DATA-DICTIONARY.csv`. Do not add or
rename columns after intake begins.

## Workbook tabs

### 1. Read Me

- Program purpose, eligibility, submission deadline, and secure-transfer method.
- Plain warning: no resident, applicant, employee, unit-level, contact, or raw CRM data.
- Blank-versus-zero rule.
- Eight-quarter request and one-row-per-property-quarter rule.
- Cost Per Lease contact and version number.

### 2. Submission

- Flat table matching `CPL-COHORT-INTAKE.csv` exactly.
- Maximum 400 input rows, sufficient for 50 properties × 8 quarters.
- Freeze header row and first two identifier columns.
- Filters enabled.
- No merged cells, formulas, macros, hidden rows, hidden columns, external links,
  comments containing source data, or embedded objects.
- Blue font for participant inputs; black reserved for validation formulas.
- Dates formatted `yyyy-mm-dd`; currency `$#,##0;[Red]($#,##0);-`; percentages
  `0.0%`; counts `#,##0;[Red](#,##0);-`.

Data validation:

- `market_tier`: Primary, Secondary, Tertiary
- `asset_class`: A, B, C
- `stabilized_flag`: TRUE, FALSE
- `accounting_basis`: Accrual, Cash, Mixed
- `allocation_method`: Direct, Time, Activity, Active units, Total units, Mixed
- `attribution_method`: First touch, Last touch, Multi-touch, Self-reported, Mixed, None
- Quarter end must be a valid calendar quarter-end.
- Counts and ordinary costs must be nonnegative; documented credits may be entered
  as negative values but must be explained in `source_notes`.

### 3. Data Dictionary

Import `CPL-COHORT-DATA-DICTIONARY.csv` unchanged. Freeze and filter the header.

### 4. Validation

Show one row per submission record with:

- duplicate firm/property/quarter status;
- quarter-end validity;
- occupancy range status;
- attribution count status;
- required-field completeness;
- source-note requirement;
- row status and human-readable correction.

No validation should silently modify an input.

### 5. Synthetic Example

Import `CPL-SYNTHETIC-INPUT.csv` and display derived calculations from workbook
formulas. This tab demonstrates expected categories; it is not participant data.

### 6. Expected Results

Import `CPL-SYNTHETIC-EXPECTED.csv`. A visible model-status cell must show `OK`
only when every synthetic formula result matches expected values within $0.01 or
0.01 percentage point.

## Formula requirements

- Use bounded ranges, never whole-column references.
- Guard division by blank or zero denominator and return blank.
- Calculate TTM as summed numerator divided by summed denominator.
- Keep input, calculation, and check areas distinct.
- Do not use volatile functions, circular references, or hard-coded business values
  inside formulas.
- Use formulas, not formatting alone, to expose validation status.

## Visual and structural verification

Before release:

1. Inspect all tab names, headers, formulas, validation rules, and number formats.
2. Scan for `#REF!`, `#DIV/0!`, `#VALUE!`, `#NAME?`, and `#N/A`.
3. Render every tab and check clipping, wrapping, colors, formulas, and navigation.
4. Confirm there are no macros, external links, hidden sheets, hidden rows/columns,
   or participant values in the synthetic example.
5. Save the controlled release as `CPL-Founding-Cohort-Intake-v0.1.xlsx`.

## Release blocker

The `.xlsx` release must be generated with the approved spreadsheet artifact
runtime and pass a rendered visual review. The canonical CSVs in this directory
are usable now; they also prevent the workbook UI from becoming a competing data
definition.
