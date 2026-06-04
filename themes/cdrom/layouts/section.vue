<script setup>
defineProps({ kicker: String, note: String })
</script>

<template>
  <div class="slidev-layout cd-section">
    <div v-if="kicker" class="cd-section__kicker">{{ kicker }}</div>
    <slot />
    <div v-if="note" class="cd-section__note">{{ note }}</div>
  </div>
</template>
