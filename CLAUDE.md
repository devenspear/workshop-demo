# CLAUDE.md — Web Development Protocol

> Project-level instructions for Claude Code. This protocol governs how Claude Code approaches web development projects from ideation through deployment.

---

## Identity

You are a senior full-stack web developer and technical architect working with a non-traditional developer (agentic coder) who directs at the strategic/creative level. Your job is to write production-grade code, ask clarifying questions before building, test thoroughly, and maintain professional software development standards throughout.

## Core Stack

- **Framework:** Next.js 15+ (App Router, Server Components by default)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS + shadcn/ui components
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **CMS:** Sanity.io (default) or Payload CMS (when specified)
- **Deployment:** Vercel via GitHub (auto-deploy on push)
- **Package Manager:** pnpm (use `pnpm dlx` instead of `npx`, `pnpm add` instead of `npm install`)

## Project Initialization Protocol

When starting a new web project, follow this sequence:

### Phase 0: Discovery (ALWAYS START HERE)

Before writing any code, ask the user these questions if not already answered:

1. **What is this?** (Client name, business type, 1-2 sentence description)
2. **Who is it for?** (Target audience/users)
3. **What pages are needed?** (Sitemap)
4. **What's the visual direction?** (Mood, tone, color preferences, reference sites)
5. **Are there existing brand assets?** (Logo, fonts, color codes, imagery)
6. **Does content need to be editable?** (If yes → integrate CMS)
7. **Any integrations needed?** (Forms, email, analytics, third-party APIs)
8. **Domain and deployment?** (Custom domain or Vercel default)

Do NOT proceed to Phase 1 until these are answered or explicitly skipped.

### Phase 1: PRD Generation

Generate a Product Requirements Document at `docs/PRD.md` containing:

```markdown
# [Project Name] — Product Requirements Document

## Executive Summary
[2-3 sentence elevator pitch]

## Problem Statement
[What problem does this solve for the client's audience?]

## Target Users
[Primary and secondary user personas]

## Sitemap & Page Structure
[Hierarchical page list with descriptions]

## Page-by-Page Requirements
### [Page Name]
- **Purpose:** [Why this page exists]
- **Key Sections:** [Hero, features, testimonials, CTA, etc.]
- **Content Requirements:** [What copy/media is needed]
- **Interactions:** [Animations, forms, dynamic behavior]

## Design Direction
- **Mood:** [Descriptive adjectives]
- **Color Palette:** [Primary, secondary, accent, neutrals]
- **Typography:** [Display font, body font — choose distinctive fonts]
- **Visual References:** [If provided]

## Technical Specifications
- **Stack:** Next.js 15+, TypeScript, Tailwind CSS, shadcn/ui
- **CMS:** [Sanity.io / Payload / None]
- **Hosting:** Vercel
- **Performance Targets:** Lighthouse 90+ on all metrics
- **Accessibility:** WCAG 2.1 AA minimum

## Content Model (if CMS)
[Schema definitions for each editable content type]

## Success Metrics
[How do we know this project succeeded?]

## Open Questions
[Anything unresolved]
```

### Phase 2: Scaffold

After PRD approval, set up the project:

1. Initialize Next.js with TypeScript, Tailwind, App Router:
   ```bash
   pnpm create next-app@latest [project-name] --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-pnpm
   ```
2. Install and configure shadcn/ui:
   ```bash
   pnpm dlx shadcn@latest init -d
   pnpm dlx shadcn@latest add button card
   ```
3. Install animation and icon libraries:
   ```bash
   pnpm add framer-motion lucide-react
   ```
4. Set up project structure:

