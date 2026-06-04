<script setup>
defineProps({ codename: String, persona: String })
</script>

<template>
  <div class="slidev-layout evil-section">
    <div v-if="codename" class="evil-section__meta">// {{ codename }}</div>
    <slot />
    <div v-if="persona" class="evil-section__persona">{{ persona }}</div>
  </div>
</template>
