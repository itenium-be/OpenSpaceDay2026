<script setup>
defineProps({ num: String, heading: String })
</script>

<template>
  <div class="slidev-layout sw-default">
    <div v-if="heading" class="sw-default__head">
      <span v-if="num" class="sw-default__num">{{ num }}</span>
      <h1>{{ heading }}</h1>
    </div>
    <div v-if="heading" class="sw-default__rule" />
    <slot />
  </div>
</template>
