<template>
  <div class="slidev-layout os-grid-layout" :class="[$slidev.configs.themeConfig?.skin ? 'skin-' + $slidev.configs.themeConfig.skin : '', `os-cat-${cat}`]">
    <div class="os-grid-head">
      <span class="os-icon">{{ icon }}</span>
      <h2>{{ title }}</h2>
    </div>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  cat: { type: String, default: 'craft' },
  icon: { type: String, default: '' },
  title: { type: String, default: '' },
})
</script>
