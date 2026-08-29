# Youssef Sherif — Portfolio

Personal portfolio for **Youssef Sherif**, Applied AI & Data Analytics.

A dark, motion-led single page built with Next.js App Router, GSAP scroll
animation, and Lenis smooth scroll. All content lives in one file —
[`lib/data.ts`](lib/data.ts) — so copy, projects, and figures can be edited
without touching a component.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | GSAP + ScrollTrigger, Framer Motion |
| Smooth scroll | Lenis |
| Fonts | Anton + Inter (`next/font`) |

## Running locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

```
app/                    Layout, page composition, global styles
components/sections/    One file per page section
components/ui/          Reusable primitives (Odometer, SplitText, Reveal, …)
hooks/                  useReducedMotion
lib/data.ts             Single source of truth for all site content
public/images/          Project and section imagery
```

## Editing content

Every section reads from `lib/data.ts`:

- `BRAND` — name, role, contact, availability
- `PROJECTS` — the work section, including per-project `role` for team projects
- `STATS` — the animated figures
- `EXPERIENCE_ROLES` — the career timeline
- `SKILL_GROUPS` / `TOOLS` — the toolkit
- `EDUCATION`, `FAQ`, `CTA`

Accessibility: all motion is gated behind `prefers-reduced-motion`.

## Notes

See [`OBSERVATIONS.md`](OBSERVATIONS.md) for open content items and the
reasoning behind what is and isn't featured.
