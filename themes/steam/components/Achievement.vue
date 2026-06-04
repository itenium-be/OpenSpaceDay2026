<script setup>
defineProps({
  title: String,
  subtitle: String,
  // single glyph / emoji shown in the trophy plate
  icon: { type: String, default: '🏆' },
  // rarity tint: 'gold' | 'cyan' | 'green'
  rarity: { type: String, default: 'gold' },
})
</script>

<template>
  <div class="achv" :class="`achv--${rarity}`">
    <div class="achv__plate">{{ icon }}</div>
    <div class="achv__text">
      <div class="achv__label">Achievement Unlocked</div>
      <div class="achv__title">{{ title }}</div>
      <div v-if="subtitle" class="achv__sub">{{ subtitle }}</div>
    </div>
    <div class="achv__shine" />
  </div>
</template>

<style scoped>
.achv {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: .9rem;
  max-width: 100%;
  margin: .6rem 0;
  padding: .7rem .9rem .7rem .7rem;
  background: linear-gradient(100deg, #2a475e 0%, #1b2838 70%);
  border: 1px solid rgba(102, 192, 244, .25);
  border-radius: 6px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, .45), inset 0 0 0 1px rgba(255, 255, 255, .03);
  overflow: hidden;
  animation: achv-slide .6s cubic-bezier(.22, 1, .36, 1) both;
}
.achv__plate {
  flex: 0 0 auto;
  width: 2.6rem;
  height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  border-radius: 5px;
  background: radial-gradient(circle at 50% 35%, #3a5b76, #16202d);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .06), 0 0 18px var(--glow, rgba(229, 193, 0, .5));
}
.achv__label {
  font-size: .6rem;
  text-transform: uppercase;
  letter-spacing: .16em;
  font-weight: 700;
  color: var(--accent, #e5c100);
}
.achv__title { font-size: 1rem; font-weight: 800; color: #fff; line-height: 1.15; margin-top: .1rem; }
.achv__sub { font-size: .74rem; color: var(--steam-dim, #8f98a0); margin-top: .1rem; }

/* sweeping shine */
.achv__shine {
  position: absolute;
  top: 0;
  left: -60%;
  width: 40%;
  height: 100%;
  background: linear-gradient(100deg, transparent, rgba(255, 255, 255, .12), transparent);
  animation: achv-shine 2.8s ease-in-out 0.5s infinite;
}

.achv--gold  { --accent: #e5c100; --glow: rgba(229, 193, 0, .55); }
.achv--cyan  { --accent: #66c0f4; --glow: rgba(102, 192, 244, .55); border-color: rgba(102, 192, 244, .35); }
.achv--green { --accent: #a4d007; --glow: rgba(164, 208, 7, .5); border-color: rgba(164, 208, 7, .3); }

@keyframes achv-slide {
  from { opacity: 0; transform: translateX(2.5rem); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes achv-shine {
  0%   { left: -60%; }
  55%  { left: 130%; }
  100% { left: 130%; }
}
</style>
