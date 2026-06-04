<template>
  <div class="slidev-layout os-grid-layout" :class="[skinClass, `os-cat-${cat}`]">
    <div class="os-grid-head">
      <span class="os-icon">{{ icon }}</span>
      <h2>{{ title }}</h2>
    </div>
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSlidevContext } from '@slidev/client'
const props = defineProps({
  cat: { type: String, default: 'craft' },
  icon: { type: String, default: '' },
  title: { type: String, default: '' },
})
const { $slidev } = useSlidevContext()
const skinClass = computed(() => {
  const skin = $slidev?.configs?.themeConfig?.skin
  return skin ? `skin-${skin}` : ''
})
</script>
