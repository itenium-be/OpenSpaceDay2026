import { chromium } from 'playwright-chromium'
const b = await chromium.launch()
const p = await b.newPage({ viewport: { width: 1280, height: 800 } })
await p.addInitScript(() => { const s=document.createElement('style'); s.textContent='.hack{animation-delay:-0.7s !important;animation-play-state:paused !important;}'; document.documentElement.appendChild(s) })
await p.goto('http://localhost:3093/1', { waitUntil: 'networkidle' })
await p.waitForTimeout(1700)
await p.screenshot({ path: '/tmp/nosun-grid.png' })
await b.close(); console.log('ok')
