# Sai Ruthwik Madarapu — Portfolio (React + Vite)

A React conversion of the original static HTML/CSS/JS portfolio site.
Same theme, same layout, same interactive features — just componentized.

## Features
- Typewriter effect in the hero tagline
- Navbar scroll shadow + active-section highlighting + mobile hamburger menu
- Scroll-reveal fade-in animations (IntersectionObserver)
- Scroll-to-top floating button
- Execution Guide modal per project, with a fake-progress ZIP download button
- Resume download button with the same fake-progress animation
- All original colors, fonts, spacing (style.css copied over unchanged)

## Tech stack
- React 19 + Vite
- lucide-react for icons (2 custom SVGs added for GitHub/LinkedIn since
  lucide-react no longer ships brand logos, plus HackerRank/WhatsApp)
- No extra state libraries — plain useState/useEffect/useRef, "basic" React

---

## How to run it

### 1. Install Node.js
You need Node.js 18+ installed. Check with:
```bash
node -v
```
If you don't have it, get it from https://nodejs.org

### 2. Install dependencies
Open a terminal in this folder and run:
```bash
npm install
```

### 3. Start the dev server
```bash
npm run dev
```
Then open the URL it prints (usually **http://localhost:5173**).

### 4. Build for production (optional)
```bash
npm run build
```
This outputs a static site into the `dist/` folder, which you can deploy
to Netlify, Vercel, GitHub Pages, etc. — same as the original static site.

You can preview the production build locally with:
```bash
npm run preview
```

---

## Editing content
Almost everything text-based (bio, education, skills, projects, certificates,
contact info, execution guide steps) lives in one file:

```
src/data/portfolioData.js
```

Edit that file to update your info — no need to touch any component.

## Folder structure
See the folder structure sent alongside this project in chat.