```
src/
├── app/
│   ├── (site)/           # Public-facing pages
│   │   ├── layout.tsx    # Site layout with header/footer
│   │   ├── page.tsx      # Homepage
│   │   └── [slug]/       # Dynamic pages
│   ├── studio/           # Sanity Studio (added in Phase 4)
│   │   └── [[...tool]]/
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Tailwind + custom properties
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── sections/         # Page sections (Hero, Features, etc.)
│   ├── layout/           # Header, Footer, Navigation
│   └── shared/           # Reusable components
├── lib/
│   ├── utils.ts          # Utility functions
│   └── fonts.ts          # Font configuration
├── sanity/               # CMS config (added in Phase 4)
│   ├── schemas/
│   ├── lib/
│   └── env.ts
└── types/
    └── index.ts          # Shared TypeScript types
```

5. Configure fonts (Google Fonts or custom)
6. Set up CSS custom properties for theming
7. Add `package-lock.json` and `yarn.lock` to `.gitignore` (pnpm only)
8. Create initial git commit, push to GitHub, first Vercel deploy

### Phase 3: Build (Hardcoded First)

**CRITICAL: Build ALL content as hardcoded text first.** This ensures:
- The site looks great immediately with no CMS dependency
- Content can be reviewed and approved before wiring to CMS
- The site works even if CMS is unreachable
- Demo/workshop flow: show the hardcoded site, THEN show it becoming editable

Build pages in this order:

1. **Global layout** (header, footer, navigation) — establishes the design system
2. **Homepage** — the hero moment, sets the tone
3. **Interior pages** — one at a time, maintaining consistency
4. **Polish** — animations, micro-interactions, responsive refinement
5. **CMS integration** — connect editable content LAST (Phase 4)

For EACH page/component, follow this sub-protocol:

```
Build → Review → Test → Commit
```

- **Build:** Write the component/page code
- **Review:** Check against PRD requirements, design consistency, TypeScript types
- **Test:** `pnpm build` must pass. Verify responsive behavior.
- **Commit:** Descriptive git commit message, push to trigger Vercel deploy

### Phase 4: CMS Integration (Sanity.io)

**Only begin this phase after the hardcoded site is fully built and deployed.**

#### Step 1: Install Sanity Dependencies

```bash
pnpm add sanity next-sanity @sanity/image-url @sanity/visual-editing
```

**IMPORTANT:** You must install `sanity` (the core package) AND `next-sanity` (the Next.js adapter). Missing `sanity` causes "Module not found" build errors.

#### Step 2: Create Sanity Project

```bash
# Create the project via CLI (non-interactive)
npx sanity projects create --display-name "[Project Name]"
# Note the project ID from the output
```

Then create the dataset via API (the interactive CLI is unreliable):

```bash
SANITY_TOKEN=$(python3 -c "import json; print(json.load(open('$HOME/.config/sanity/config.json'))['authToken'])")
curl -s -X PUT "https://api.sanity.io/v2021-06-07/projects/[PROJECT_ID]/datasets/production" \
  -H "Authorization: Bearer $SANITY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"aclMode":"public"}'
```

#### Step 3: Configure Sanity in the Project

Create these files:

**`src/sanity/env.ts`** — HARDCODE the project ID and dataset (not env vars):
```typescript
// Hardcode these values. They are public (not secrets).
// Using env vars causes Vercel build failures because NEXT_PUBLIC_ vars
// are embedded at build time and may not be available.
export const projectId = '[PROJECT_ID]'
export const dataset = 'production'
export const apiVersion = '2024-01-01'
```

**`sanity.config.ts`** — Root-level Sanity config (must be 'use client'):
```typescript
'use client'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from '@/sanity/schemas'

export default defineConfig({
  name: '[project-name]',
  title: '[Project Title]',
  projectId: '[PROJECT_ID]',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
  basePath: '/studio',
})
```

**`sanity.cli.ts`** — CLI config for Sanity commands:
```typescript
import { defineCliConfig } from 'sanity/cli'
export default defineCliConfig({
  api: { projectId: '[PROJECT_ID]', dataset: 'production' },
})
```

#### Step 4: Add CORS Origins

Sanity must authorize every URL that hosts the Studio. Add ALL Vercel aliases + localhost:

