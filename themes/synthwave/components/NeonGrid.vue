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

/* the receding floor occupies the bottom 42% */
.neon__floor {
  position: absolute;
  left: 0;
  right: 0;
  top: 58%;
  bottom: 0;
  perspective: 240px;
  perspective-origin: 50% 0%;
  overflow: hidden;
}
.neon__grid {
  position: absolute;
  left: -50%;
  right: -50%;
  top: 0;
  height: 200%;
  background-image:
    linear-gradient(to right, rgba(5, 217, 232, .55) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 46, 136, .55) 1px, transparent 1px);
  background-size: 44px 44px;
  transform: rotateX(72deg);
  transform-origin: 50% 0%;
  animation: neon-scroll 4s linear infinite;
}
/* scroll the grid toward the viewer for forward-motion */
@keyframes neon-scroll {
  from { background-position: 0 0; }
  to   { background-position: 0 44px; }
}

/* glowing horizon seam where sun meets floor */
.neon__horizon {
  position: absolute;
  left: 0;
  right: 0;
  top: 58%;
  height: 2px;
  background: var(--sw-cyan, #05d9e8);
  box-shadow: 0 0 12px var(--sw-cyan, #05d9e8), 0 0 30px rgba(5, 217, 232, .7);
}
</style>
