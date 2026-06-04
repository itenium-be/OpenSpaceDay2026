<script setup>
defineProps({ codename: String, sub: String })
</script>

<template>
  <div class="slidev-layout sw-section">
    <div v-if="codename" class="sw-section__meta">// {{ codename }}</div>
    <slot />
    <div v-if="sub" class="sw-section__sub">{{ sub }}</div>
  </div>
</template>
