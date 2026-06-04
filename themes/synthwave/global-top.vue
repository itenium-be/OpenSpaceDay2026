<!-- Outrun backdrop rendered behind every slide: neon sun + perspective grid floor -->
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

/* lift slide content above the backdrop */
.slidev-layout > * { position: relative; z-index: 1; }
</style>