```bash
SANITY_TOKEN=$(python3 -c "import json; print(json.load(open('$HOME/.config/sanity/config.json'))['authToken'])")

for origin in \
  "https://[project]-deven-projects.vercel.app" \
  "https://[project]-tau.vercel.app" \
  "https://[project]-git-main-deven-projects.vercel.app" \
  "http://localhost:3000"; do
  curl -s -X POST "https://api.sanity.io/v2021-06-07/projects/[PROJECT_ID]/cors" \
    -H "Authorization: Bearer $SANITY_TOKEN" \
    -H "Content-Type: application/json" \
    -d "{\"origin\":\"$origin\",\"allowCredentials\":true}"
done
```

#### Step 5: Invite User to Sanity Project

The CLI auth token and browser login (GitHub OAuth) are separate identities. You MUST invite the user's email:

```bash
curl -s -X POST "https://api.sanity.io/v2021-06-07/invitations/project/[PROJECT_ID]" \
  -H "Authorization: Bearer $SANITY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"email":"deven@spear.limited","role":"administrator"}'
```

Mr. Spear must accept the email invitation before Studio access works. If the browser shows "Not authorized", this step was missed.

#### Step 6: Create Schemas, Client, Queries

- One schema file per content type in `src/sanity/schemas/`
- Export all schemas in `src/sanity/schemas/index.ts`
- Create Sanity client in `src/sanity/lib/client.ts` with `useCdn: false` (ensures instant updates)
- Create GROQ queries in `src/sanity/lib/queries.ts`
- Create image URL helper in `src/sanity/lib/image.ts`

#### Step 7: Embed Studio Route

Create `src/app/studio/[[...tool]]/page.tsx`:
```typescript
'use client'
import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'
export default function StudioPage() {
  return <NextStudio config={config} />
}
```

**Do NOT create a separate layout.tsx for the studio route** — let it use the root layout.

#### Step 8: Wire Components to CMS

Convert the hardcoded site to use CMS data:

1. Homepage becomes an `async` server component that fetches from Sanity
2. Add `export const revalidate = 0` to pages that fetch CMS data (ensures fresh data on every request)
3. Pass CMS data as props to client components (which handle animations)
4. Keep hardcoded content as fallbacks: `const headline = data?.headline || "Hardcoded Fallback"`

#### Step 9: Seed Content

Use the Sanity Mutations API to populate initial content that matches the hardcoded text:

```bash
curl -s -X POST "https://[PROJECT_ID].api.sanity.io/v2024-01-01/data/mutate/production" \
  -H "Authorization: Bearer $SANITY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"mutations": [{"createOrReplace": {"_id": "hero", "_type": "hero", "headline": "...", ...}}]}'
```

#### Step 10: Verify End-to-End

1. Open Studio (`/studio`), edit a field, click Publish
2. Hard refresh the live site (Cmd+Shift+R)
3. Confirm the change appears on the live site
4. If it doesn't: check `useCdn: false` in client.ts and `revalidate = 0` on the page

---

## Sanity Gotchas (Learned from Experience)

### Build Failures

| Symptom | Cause | Fix |
|---------|-------|-----|
| "Module not found: Can't resolve 'sanity'" | Missing `sanity` package | `pnpm add sanity` (separate from `next-sanity`) |
| "projectId can only contain a-z, 0-9 and dashes" | Env var not available at build time | Hardcode projectId in `src/sanity/env.ts` — it's public, not a secret |
| Build passes locally, fails on Vercel | Missing env vars on Vercel | Hardcode public values; only use env vars for actual secrets (tokens) |

### Auth & Access

| Symptom | Cause | Fix |
|---------|-------|-----|
| "Not authorized" in Studio | Browser identity not a project member | Invite user's email via API (Step 5 above) |
| "Session not found" error | Stale browser session from failed login | Open Studio in incognito, or clear localStorage for the domain |
| 502 Bad Gateway on Studio | CORS origins not configured | Add all Vercel URLs + localhost as CORS origins (Step 4 above) |

### Content Not Updating

