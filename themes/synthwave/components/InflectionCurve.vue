<!--
  The signature flourish: a neon line chart that crawls flat, then bends sharply
  upward at the "Nov 2025" inflection point. Pure SVG — no chart lib.
-->
<template>
  <div class="infl">
    <svg viewBox="0 0 320 180" class="infl__svg" preserveAspectRatio="none">
      <!-- axes -->
      <line x1="20" y1="160" x2="312" y2="160" class="infl__axis" />
      <line x1="20" y1="12" x2="20" y2="160" class="infl__axis" />
      <!-- the curve: flat shovel-pile, then the hockey-stick after the inflection -->
      <path
        d="M20,150 C90,148 150,146 192,142 C232,138 250,118 268,78 C282,46 296,28 308,18"
        class="infl__line"
      />
      <!-- inflection marker at Nov 2025 (x≈192) -->
      <circle cx="192" cy="142" r="5" class="infl__dot" />
      <line x1="192" y1="142" x2="192" y2="160" class="infl__marker" />
    </svg>
    <div class="infl__label">NOV 2025 — agentic coding got good</div>
  </div>
</template>

<style scoped>
.infl {
  position: relative;
  width: 100%;
  max-width: 460px;
}
.infl__svg {
  width: 100%;
  height: auto;
  overflow: visible;
}
.infl__axis {
  stroke: rgba(143, 134, 201, .5);
  stroke-width: 1;
}
.infl__line {
  fill: none;
  stroke: #05d9e8;
  stroke-width: 2.5;
  stroke-linecap: round;
  filter: drop-shadow(0 0 4px #05d9e8) drop-shadow(0 0 10px rgba(5, 217, 232, .8));
  stroke-dasharray: 520;
  stroke-dashoffset: 520;
  animation: infl-draw 2.4s ease-out forwards;
}
@keyframes infl-draw {
  to { stroke-dashoffset: 0; }
}
.infl__dot {
  fill: #ff2e88;
  filter: drop-shadow(0 0 6px #ff2e88) drop-shadow(0 0 14px rgba(255, 46, 136, .9));
  animation: infl-pulse 2s ease-in-out 2.2s infinite;
}
@keyframes infl-pulse {
  0%, 100% { r: 5; }
  50%      { r: 7; }
}
.infl__marker {
  stroke: rgba(255, 46, 136, .45);
  stroke-width: 1;
  stroke-dasharray: 3 3;
}
.infl__label {
  margin-top: .3rem;
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  font-size: .62rem;
  letter-spacing: .14em;
  color: #ff2e88;
  text-shadow: 0 0 8px rgba(255, 46, 136, .7);
}
</style>
