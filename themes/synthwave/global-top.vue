<!-- Outrun backdrop rendered behind every slide: perspective grid floor.
     The sun lives only on the cover (see cover.vue) — not every slide. -->
<template>
  <div class="sw-fx">
    <NeonGrid />
    <div class="sw-fx__scan" />
  </div>
</template>

<style>
.sw-fx {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  /* the deep-indigo backdrop now lives here, behind the grid floor, so every
     slide's (transparent) content layer keeps the grid visible */
  background: linear-gradient(180deg, #0b0420 0%, #1a0938 55%, #2a0a52 100%);
}
/* faint horizontal scanlines for the CRT-meets-VHS feel */
.sw-fx__scan {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0) 2px,
    rgba(0, 0, 0, .14) 3px,
    rgba(0, 0, 0, 0) 4px
  );
  opacity: .5;
}
</style>
