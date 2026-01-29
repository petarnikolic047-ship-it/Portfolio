# Portfolio

Lean, data-driven portfolio built with React, TypeScript, Tailwind, and Vite.

## Requirements
- Node.js 20+
- npm

## Install

```
npm ci
```

## Develop

```
npm run dev
```

## Lint

```
npm run lint
```

## Test

```
npm run test
```

## Preview

```
npm run preview
```

## Build

```
npm run build
```

## Architecture

### Render Flow

```text
index.html (#root)
  -> main.tsx (createRoot)
    -> App.tsx
      -> Home.tsx
        -> Navbar
        -> Hero
        -> WorkEducationEnhanced
        -> Skills
        -> Footer
```

### Module Map

```text
src/
  data/           # content only (no JSX)
  types/          # type contracts
  components/ui/  # primitives (Container, Section, Card, Button, Badge)
  components/     # shared layout helpers (SectionHeader, SectionLayout)
  sections/       # page sections
  pages/          # top-level page composition
```

### Dependency Graph (data -> sections -> UI)

```text
types/*  -> data/*  -> sections/*
                 \-> components/ (SectionHeader/Layout)
sections/* -> components/ui/*
pages/*   -> sections/*
```
