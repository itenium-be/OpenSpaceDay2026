<!-- CRT overlay rendered on top of every slide -->
<template>
  <div class="evil-fx">
    <div class="evil-fx__scan" />
    <div class="evil-fx__vignette" />
  </div>
</template>

<style>
.evil-fx {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 10;
}
.evil-fx__scan {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0) 2px,
    rgba(0, 0, 0, .22) 3px,
    rgba(0, 0, 0, 0) 4px
  );
  opacity: .5;
}
.evil-fx__vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(125% 105% at 50% 50%, transparent 58%, rgba(0, 0, 0, .72) 100%);
}
</style>
