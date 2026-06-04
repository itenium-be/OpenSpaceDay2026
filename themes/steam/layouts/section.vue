<script setup>
defineProps({ eyebrow: String, note: String })
</script>

<template>
  <div class="slidev-layout steam-section">
    <div v-if="eyebrow" class="steam-section__eyebrow">{{ eyebrow }}</div>
    <slot />
    <div v-if="note" class="steam-section__note">{{ note }}</div>
    <div class="steam-section__bar" />
  </div>
</template>
