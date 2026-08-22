# Data Handling and Destruction Protocol

**Status:** Operating draft; requires privacy/security counsel review
**Applies to:** Founding CPL Benchmark Cohort restricted data

## 1. Data classes

### Restricted source data

Participant workbooks, source reports, ledger excerpts, identity mappings,
reclassification logs, normalized property-quarter records, working calculations,
private reports, and correspondence containing property financial values.

### Retained aggregate research

Counts, medians, P25/P75 values, methodology notes, and non-identifying findings
that pass all firm-count, property-count, and concentration thresholds.

### Administrative records

Executed agreements, contact information, milestone dates, access logs, destruction
logs, and program feedback that contains no property-level operating value.

## 2. Data minimization

Collect only fields in the approved dictionary. Never request or retain resident,
applicant, employee, unit-level, contact, demographic, protected-class, credit,
screening, payment-account, government-identifier, or raw CRM data.

If prohibited data is received:

1. Stop processing.
2. Restrict access to the security custodian.
3. Record the event without copying the prohibited content.
4. Delete the file from primary storage and available trash/version history.
5. Ask the participant to resubmit the approved aggregate template.
6. Notify counsel if exposure may trigger a contractual or legal duty.

## 3. Transfer and storage

- Use an encrypted, access-controlled data room or managed file-transfer service.
- Do not use ordinary email attachments, consumer messaging, or personal cloud drives.
- Require multi-factor authentication.
- Grant least-privilege access only to the named research lead, reviewer, and
  security custodian.
- Disable public links, uncontrolled downloads, and third-party AI features.
- Store the firm/property identity mapping separately from operating data.
- Do not copy restricted data into project repositories, analytics tools, LLMs,
  AI assistants, CRM systems, or Leaser AI.
- Maintain an access log recording user, timestamp, action, and file.

## 4. Working rules

- Use random cohort codes in every analysis file.
- Preserve submitted values; make transformations in a separate normalized file.
- Record reclassifications and allocations in the restricted decision log.
- Export only the minimum values needed for the approved analysis.
- Do not take screenshots of restricted data.
- Do not discuss a participant's values in shared cohort meetings.
- Report suspected unauthorized access immediately to the program owner and counsel.

## 5. Retention schedule

The destruction clock starts when the participant accepts the final report or the
correction window expires, whichever occurs first.

Within 30 calendar days, delete:

- uploaded source files and corrected versions;
- normalized property-quarter records;
- identity mappings;
- reclassification and validation logs;
- working calculations and analyst exports;
- internal copies of the private report;
- restricted correspondence attachments;
- service trash, recycle bins, version histories, and recoverable local copies,
  to the extent supported by the selected provider.

Retain only:

- executed agreements and amendments;
- administrative milestone and access logs without property values;
- destruction certificates;
- cohort feedback not tied to property values;
- aggregate research cells that pass suppression rules;
- the public standard, methodology, and released research.

Backup deletion behavior must be disclosed in the agreement. If immediate physical
deletion from immutable backups is not possible, the data must expire under the
provider's documented backup lifecycle, remain inaccessible for ordinary use, and
never be restored except for disaster recovery. Any restore reactivates the deletion
obligation.

## 6. Aggregate release controls

An aggregate cell may be retained or released only when:

- it contains at least five unrelated firms and ten properties;
- no firm contributes more than 25 percent of the cell;
- it contains no free text or labels that identify a participant;
- small neighboring cells cannot be differenced to infer a participant;
- the research lead and independent reviewer approve it.

Suppress, combine, or do not calculate a cell that fails. Never round or perturb a
small cell and treat that as sufficient anonymity.

## 7. Destruction procedure

1. Security custodian inventories restricted locations using the participant code.
2. Research lead confirms that any retained aggregate contains no participant-
   or property-level record and passes suppression.
3. Security custodian deletes files from active storage, local devices, exports,
   trash, and supported version history.
4. Independent reviewer verifies the inventory and deletion evidence.
5. Program owner signs the destruction certificate and provides it to the participant.
6. Administrative log records the completion date and any backup expiry exception.

## 8. Incident response

For unauthorized access, loss, accidental disclosure, or missed deletion:

1. Contain access and preserve non-content audit evidence.
2. Identify affected participant codes, systems, and time window.
3. Notify the program owner and counsel immediately.
4. Follow contractual and applicable legal notification advice.
5. Document root cause, remediation, and resumption approval.

FTC guidance recommends deliberate collection limits, retention practices, and
security appropriate to the data held. See
[Start with Security](https://www.ftc.gov/business-guidance/resources/start-security-guide-business).