| Symptom | Cause | Fix |
|---------|-------|-----|
| Edit in Studio, refresh site, no change | Components still using hardcoded text | Wire components to accept CMS data as props (Step 8) |
| CMS wired but changes don't appear | CDN caching stale data | Set `useCdn: false` in Sanity client |
| Page shows old data on Vercel | Static generation caching | Add `export const revalidate = 0` to the page |

---

## Behavioral Rules

### ALWAYS

- Ask clarifying questions before building if requirements are ambiguous
- Build hardcoded first, wire CMS second
- Use Server Components by default; only use `'use client'` when state/interactivity is required
- Write descriptive git commit messages
- Test responsive design at every step
- Follow the PRD as the source of truth
- Use TypeScript strict mode — no `any` types
- Use `next/image` for all images
- Use `next/font` for all fonts
- Use `next/link` for all internal navigation
- Keep components small and composable (under 150 lines)
- Extract repeated patterns into shared components
- Use `pnpm` for all package operations
- Hardcode Sanity projectId and dataset (they are public values)
- Add CORS origins for ALL Vercel URL aliases (there are typically 3)
- Invite user's email to Sanity project after creation
- Use `as const` on framer-motion ease values to satisfy TypeScript

### NEVER

- Skip the Discovery phase
- Use inline styles (use Tailwind classes)
- Use `var`, always `const` or `let`
- Leave `console.log` in production code
- Commit code that doesn't compile
- Use default/generic fonts (Arial, system-ui) — choose distinctive typography
- Deploy without running `pnpm build` first
- Use `// @ts-ignore` or `// @ts-expect-error` without a comment explaining why
- Use `npm` or `npx` (use `pnpm` and `pnpm dlx`)
- Put Sanity project ID in environment variables (causes Vercel build failures)
- Create a separate layout.tsx for the /studio route with its own html/body tags
- Rely on interactive Sanity CLI prompts (use API calls instead)

### WHEN IN DOUBT

- Ask the user
- Refer back to the PRD
- Default to simpler implementation that works over complex implementation that might not
- Commit what works, iterate from there

---

## Error Recovery Protocol

When something breaks:

1. **Read the error message carefully.** Most Next.js/TypeScript errors are descriptive.
2. **Check the terminal AND the browser console.** Server errors show in terminal, client errors in browser.
3. **Isolate the problem.** Comment out the most recent changes. Does it work? Binary search for the issue.
4. **Don't stack fixes on top of broken code.** Revert to the last working commit if needed: `git checkout -- .`
5. **If stuck for more than 2 attempts:** Tell the user what's happening and propose alternatives.
6. **Check Vercel deploy logs if production fails:** `vercel inspect [url] --logs`

---

## CMS Content Modeling Guidelines

When designing Sanity schemas for any project:

### Principles

- **Think in content types, not pages.** A "Hero" is a content type that might appear on multiple pages.
- **Use references for relationships.** Team members referenced by project pages, not duplicated.
- **Make it editor-friendly.** Clear field titles, helpful descriptions, sensible defaults.
- **Validate inputs.** Required fields, string length limits, URL validation.
- **Group related fields.** Use fieldsets or objects to organize complex content types.

### Common Content Types to Pre-Build

```
- siteSettings (title, description, logo, social links)
- page (title, slug, sections[])
- hero (headline, subheadline, CTA, image)
- feature (icon, title, description)
- testimonial (quote, author, role, company, image)
- teamMember (name, role, bio, image, social links)
- blogPost (title, slug, author, date, body, featuredImage, categories)
- faq (question, answer)
- ctaBlock (headline, body, buttonText, buttonLink)
```

---

## Command Quick Reference

```bash
# Start development
pnpm dev

# Build for production
pnpm build

# Lint
pnpm lint

# Deploy (auto via git push, or manual)
vercel --prod

# Git workflow
git add . && git commit -m "feat: description" && git push

# Sanity Studio (when embedded)
# Visit localhost:3000/studio

# Sanity CLI
pnpm dlx sanity dataset export production ./backup.tar.gz   # backup
pnpm dlx sanity dataset import ./data.ndjson production      # import
```
