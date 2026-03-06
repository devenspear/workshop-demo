# Workshop Prompt Chain — March 6, 2026

## Pre-Workshop: Already Done
- Project scaffolded at ~/VibeCodingProjects/workshop-demo
- Next.js + Tailwind + shadcn/ui + Framer Motion + Lucide installed
- Git repo connected to GitHub (devenspear/workshop-demo)
- Deployed to Vercel (workshop-demo-deven-projects.vercel.app)
- CLAUDE.md protocol in the project root

## During the Workshop

**IMPORTANT:** Run all prompts from inside the project directory:
```bash
cd ~/VibeCodingProjects/workshop-demo
```

---

### Prompt 1: Generate the PRD (Act 2 — 5 min)

After your co-workers invent the fictitious client, type:

```
I'm starting a new web project. Here's the client brief:

- Client: [NAME]
- What they do: [1-2 SENTENCES]
- Audience: [WHO]
- Pages needed: [LIST THEM]
- Visual direction: [MOOD/COLORS/FEELING]

Generate a comprehensive PRD following the web-dev protocol in CLAUDE.md. Save it to docs/PRD.md.
```

---

### Prompt 2: Build the Global Layout (Act 3 — 10 min)

```
Using the PRD in docs/PRD.md, build the global layout: header with logo and navigation, footer with contact info and social links. Make it responsive with a mobile hamburger menu. Use framer-motion for the mobile menu animation. Follow the design direction from the PRD.
```

After it finishes:
```bash
git add . && git commit -m "feat: Global layout with header and footer" && git push
```

---

### Prompt 3: Build the Homepage (Act 3 — 10 min)

```
Build the homepage with all sections from the PRD. Include a hero section with a compelling headline, subheadline, and CTA buttons. Add service/feature cards, a stats/value proposition section, and a final CTA section. Use framer-motion for scroll-triggered animations. Make it visually stunning.
```

After it finishes:
```bash
git add . && git commit -m "feat: Homepage with hero, services, stats, CTA" && git push
```

---

### Prompt 4: Build an Interior Page (Act 3 — 10 min)

```
Build the [About/Services/whatever they chose] page based on the PRD specs. Maintain design consistency with the homepage. Include appropriate sections and animations.
```

After it finishes:
```bash
git add . && git commit -m "feat: [Page name] page" && git push
```

---

### Prompt 5: Activate Sanity CMS (Act 4 — THE MONEY SHOT — 15 min)

This is the single prompt that wires up the entire CMS. It replaces the hardcoded content with editable CMS content.

```
Activate Sanity CMS for this project. Follow the Phase 4 CMS Integration protocol in CLAUDE.md exactly:

1. Install sanity, next-sanity, @sanity/image-url, @sanity/visual-editing
2. Create a new Sanity project via CLI
3. Create the production dataset via API
4. Set up sanity.config.ts, sanity.cli.ts, and src/sanity/env.ts (HARDCODE the project ID, no env vars)
5. Create schemas matching the site content (hero, services/features, team if applicable, site settings)
6. Create the Sanity client (useCdn: false), GROQ queries, and image helper
7. Embed Studio at /studio route
8. Add CORS origins for ALL Vercel URL aliases AND localhost
9. Invite deven@spear.limited as project administrator
10. Wire the homepage to fetch from Sanity (server component with revalidate=0, pass data as props to client components, keep hardcoded fallbacks)
11. Seed the content lake with the current hardcoded content via the Mutations API
12. Build, commit, push, and verify the deploy succeeds

After everything is deployed, tell me to:
- Refresh the Studio at /studio
- Accept the Sanity email invitation
- Test editing a field and seeing it update on the live site
```

After it finishes:
```bash
git add . && git commit -m "feat: Sanity CMS integration with Studio" && git push
```

---

### Prompt 6: Quality Check (Act 3 — 5 min)

```
Run the Phase 5 QA checklist from the CLAUDE.md protocol. Check responsive design, accessibility, SEO meta tags, and performance. Fix any issues found.
```

---

## Demo Script: The CMS Moment (Act 4 — What to Say)

Once Studio is working, open it side-by-side with the live site:

1. "This is Sanity Studio. It's embedded right in the website at /studio."
2. Click on **Hero Section** → edit the headline
3. Click **Publish**
4. Switch to the live site tab → **Cmd+Shift+R** to hard refresh
5. "The headline just changed. No deploy. No developer needed."
6. "Go ahead — tell me what to change." (Let co-workers dictate edits)

---

## If Something Goes Wrong

| Problem | Quick Fix |
|---------|-----------|
| Studio shows "Not authorized" | Check email for Sanity invitation, accept it, then refresh in incognito |
| Studio shows "Session not found" | Clear browser localStorage/cookies, try incognito |
| Content edit doesn't appear on site | Hard refresh (Cmd+Shift+R). If still no change, check that useCdn is false |
| Vercel build fails | Run `vercel inspect [url] --logs` to see the error |
| "Module not found: sanity" | Run `pnpm add sanity` (core package, separate from next-sanity) |

---

## Post-Workshop Deliverables

After the session, your co-workers should have:

1. A live, deployed website at a Vercel URL
2. A working CMS at /studio where content can be edited
3. A GitHub repository with the full source code
4. A PRD documenting the project requirements
5. Proof that this workflow is real, repeatable, and production-grade
