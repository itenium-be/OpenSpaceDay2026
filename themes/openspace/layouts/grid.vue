<template>
  <div class="slidev-layout os-grid-layout" :class="[$slidev.configs.themeConfig?.skin ? 'skin-' + $slidev.configs.themeConfig.skin : '', `os-cat-${cat}`]">
    <div class="os-grid-head">
      <span class="os-icon">{{ icon }}</span>
      <h2>{{ heading }}</h2>
    </div>
    <slot />
  </div>
</template>

<script setup>
// `title` is a reserved Slidev frontmatter key (slide nav title) and never reaches
// the layout as a prop — use `heading`, matching the evil theme's convention.
defineProps({
  cat: { type: String, default: 'craft' },
  icon: { type: String, default: '' },
  heading: { type: String, default: '' },
})
</script>
