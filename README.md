# Mayur Patil – Portfolio

Personal portfolio built with React + TypeScript + Vite + Mantine UI.

## Stack
- React 19 + TypeScript
- Vite – dev server & bundler
- Mantine UI – dark/light mode, components
- Framer Motion – scroll animations
- DM Mono + Playfair Display fonts

## Features
- Dark / Light theme (system-aware, flash-free, persisted)
- Smooth scroll nav with active section highlighting
- AI Portfolio Summary (Claude API)
- Scroll-triggered animations
- Fully responsive

## Structure
```
src/
├── components/   # Each section + its CSS module
├── hooks/        # useColorScheme, useAISummary, useScrollSpy
├── data/         # portfolio.ts — edit this for your info
├── types/
├── theme.ts
└── App.tsx
```

## Run
```bash
npm install && npm run dev
```

## Update your info
Edit `src/data/portfolio.ts` to update all your details.

## Deploy to GitHub Pages
1. Add `base: '/your-repo-name/'` to vite.config.ts
2. `npm run build`
3. Deploy the `dist/` folder

## AI Summary note
The AI summary calls Anthropic's API. For standalone deployment, proxy the API call server-side — never expose your API key in client code.
