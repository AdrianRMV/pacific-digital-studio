# Pacific Digital Studio — Landing Page

A modern, minimal landing page for Pacific Digital Studio (Vancouver, BC). Built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Folder structure

```
Pacific-Digital/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Container.tsx    # Max-width + horizontal padding wrapper
│   │   ├── Header.tsx      # Navbar + mobile menu
│   │   ├── Hero.tsx        # Hero section
│   │   ├── TrustStrip.tsx  # Trust indicators bar
│   │   ├── Services.tsx    # Service cards
│   │   ├── WhyChooseUs.tsx # Benefits list
│   │   ├── Process.tsx     # 4-step process
│   │   ├── Portfolio.tsx    # Selected work (cards with preview, tech, links)
│   ├── data/
│   │   └── projects.ts     # Portfolio project entries (preview, liveUrl, tech)
│   │   ├── About.tsx       # About section
│   │   ├── CTA.tsx         # “Let’s build…” call to action
│   │   ├── Contact.tsx     # Lead capture form
│   │   └── Footer.tsx      # Footer + nav + email
│   ├── portfolio/
│   │   └── [id]/
│   │       └── page.tsx    # Placeholder project page (replace with case studies)
│   ├── globals.css         # Tailwind + base styles
│   ├── layout.tsx          # Root layout, fonts, metadata
│   └── page.tsx            # Home page (assembles all sections)
├── public/                 # Static assets
│   └── projects/           # Project preview images/GIFs for portfolio
├── tailwind.config.ts      # Theme (colors, fonts)
├── next.config.js          # Next config (e.g. images.remotePatterns)
└── package.json
```

## Portfolio (Selected Work)

1. **Project data**  
   Edit **`app/data/projects.ts`**. Each project has: `id`, `title`, `description`, `tech[]`, `preview` (path to image/GIF), `liveUrl`, and optional `githubUrl`.

2. **Preview assets**  
   Put screenshots or GIFs in **`public/projects/`** and reference them as `/projects/filename.jpg` or `/projects/filename.gif` in `projects.ts`. Use **16:9** aspect ratio; **1200px wide or more** recommended for sharp display.

3. **Adding more projects**  
   Append a new object to the `projects` array in `app/data/projects.ts` with the same shape. The grid is responsive (3 → 2 → 1 columns).

## Copy to customize first

- **Hero** — Headline and subheadline in `app/components/Hero.tsx`.
- **Trust strip** — Labels and short descriptions in `app/components/TrustStrip.tsx` (`ITEMS`).
- **Services** — Titles and descriptions in `app/components/Services.tsx` (`SERVICES`).
- **About** — Body paragraphs in `app/components/About.tsx`.
- **CTA** — Headline and supporting line in `app/components/CTA.tsx`.
- **Contact** — Form labels and any helper text in `app/components/Contact.tsx`.
- **Footer** — Tagline and email in `app/components/Footer.tsx`.
- **Site metadata** — `title` and `description` in `app/layout.tsx`.

## Fonts

- **Display (headings):** Instrument Serif  
- **Body:** DM Sans  

Both are loaded via `next/font/google` in `app/layout.tsx`. To change them, swap the imports and CSS variables in `layout.tsx` and `tailwind.config.ts` (`font-display`, `font-sans`).

## Build & deploy

```bash
npm run build
npm start
```

Deploy to Vercel, Netlify, or any Node host that supports Next.js.
