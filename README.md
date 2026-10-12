# Shubham Ukey: Portfolio

Personal portfolio for a Full Stack Java Developer. Built with React, Vite, Tailwind CSS and GSAP (ScrollTrigger + @gsap/react).

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # test the production build
```

Requires Node.js 18 or newer.

## Before you publish (checklist)

1. **Resume:** put your PDF at `public/resume.pdf`. The Download Resume button already points to it.
2. **Contact form:** create a form at [Formspree](https://formspree.io), copy `.env.example` to `.env`, and set `VITE_FORM_ENDPOINT`. On Vercel, add the same variable under Project Settings > Environment Variables.
3. **Email link (optional):** set `links.email` in `src/data/profile.js`.
4. **Project links:** replace the `github` value of each project in `src/data/projects.js` with the direct repository URL. Add a `demo` URL where one exists.
5. **Verify facts:** confirm internship dates in `src/data/experience.js` and add education dates in `src/data/education.js`. Remove anything you can't back up.
6. **Project 4:** change `status: 'In Progress'` to `null` only once it is finished and tested.
7. **SEO:** replace `your-domain.com` in `public/sitemap.xml` and `public/robots.txt`. Add a social preview image (for example `public/og-image.png`) and an `og:image` tag in `index.html`. Verify the site in Google Search Console and submit the sitemap.

## Editing content

All content lives in `src/data/`: `profile.js`, `skills.js`, `projects.js`, `experience.js`, `education.js`. Components never need to change to add a project or skill.

## Structure

```
src/
  components/   Navbar, Button, SectionHeading, ProjectCard, SkillGroup, ExperienceItem, Footer
  sections/     Hero, About, Skills, Projects, Experience, Education, Contact
  data/         profile, skills, projects, experience, education
  hooks/        useReducedMotion, useReveal (GSAP ScrollTrigger reveals)
public/         favicon.svg, robots.txt, sitemap.xml (+ resume.pdf)
```

## Animation notes

- GSAP hero timeline on load, ScrollTrigger batch reveals on scroll.
- Transform and opacity only, no pinning or scroll hijacking.
- Skipped entirely when the visitor prefers reduced motion; content stays visible.
- GSAP contexts and ScrollTriggers are cleaned up by `useGSAP` on unmount.

## Deploy to Vercel

Push to GitHub, import the repo in Vercel (framework preset: Vite), add `VITE_FORM_ENDPOINT`, deploy.
