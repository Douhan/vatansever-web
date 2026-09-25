# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Prospective clients evaluating whether to hire the agency for a mobile app or web project — small/medium business owners and founders in Turkey, browsing in Turkish, deciding whether this studio can be trusted with a real product build. They are comparing this site against other freelancers/agencies and looking for proof of real, shipped work, not just promises.

## Product Purpose

Vatansever's own promotional/portfolio site: a demo showcase built by its solo founder (Doğuhan) to demonstrate, to his own prospective clients, what he can build for them. The site itself is a working sample of his output quality.

## Positioning

A one-person design-and-development studio that ships both the interface and the working software behind it — not a designer who hands off to someone else's dev team, and not a dev shop bolting on a template UI. Proof is real shipped products (see Evidence on Hand), not stock-template case studies.

## Operating Context

- Turkish-language throughout; technical terms may stay in English per the founder's own convention, but all UI copy and prose is Turkish.
- No backend: the contact form is frontend-only (validation + simulated submit), since this is a demo/marketing site, not a production SaaS.
- The repo hosts four parallel, hand-built visual concepts of the same content, reachable at different routes (`/`, `/deneme-1`, `/deneme-2`, `/deneme3`), plus a header "design switcher" that swaps the active concept in place without a route change. This redesign replaces the concept at `/` (the primary/default one) only, unless stated otherwise.
- Deployed on Vercel; repo at `github.com/Douhan/vatansever-web`.

## Capabilities and Constraints

- Stack: Vite + React 19 + TypeScript, react-router-dom v7, hand-written CSS with design-token custom properties (no Tailwind/CSS-in-JS), raw three.js for the current hero scene, oxlint for linting.
- Must keep working without a backend — any "live" data (stats, form submission) is either real static content or an honest simulated interaction, never a fabricated live claim.
- No image-generation tool is available in this environment; imagery is sourced as licensed stock photography (Unsplash License, free commercial use, no attribution required) or produced as original code (CSS/SVG/three.js), never invented as if it were the founder's own photography.
- Must never use real production data, real client credentials, or unauthorized screenshots of third-party systems. Case-study screenshots come only from products the founder has explicit rights to show, captured via a demo/non-production account.

## Brand Commitments

- Name: **Vatansever** (founder's surname; a full rebrand was discussed but no replacement name has been chosen — keep "Vatansever" for this redesign).
- Existing wordmark treatment: styled like a JSX tag, `<Vatansever />`, with theme-colored monospace brackets around the brand-font name. This is used in the header/footer of all four design concepts and should carry over into the redesign unless explicitly revisited.
- Current default-concept (`/`) visual identity is a dark, orange/ember "3D interactive tech" palette (`--color-orange` #ff6a1a family) — this redesign explicitly replaces that identity with an Apple.com-inspired visual language; treat the old palette as evidence/anti-reference, not a constraint to preserve.

## Evidence on Hand

Two real, shipped case studies with genuine product screenshots (already imported at `src/assets/case-studies/`):
- **SentinelOps** — a web admin panel for security-guard companies (personnel, checkpoints, patrols, live tracking, reports). Screenshots: `sentinelops/dashboard.png`, `personnel.png`, `checkpoints.png`, `patrols.png`, `live-tracking.png`, `reports.png`.
- **SentinelOpsGuard** — the companion React Native field app for guards (QR/location-verified patrols, shift schedule, notifications). Screenshots: `sentinelopsguard/splash.png`, `home.png`, `notification.png`, `checklist.png`, `qr-scan.png`, `schedule.png`, `history.png`, `profile.png`.

Four additional portfolio entries (Finca, Rotaly, Marketo, Studio Blanc) are explicitly fictional/demo placeholders with no real screenshots — they use an abstract CSS mockup and must not be presented as real client work.

Two other real founder-built products exist in sibling repos on this machine (`okul-takip`, a school pickup/tracking Expo app; `JenishDesign`, a Next.js agency site) but are **not yet available** for this site: `okul-takip` has no self-serve demo account, and `JenishDesign`'s dev server is blocked by this session's auto-mode classifier as a production-data risk. Do not fabricate screenshots for either; only add them once real, safely-sourced screenshots exist.

Licensed stock photography sourced this session (Unsplash License) for realistic device mockups and lifestyle imagery — see the design brief for exact assets and photographer credit is not required but the license terms must be respected (no implication of Apple/photographer endorsement of Vatansever).

## Product Principles

1. **Real over fabricated.** Every claim, screenshot, and stat is either genuinely true or clearly a labeled demo/placeholder — never a fake testimonial, fake client logo, or invented metric presented as real.
2. **One founder, full stack.** The positioning is "I build the whole thing," so proof should show both interface polish and working software, not just static mockups.
3. **Turkish-first craft.** Every surface is written and designed for a Turkish small-business audience; do not default to generic English SaaS marketing tropes.
4. **Four concepts stay independent.** Changes to the default (`/`) concept's visual language must not leak into `/deneme-1`, `/deneme-2`, or `/deneme3`'s own hand-built styles unless the user explicitly asks for it there too.
5. **No backend, no illusions.** Interactive elements (forms, "live" indicators) must behave honestly given the site has no real backend.

## Accessibility & Inclusion

Global instruction (from the user's own tooling config) requires Apple Human Interface Guidelines-adapted practice on every surface: WCAG AA contrast (4.5:1 normal text, 3:1 large/bold), never color-only status signaling, limited font families with no thin/ultralight weights at small sizes, responsive type units, visible feedback for every action, adequate touch targets, meaningful `aria-label`s, and respect for `prefers-reduced-motion`.
