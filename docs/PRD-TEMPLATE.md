# PRD Template — Workshop Quick-Start

> Use this template to capture client requirements during the workshop.
> Feed this to Claude Code: `claude "Generate a full PRD from this brief. Use the web-dev protocol. Output to docs/PRD.md"`

---

## Client Brief

**Client Name:** [filled in during workshop]

**What do they do?**
[1-2 sentences — their business in plain language]

**Who is their audience?**
[Primary audience. Who visits this site and why?]

**What's the goal of the website?**
[What should a visitor DO after landing? Book a call? Buy something? Learn? Sign up?]

---

## Pages Needed

List each page and its purpose:

1. **Homepage** — [describe the impression it should make]
2. **[Page 2]** — [purpose]
3. **[Page 3]** — [purpose]
4. **[Page 4]** — [purpose]
5. **Contact** — [form? email? phone? map?]

---

## Visual Direction

**Mood / Feeling:** [e.g., "warm and approachable" or "bold and modern" or "luxurious and minimal"]

**Color Direction:** [any colors, or describe the vibe — "earth tones" / "high contrast black and white" / "vibrant and playful"]

**Reference Sites:** [any websites they admire — drop URLs]

**Existing Assets:**
- Logo: [yes/no — if yes, where?]
- Brand fonts: [if known]
- Photography: [stock? custom? AI-generated?]

---

## Features & Functionality

Check what's needed:

- [ ] Contact form
- [ ] Blog / News section
- [ ] Team / About profiles
- [ ] Testimonials
- [ ] Image gallery
- [ ] Video embed
- [ ] Newsletter signup
- [ ] Social media links
- [ ] Maps / Location
- [ ] E-commerce / booking
- [ ] CMS for content editing
- [ ] Multi-language
- [ ] Other: _______________

---

## Content Status

**Do we have real content?**
- [ ] Yes, all copy is ready
- [ ] Partial — we have some, need placeholder for the rest
- [ ] No — use realistic placeholder content (Claude will generate)

**Images:**
- [ ] We have brand photography
- [ ] Use high-quality stock/placeholder images
- [ ] AI-generate images to match the brand

---

## Technical Notes

**Domain:** [custom domain or Vercel default for now?]
**CMS Required:** [yes/no — if yes, what content needs to be editable?]
**Integrations:** [email service, analytics, CRM, etc.]
**Timeline:** [when does this need to be live?]

---

## Workshop Prompt Chain

Once the brief is filled in, run these Claude Code prompts in sequence:

```bash
# 1. Generate the full PRD
claude "Here's a client brief for a new website: [paste brief above]. Generate a comprehensive PRD following the web-dev protocol. Save to docs/PRD.md"

# 2. Set up the project scaffold
claude "Using the PRD in docs/PRD.md, scaffold the Next.js project with the correct fonts, colors, and component structure. Follow the Phase 2 scaffold protocol."

# 3. Build global layout
claude "Build the global layout (header, footer, navigation) based on the PRD. Responsive. Animated. Professional."

# 4. Build homepage
claude "Build the homepage with all sections from the PRD. Use framer-motion for scroll animations. Make it stunning."

# 5. Build interior pages (repeat for each)
claude "Build the [Page Name] page per the PRD. Maintain design consistency."

# 6. Integrate CMS
claude "Integrate Sanity CMS for all editable content. Create schemas, queries, and connect to components. Embed Studio at /studio."

# 7. Quality check
claude "Run the full Phase 5 QA checklist from the web-dev protocol. Fix everything found."

# 8. Deploy
claude "Prepare for production: optimize images, verify meta tags, run build, push to deploy."
```

---

## Post-Workshop Deliverables

After the session, the team should have:

1. ✅ A live, deployed website at a Vercel URL
2. ✅ A working CMS at /studio where content can be edited
3. ✅ A GitHub repository with the full source code
4. ✅ A PRD documenting the project requirements
5. ✅ Proof that this workflow is real, repeatable, and production-grade
