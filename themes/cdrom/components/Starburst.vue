<!-- Loud diagonal bargain-bin price/promo sunburst badge -->
<script setup>
defineProps({
  label: { type: String, default: '$4.99' },
  color: { type: String, default: '#ff00a8' }, // base burst color
  tilt: { type: [Number, String], default: -12 },
  size: { type: [Number, String], default: 150 }, // px
})
</script>

<template>
  <div
    class="starburst"
    :style="{
      '--burst': color,
      '--size': size + 'px',
      transform: `rotate(${tilt}deg)`,
    }"
  >
    <div class="starburst__spike starburst__spike--a" />
    <div class="starburst__spike starburst__spike--b" />
    <div class="starburst__face">
      <span class="starburst__label"><slot>{{ label }}</slot></span>
    </div>
  </div>
</template>

<style scoped>
.starburst {
  position: relative;
  width: var(--size);
  height: var(--size);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(3px 3px 0 #1a0030);
}
/* two rotated squares fake a many-pointed star */
.starburst__spike {
  position: absolute;
  inset: 0;
  background: var(--burst);
  /* 12-point star via polygon */
  clip-path: polygon(
    50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%,
    21% 91%, 32% 57%, 2% 35%, 39% 35%
  );
}
.starburst__spike--b {
  transform: rotate(18deg) scale(.96);
  background: var(--burst);
  filter: brightness(.85);
}
.starburst__face {
  position: relative;
  z-index: 2;
  width: 62%;
  height: 62%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 38% 32%, #fff 0%, var(--burst) 70%);
  border: 2.5px solid #1a0030;
}
.starburst__label {
  font-family: 'Luckiest Guy', 'Archivo Black', sans-serif;
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
  color: #fff;
  -webkit-text-stroke: 1px #1a0030;
  font-size: calc(var(--size) * .17);
  text-shadow: 1px 1px 0 #1a0030;
  padding: 0 .2em;
}
</style>
