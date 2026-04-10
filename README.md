# 🎵 Necker Vibes

**The official landing page for Necker Vibes** – where songs are born and stars are made.

🌐 **Live site:** [neckervibes.fm](https://neckervibes.fm)

---

## What Is This?

This is the source code for the Necker Vibes landing page – a Next.js website that showcases the Necker Vibes music initiative, introduces the world-class mentor lineup, and collects artist applications via a simple form.

The site is designed to be clean, fast, and easy to modify – whether you're a developer, a designer working with a developer, or someone experimenting with AI coding tools.

---

## 🏗 Tech Stack

| Layer | Tool |
|-------|------|
| Framework | [Next.js 14](https://nextjs.org/) (React) |
| Language | TypeScript |
| Styling | Plain CSS (no Tailwind, no CSS-in-JS – easy to read and edit) |
| Hosting | [Vercel](https://vercel.com/) (auto-deploys on every push to `main`) |
| Form Backend | Google Sheets via Apps Script webhook |

**Why this stack?** It's the simplest production-grade setup possible. One framework, one CSS file, zero build complexity. Anyone can read the code and understand what's happening.

---

## 📁 Project Structure

```
necker-vibes/
├── public/                    # Static assets (images, videos, logos)
│   ├── mentors/               # Mentor headshots
│   ├── necker-vibes-logo.png  # Site logo
│   └── richard-branson.mp4    # Hero section video
├── src/
│   ├── app/
│   │   ├── page.tsx           # ← Main page (all content lives here)
│   │   ├── layout.tsx         # HTML wrapper + metadata
│   │   ├── globals.css        # ← All styles (single file)
│   │   └── api/apply/route.ts # Form submission handler
│   └── components/
│       ├── ApplicationForm.tsx # The artist application form
│       ├── HeroAboutTransition.tsx # Scroll-linked hero animation
│       ├── ScrollIndicator.tsx # "Scroll down" arrow
│       ├── BransonVideo.tsx    # Richard Branson video player
│       └── FadeInSection.tsx   # Scroll-triggered fade-in wrapper
├── google-apps-script.js      # Google Sheets webhook (paste into your sheet)
├── package.json
└── README.md                  # You are here
```

**The two files you'll edit most:**
- **`src/app/page.tsx`** – All the page content: hero text, mentor cards, descriptions, CTAs
- **`src/app/globals.css`** – All the visual styling: colors, spacing, fonts, animations

---

## 🚀 Quick Start (Run It Locally)

### Prerequisites
- [Node.js](https://nodejs.org/) 18+ installed
- [Bun](https://bun.sh/) (recommended) or npm

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/modern-musician/necker-vibes.git
cd necker-vibes

# 2. Install dependencies
bun install
# or: npm install

# 3. Start the dev server
bun dev
# or: npm run dev

# 4. Open in your browser
open http://localhost:3000
```

That's it. Changes you make to files will instantly appear in the browser (hot reload).

---

## ✏️ How to Make Changes

### Change text or content
Open `src/app/page.tsx`. Everything you see on the page is right there – headings, descriptions, mentor names and stats, button text. Edit the strings and save.

### Change colors, fonts, or spacing
Open `src/app/globals.css`. The design tokens are at the top:

```css
:root {
  --black:       #080808;
  --white:       #f8f6f1;
  --gold:        #c9a84c;
  --gold-light:  #e2c97e;
  /* ... */
}
```

Change these values and the entire site updates.

### Add or update a mentor
In `src/app/page.tsx`, find the `mentors` array near the top:

```tsx
const mentors = [
  {
    name: 'Timbaland',
    title: 'Anchor Mentor',
    stats: ['35B+ streams worldwide', '250M+ records sold', 'Multi-Grammy producer'],
    featured: true,
    imageUrl: '/mentors/timbaland.jpg',
  },
  // ... add more here
]
```

Drop the headshot image into `public/mentors/` and add a new entry to the array.

### Update the form fields
Edit `src/components/ApplicationForm.tsx`. The form fields and their labels are standard HTML inputs – add, remove, or rename as needed.

### Change where form submissions go
The form posts to `/api/apply` which forwards data to a Google Sheet. To connect your own sheet:
1. Open your Google Sheet → Extensions → Apps Script
2. Paste the code from `google-apps-script.js`
3. Deploy as a Web App (Execute as: Me, Access: Anyone)
4. Set the `GOOGLE_SHEETS_WEBHOOK_URL` environment variable in Vercel

---

## 🤖 Vibe Code It (Use AI to Make Changes)

This project is intentionally simple so that AI coding tools can work with it effectively. Here are some approaches:

### Option 1: ChatGPT / Claude (copy-paste)
1. Copy the contents of `src/app/page.tsx` or `globals.css`
2. Paste into ChatGPT or Claude with your request: *"Change the hero tagline to '...' and make the gold accent color more warm"*
3. Copy the updated code back into the file
4. Push to GitHub → auto-deploys

### Option 2: Cursor / Windsurf / VS Code + AI
1. Open the project in [Cursor](https://cursor.sh/) or your IDE
2. Use the AI chat to describe what you want changed
3. The AI can directly edit files in-place
4. Push to GitHub → auto-deploys

### Option 3: Claude Code / Codex CLI (terminal)
```bash
# Claude Code
cd necker-vibes
claude "Add a new section about the docuseries between the mentors and the CTA"

# OpenAI Codex
codex "Make the mentor cards bigger and add a hover zoom effect"
```

### Option 4: GitHub Codespaces (browser-based)
1. Go to the [repo on GitHub](https://github.com/modern-musician/necker-vibes)
2. Click the green **Code** button → **Codespaces** → **Create codespace**
3. Edit files directly in the browser IDE
4. Commit and push → auto-deploys

### Tips for AI coding
- **Be specific:** *"Change the hero subtitle to 'October 8-16, 2026 • Necker Island'"* works better than *"update the date"*
- **Reference file names:** *"In globals.css, make the mentor cards have rounded corners"*
- **One change at a time** for best results
- **The whole site is ~500 lines of code** across two main files, so AI tools can easily hold the full context

---

## 🌐 Deployment

The site auto-deploys via Vercel whenever you push to `main`. No manual steps needed.

### First-time Vercel setup (if forking)
1. Fork this repo
2. Go to [vercel.com](https://vercel.com/) → New Project → Import your fork
3. Framework: Next.js (auto-detected)
4. Click Deploy

### Custom domain
In Vercel → Settings → Domains → add your domain and update DNS.

### Environment variables (optional)
| Variable | Purpose |
|----------|---------|
| `GOOGLE_SHEETS_WEBHOOK_URL` | Google Apps Script URL for form submissions |

---

## 🤝 Want Help?

- **Quick changes:** Any developer (or AI tool) can handle text, image, and style updates in minutes
- **New features:** A React/Next.js developer can add sections, pages, or integrations
- **Design overhaul:** A designer + developer team can reshape the visual identity while keeping the same simple architecture

The codebase is intentionally minimal so it's approachable for anyone – from first-time contributors to seasoned developers to AI assistants.

---

## 📄 License

© 2026 Necker Vibes. All Rights Reserved.
