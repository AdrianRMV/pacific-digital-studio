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
│   │   ├── Portfolio.tsx    # Featured work (accepts optional projects prop)
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
├── public/                 # Static assets (add logo, favicon, etc.)
├── tailwind.config.ts      # Theme (colors, fonts)
├── next.config.js          # Next config (e.g. images.remotePatterns)
└── package.json
```

## Replacing placeholder portfolio items

1. **Data**  
   Edit the `PLACEHOLDER_PROJECTS` array in **`app/components/Portfolio.tsx`**, or pass a `projects` prop from the page.

2. **Add real projects**  
   Each item follows the `PortfolioItem` type:

   ```ts
   {
     id: string;           // slug, e.g. "acme-roofing"
     title: string;        // e.g. "Acme Roofing"
     category: string;     // e.g. "Contractor"
     description: string;  // Short blurb
     imageUrl?: string;    // Optional; when set, card shows image
     imageAlt?: string;    // Optional alt text
   }
   ```

3. **Images**  
   Set `imageUrl` (and optionally `imageAlt`) on each project. External URLs are allowed via `next.config.js` `images.remotePatterns`. For local images, put files in `public/` and use paths like `/portfolio/acme.jpg`.

4. **Project pages**  
   Replace **`app/portfolio/[id]/page.tsx`** with real case-study content (copy, images, layout). Use `params.id` to load the right project (e.g. from a CMS or a local data file).

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
# pacific-digital-studio
# pacific-digital-studio2
