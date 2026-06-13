# VIKRR product access meta-plan

## North Star
VIKRR public web is a brand and product presentation layer. Production applications are not entered directly from the public marketing site.

## Portfolio plan

| Plan | Serves | Owner | Cadence | Leading metric | Kill criteria |
|---|---|---|---|---|---|
| Public brand web | Market clarity | Owner | Monthly | Demo requests | Public pages expose production login |
| Product pages | Product understanding | Owner | Monthly | Qualified interest | Asset Shield and TAKT messaging mixes |
| Owner access | Internal administration | Superadmin | Per release | Secure owner login works | Static hidden URL used as security |
| Customer instances | Implementations for companies | Superadmin + customer lead | Per customer | Instance ready checklist | Shared data/app across companies |
| Demo environment | Sales and testing | Owner | Per demo | Demo usable without real data | Demo contains production data |

## Cut
- No direct production app links on `vikrr.com`.
- No client production credentials in static HTML.
- No "hidden" static owner page as a security mechanism.

## Operating rhythm
1. Public web shows product value and demo request.
2. Owner/admin access lives behind authenticated application login.
3. Each customer gets an isolated deployment or tenant with explicit configuration.
4. Demo data is separated from production data.

## Replanning triggers
- New customer implementation.
- Need for public demo.
- Need for separate product brand/subdomain.
- Change in auth or tenancy model.

## Subdomain direction
- `vikrr.com`: public brand.
- `asset-shield.vikrr.com` or `shield.vikrr.com`: Asset Shield product page or demo entry.
- `takt.vikrr.com`: TAKT product page or demo entry.
- Production customer apps should use customer-specific domains/subdomains, not the public marketing page.
