<!-- Outrun backdrop rendered behind every slide: deep-space starfield + perspective
     grid floor. The sun lives only on the cover (see cover.vue) — not every slide. -->
<template>
  <div class="sw-fx">
    <div class="sw-fx__stars" />
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
  /* deep space: near-black up top, easing into the synthwave purple at the floor */
  background: linear-gradient(180deg, #030109 0%, #05021a 40%, #0a0526 100%);
}
/* starfield in the upper sky, faded out toward the glowing horizon */
.sw-fx__stars {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 56%;
  background-image:
    radial-gradient(1.3px 1.3px at 30px 40px, #ffffff, transparent),
    radial-gradient(1px 1px at 120px 90px, #cfe8ff, transparent),
    radial-gradient(1.6px 1.6px at 205px 28px, #ffffff, transparent),
    radial-gradient(1px 1px at 85px 165px, #ffffff, transparent),
    radial-gradient(1.2px 1.2px at 165px 135px, #bcd6ff, transparent),
    radial-gradient(1.3px 1.3px at 250px 80px, #ffffff, transparent),
    radial-gradient(1px 1px at 15px 120px, #e8f0ff, transparent),
    radial-gradient(1px 1px at 60px 100px, #fff, transparent),
    radial-gradient(1.1px 1.1px at 150px 60px, #fff, transparent),
    radial-gradient(1px 1px at 225px 170px, #dff, transparent);
  background-repeat: repeat;
  background-size: 240px 190px;
  opacity: 1;
  -webkit-mask-image: linear-gradient(180deg, #000 60%, transparent 100%);
  mask-image: linear-gradient(180deg, #000 60%, transparent 100%);
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
