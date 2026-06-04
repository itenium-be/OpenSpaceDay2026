import { execSync } from 'node:child_process';
import { existsSync, readdirSync, copyFileSync, rmSync } from 'node:fs';
import { resolve, join } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const decksDir = join(root, 'decks');
const distDir  = join(root, 'dist');

// Clean previous build so stale deck output can't survive a rename/removal.
if (existsSync(distDir)) {
  rmSync(distDir, { recursive: true, force: true });
  console.log('Removed dist/');
}

// Discover decks dynamically — any subdir of decks/ that contains slides.md.
const slugs = readdirSync(decksDir, { withFileTypes: true })
  .filter(e => e.isDirectory() && existsSync(join(decksDir, e.name, 'slides.md')))
  .map(e => e.name);

if (!slugs.length) {
  console.error('No decks found under decks/');
  process.exit(1);
}

const landingPage = join(root, 'index.html');
if (!existsSync(landingPage)) {
  console.error('index.html not found at repo root');
  process.exit(1);
}

// Each deck builds with an ABSOLUTE base matching where it's served, so Slidev's
// history router and public asset/image URLs resolve on a subpath. A relative
// "./" base breaks routing and any image referenced from an assets/ chunk.
// BASE_PATH is the site root: "/OpenSpaceDay2026" on GitHub Pages (injected by
// the deploy workflow), empty locally where `serve dist` hosts at the root.
const basePath = (process.env.BASE_PATH || '').replace(/\/+$/, '');

for (const slug of slugs) {
  const entry  = join(decksDir, slug, 'slides.md');
  const outDir = join(distDir, slug);
  const base   = `${basePath}/${slug}/`;
  const cmd    = `bunx slidev build "${entry}" --out "${outDir}" --base "${base}"`;

  console.log(`\nBuilding ${slug} …`);
  try {
    execSync(cmd, { cwd: root, stdio: 'inherit' });
  } catch {
    console.error(`Build failed for deck: ${slug}`);
    process.exit(1);
  }
}

// Drop the landing page at dist/ root — relative hrefs like ./more-ai-sessions/
// resolve correctly when the browser opens dist/index.html.
copyFileSync(landingPage, join(distDir, 'index.html'));

console.log('\nBuild complete:');
console.log(`  index.html → dist/index.html`);
for (const slug of slugs) {
  console.log(`  ${slug}    → dist/${slug}/`);
}
