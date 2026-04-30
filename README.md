# Chamfrado.dev

Chamfrado.dev is a personal portfolio built as a neon city interface. Visitors move through districts for career, bio, projects, links, and contact, then open CRT-style panels for more detail.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## Project Structure

- `src/components/city`: city scene, buildings, controls, HUD, and CRT panel UI.
- `src/data/sections.ts`: portfolio district metadata.
- `public/assets`: runtime sprites, intro media, skyline, road, and building artwork.
- `vercel.json`: Vercel build settings and SPA fallback rewrites.

## Vercel Deployment

Recommended Vercel settings:

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

This repo includes `vercel.json`, so Vercel can read the Vite build command, `dist` output directory, and the single-page app fallback rewrite automatically.

## Featured Projects

- Chamfrado.dev: personal portfolio built with React, Tailwind CSS, and Vite.
- PlantaHUB: company website and platform foundation built with Java, React, PostgreSQL, Spring Boot, Tailwind CSS, and Vite.
- Shelfy: offline desktop app for book inventory and loan control built with Electron, HTML, and CSS.

## Contact

- Email: [prog.lohran@gmail.com](mailto:prog.lohran@gmail.com)
- WhatsApp: [+55 (35) 9 9202-5205](https://wa.me/5535992025205)
- GitHub: [Chamfrado](https://github.com/Chamfrado)
- LinkedIn: [Lohran Cintra](https://www.linkedin.com/in/lohrancintra)
- Website: [chamfrado.dev](https://chamfrado.dev)
