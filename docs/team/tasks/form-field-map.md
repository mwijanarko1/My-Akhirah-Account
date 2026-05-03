# Form field maps (public website)

Maps align with [`src/lib/validation/forms.ts`](../../../src/lib/validation/forms.ts) and POST handlers under `src/app/api/*/route.ts`.  
Server merges `requestMeta` (request id, user agent hash, IP hash, source) inside the route—**do not send sensitive keys from the browser.**

## Anti-spam / timing (all public forms via `multipart/form-data`)

Same pattern as footer newsletter: omit from visible UI where appropriate, keep in HTML.

| Visible label | `name`    | Control type | autocomplete | Required | Sent to Convex / API                                                                                                                                 |
| ------------- | --------- | ------------ | ------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| (hidden)      | `company` | hidden text  | off          | Always   | Honeypot: must remain empty [`verifyHoneypot`](../../../src/lib/validation/forms.ts)                                                                  |
| (hidden)      | `startedAt` | hidden number (ms since epoch string) | off | Recommended | Timing check [`verifySubmissionDelay`](../../../src/lib/validation/forms.ts)                                                                   |

---

## Contact — `POST /api/contact`

| Visible label          | `name`    | Control type                     | autocomplete      | Required | API payload key (after `parseContactForm`; matches Convex `submitContact`) |
| ---------------------- | --------- | -------------------------------- | ----------------- | -------- | -------------------------------------------------------------------------- |
| Full name              | `fullName` | text                             | name              | Yes      | `fullName` (max **160**)                                                    |
| Email                  | `email`   | email                            | email             | Yes      | `email` (max **255**)                                                       |
| Phone                  | `phone`   | tel                              | tel               | No       | `phone` (max **60**, omitted if empty)                                       |
| Subject                | `subject` | text                             | on                | Yes      | `subject` (max **200**)                                                     |
| Message                | `message` | textarea                         | off               | Yes      | `message` (max **6000**)                                                    |
| _(see anti-spam table)_ | —         | hidden                           | —                 | —        | _(not parsed into message body)_                                             |

Convex row fields mirror these keys (`phone` optional). Status is assigned server-side.

---

## Newsletter — `POST /api/newsletter`

| Visible label           | `name`                | Control type | autocomplete | Required | API payload key (after `parseNewsletterForm`; Convex `subscribeNewsletter`) |
| ----------------------- | --------------------- | ------------ | ------------ | -------- | ---------------------------------------------------------------------------- |
| Email address           | `email`               | email        | email        | Yes      | `email` (max **255**)                                                         |
| Consent wording version | `consentTextVersion`  | hidden       | off          | Yes      | `consentTextVersion` (max **40**) — fixed version string agreed with Mikhail (e.g. `v1`) |
| Acquisition source hint | `source`              | hidden       | off          | No       | `source` (max **80**) — e.g. `newsletter-page` or `footer`                  |

---

## Volunteer — `POST /api/volunteer`

`interests` is submitted as a **comma-separated string** and parsed server-side into `string[]` (split, trim, drop empties).

| Visible label   | `name`         | Control type                         | autocomplete   | Required | API payload key (after `parseVolunteerForm`; Convex `submitVolunteer`) |
| --------------- | -------------- | ------------------------------------ | -------------- | -------- | ----------------------------------------------------------------------- |
| Full name       | `fullName`     | text                                 | name           | Yes      | `fullName` (max **160**)                                                 |
| Email           | `email`        | email                                | email          | Yes      | `email` (max **255**)                                                    |
| Phone           | `phone`        | tel                                  | tel            | Yes      | `phone` (max **60**)                                                     |
| Country         | `country`      | text                                 | country-name   | Yes      | `country` (max **100**)                                                  |
| City            | `city`         | text                                 | address-level2 | Yes      | `city` (max **100**)                                                     |
| Interests       | `interests`    | textarea (comma-separated tags) _or_ checkboxes flattened to comma list | off | Yes      | **Form field**: single string joined by commas (`interests`). **Payload**: `interests`: `string[]` (combined raw segment max **600** before split) |
| Availability    | `availability` | text                                 | off            | Yes      | `availability` (max **200**)                                            |
| Relevant experience | `experience` | textarea                             | off            | No       | `experience` (max **4000**, omitted if empty)                           |
| Why volunteer   | `motivation`   | textarea                             | off            | Yes      | `motivation` (max **4000**)                                             |
