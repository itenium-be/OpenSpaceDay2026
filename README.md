# Open Space Day

[Slidev](https://sli.dev/) decks for Itenium's open space day, plus a landing
page (`index.html`) that links them all.

## Run locally

```bash
bun install

# a single deck, live (presenter mode at /presenter):
bun run dev          # More AI Sessions?
bun run shovelware   # Where Is All the Shovelware?
bun run dossier      # Target Dossier — Next Read
bun run open-space   # Open Space Day @ itenium

# the landing page + all decks, built and served together:
bun run build-all
bunx serve dist      # open the printed http://localhost:3000
```

## Decks

| Deck                          | Command                | What                                 |
|-------------------------------|------------------------|--------------------------------------|
| Open Space Day @ itenium      | `bun run open-space`   | Opening deck — conversation starters |
| More AI Sessions?             | `bun run dev`          | AI-track session pitches             |
| Where Is All the Shovelware?  | `bun run shovelware`   | The AI inflection point              |
| Target Dossier — Next Read    | `bun run dossier`      | Bookclub next-read dossier           |

Each deck lives in `decks/<name>/slides.md`.
