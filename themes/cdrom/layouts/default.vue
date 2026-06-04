<script setup>
defineProps({ title: String, sku: String })
</script>

<template>
  <div class="slidev-layout cd-default">
    <div class="cd-case">
      <div class="cd-case__bar">
        <span class="cd-case__dot" />
        <span class="cd-case__dot" />
        <span class="cd-case__dot" />
        <span v-if="title" class="cd-case__title">{{ title }}</span>
        <span class="cd-case__sku">{{ sku || 'SKU-90210' }}</span>
      </div>
      <div class="cd-case__body">
        <slot />
      </div>
    </div>
  </div>
</template>
