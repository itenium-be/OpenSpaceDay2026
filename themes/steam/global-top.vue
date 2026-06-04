<!-- Subtle store-glass overlay: top sheen + soft vignette on every slide -->
<template>
  <div class="steam-fx">
    <div class="steam-fx__sheen" />
    <div class="steam-fx__vignette" />
  </div>
</template>

<style>
.steam-fx {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 10;
}
.steam-fx__sheen {
  position: absolute;
  inset: 0 0 auto 0;
  height: 38%;
  background: linear-gradient(to bottom, rgba(102, 192, 244, .05), transparent);
}
.steam-fx__vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(130% 110% at 50% 45%, transparent 62%, rgba(0, 0, 0, .45) 100%);
}
</style>
