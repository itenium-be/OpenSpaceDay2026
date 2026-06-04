<!-- Pure-CSS spinning reflective CD-ROM disc -->
<script setup>
defineProps({
  size: { type: [Number, String], default: 230 }, // px
  label: { type: String, default: '1000+ APPS' },
})
</script>

<template>
  <div class="cd" :style="{ '--size': size + 'px' }">
    <div class="cd__disc">
      <div class="cd__sheen" />
      <div class="cd__ring" />
      <div class="cd__band">{{ label }}</div>
      <div class="cd__hub" />
      <div class="cd__hole" />
    </div>
  </div>
</template>

<style scoped>
.cd {
  width: var(--size);
  height: var(--size);
  display: inline-block;
}
.cd__disc {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  /* iridescent rainbow data surface */
  background:
    repeating-conic-gradient(from 0deg,
      #ff00a8 0deg 18deg,
      #00e5ff 18deg 36deg,
      #b6ff00 36deg 54deg,
      #ffd000 54deg 72deg,
      #6a00ff 72deg 90deg);
  border: 3px solid #1a0030;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, .4), 6px 8px 18px rgba(26, 0, 48, .5);
  animation: cd-spin 6s linear infinite;
  overflow: hidden;
}
/* moving glossy highlight sweep */
.cd__sheen {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(from 0deg, rgba(255, 255, 255, 0) 0deg, rgba(255, 255, 255, .65) 30deg, rgba(255, 255, 255, 0) 80deg, rgba(255, 255, 255, 0) 200deg, rgba(255, 255, 255, .45) 250deg, rgba(255, 255, 255, 0) 300deg);
  mix-blend-mode: screen;
}
.cd__ring {
  position: absolute;
  inset: 14%;
  border-radius: 50%;
  border: 2px solid rgba(26, 0, 48, .35);
}
.cd__band {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 56%; height: 56%;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 35%, #fff, #ffe6fb 60%, #cfa8ff 100%);
  border: 2px solid #1a0030;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 8%;
  box-sizing: border-box;
  font-family: 'Luckiest Guy', sans-serif;
  text-transform: uppercase;
  color: #ff00a8;
  -webkit-text-stroke: .5px #1a0030;
  font-size: calc(var(--size) * .07);
  letter-spacing: .02em;
}
.cd__hub {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 20%; height: 20%;
  border-radius: 50%;
  background: radial-gradient(circle, #fff, #d9d9e6);
  border: 2px solid #1a0030;
}
.cd__hole {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 9%; height: 9%;
  border-radius: 50%;
  background: var(--cd-paper, #fff7e6);
  border: 2px solid #1a0030;
}
@keyframes cd-spin {
  to { transform: rotate(360deg); }
}
</style>
