<script setup>
defineProps({ capsule: String })
</script>

<template>
  <div class="slidev-layout steam-cover">
    <div v-if="capsule" class="steam-cover__capsule">{{ capsule }}</div>
    <slot />
    <div class="steam-cover__foot">store.itenium · all titles by Wouter</div>
  </div>
</template>
