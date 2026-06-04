<template>
  <div class="slidev-layout os-cover" :class="skinClass">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSlidevContext } from '@slidev/client'
const { $slidev } = useSlidevContext()
const skinClass = computed(() => {
  const skin = $slidev?.configs?.themeConfig?.skin
  return skin ? `skin-${skin}` : ''
})
</script>
