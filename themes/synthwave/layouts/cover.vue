<template>
  <div class="slidev-layout sw-cover">
    <!-- sun is cover-only; the grid floor comes from global-top on every slide -->
    <div class="sw-cover__sun" aria-hidden="true"><div class="sw-cover__sun-slits" /></div>
    <slot />
    <div class="sw-cover__tag">&gt; loading shovelware.iso<span class="sw-cursor">█</span></div>
  </div>
</template>

<style scoped>
.sw-cover__sun {
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
  z-index: 0; /* behind the slide text (z-index:2), in front of the grid floor */
}
.sw-cover__sun-slits {
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
</style>
