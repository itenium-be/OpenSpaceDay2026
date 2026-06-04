<!-- Pure-CSS outrun backdrop: receding neon grid floor (+ optional horizon sun).
     The sun is opt-in (`sun` prop) so it shows only on the cover, not every slide. -->
<script setup>
defineProps({ sun: Boolean })
</script>

<template>
  <div class="neon">
    <div v-if="sun" class="neon__sun">
      <div class="neon__sun-slits" />
    </div>
    <div class="neon__floor">
      <div class="neon__grid" />
    </div>
    <div class="neon__haze" />
    <div class="neon__horizon" />
  </div>
</template>

<style scoped>
.neon {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

/* gradient sun sitting on the horizon line (~58% down) */
.neon__sun {
  position: absolute;
  left: 50%;
  top: 58%;
  width: 340px;
  height: 340px;
  transform: translate(-50%, -100%);
  border-radius: 50%;
  background: linear-gradient(180deg, #ffe24a 0%, #ff8c42 38%, #ff2e88 72%, #7700ff 100%);
  box-shadow: 0 0 90px rgba(255, 80, 140, .55), 0 0 160px rgba(119, 0, 255, .35);
  opacity: .9;
}
/* horizontal slits across the lower half of the sun — the classic outrun look */
.neon__sun-slits {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 52%;
  background: repeating-linear-gradient(
    to bottom,
    transparent 0,
    transparent 8px,
    #0b0420 8px,
    #0b0420 14px
  );
}

/* the receding floor takes the bottom half of the screen (Kung Fury style) */
.neon__floor {
  position: absolute;
  left: 0;
  right: 0;
  top: var(--sw-horizon, 50%);
  bottom: 0;
  transition: top .6s ease;
  perspective: 260px;
  perspective-origin: 50% 0%;
  overflow: hidden;
}
.neon__grid {
  position: absolute;
  left: -50%;
  right: -50%;
  top: 0;
  height: 200%;
  /* Hackerman red: both line directions the same hot red/magenta. The horizontal
     lines (2nd gradient) are twice as dense as the verticals → many receding rows. */
  background-image:
    linear-gradient(to right, rgba(255, 38, 96, .75) 1.5px, transparent 1.5px),
    linear-gradient(to bottom, rgba(255, 38, 96, .72) 1.5px, transparent 1.5px);
  background-size: 46px 46px, 46px 17px;
  transform: rotateX(74deg);
  transform-origin: 50% 0%;
  /* neon bloom — the grid lines glow (the element is transparent between lines,
     so drop-shadow halos each line) */
  filter:
    drop-shadow(0 0 2px rgba(255, 120, 160, 1))
    drop-shadow(0 0 6px rgba(255, 40, 96, .95))
    drop-shadow(0 0 16px rgba(255, 40, 96, .7))
    drop-shadow(0 0 30px rgba(255, 40, 96, .4));
  animation: neon-scroll 0.55s linear infinite;
}
/* scroll the grid toward the viewer for forward-motion (34 = 2 horizontal rows of 17px) */
@keyframes neon-scroll {
  from { background-position: 0 0; }
  to   { background-position: 0 34px; }
}

/* bright atmospheric haze along the horizon — the glowing band from the film */
.neon__haze {
  position: absolute;
  left: 0;
  right: 0;
  top: var(--sw-horizon, 50%);
  height: 170px;
  transform: translateY(-50%);
  transition: top .6s ease;
  /* bright cyan-white atmospheric glow hugging the horizon — the signature band
     from the still: hot white core, cyan mid, fading up into the starfield */
  background: radial-gradient(70% 100% at 50% 50%, rgba(224, 250, 255, .85), rgba(120, 205, 255, .34) 38%, rgba(80, 150, 255, .12) 60%, transparent 80%);
  filter: blur(9px);
}
/* the crisp glowing horizon seam where grid meets sky */
.neon__horizon {
  position: absolute;
  left: 0;
  right: 0;
  top: var(--sw-horizon, 50%);
  height: 2px;
  transition: top .6s ease;
  background: #eafdff;
  box-shadow: 0 0 12px #fff, 0 0 34px var(--sw-cyan, #05d9e8), 0 0 72px rgba(255, 40, 95, .55);
}
</style>
