<!-- A "game on the CD" boxed product tile with a starburst price tag -->
<script setup>
import Starburst from './Starburst.vue'

defineProps({
  name: { type: String, required: true },
  desc: { type: String, default: '' },
  stack: { type: String, default: '' },
  price: { type: String, default: '$4.99' },
  burst: { type: String, default: '#ff00a8' },
  accent: { type: String, default: '#00e5ff' }, // box header color
})
</script>

<template>
  <div class="tile" :style="{ '--accent': accent }">
    <Starburst class="tile__burst" :label="price" :color="burst" :size="62" :tilt="-14" />
    <div class="tile__header">{{ name }}</div>
    <div class="tile__body">
      <p class="tile__desc">{{ desc }}</p>
      <span v-if="stack" class="tile__stack">{{ stack }}</span>
    </div>
  </div>
</template>

<style scoped>
.tile {
  position: relative;
  background: #fff;
  border: 3px solid #1a0030;
  border-radius: 5px;
  box-shadow: 4px 4px 0 #6a00ff;
  display: flex;
  flex-direction: column;
  min-height: 6.4rem;
}
.tile__burst {
  position: absolute;
  top: -18px;
  right: -14px;
  z-index: 3;
}
.tile__header {
  font-family: 'Luckiest Guy', sans-serif;
  text-transform: uppercase;
  color: #fff;
  -webkit-text-stroke: .8px #1a0030;
  letter-spacing: .02em;
  font-size: 1.05rem;
  padding: .3em .6em;
  background: linear-gradient(90deg, var(--accent), #ffd000);
  border-bottom: 3px solid #1a0030;
}
.tile__body { padding: .5rem .65rem .6rem; flex: 1; display: flex; flex-direction: column; }
.tile__desc { margin: 0; font-size: .72rem; font-weight: 600; line-height: 1.3; color: #1a0030; }
.tile__stack {
  margin-top: auto;
  align-self: flex-start;
  font-family: 'Courier New', monospace;
  font-weight: 700;
  font-size: .62rem;
  color: #1a0030;
  background: #b6ff00;
  border: 1.5px solid #1a0030;
  border-radius: 3px;
  padding: .1em .4em;
}
</style>
