<script setup>
defineProps({ label: String })
</script>

<template>
  <span class="tagchip"><slot>{{ label }}</slot></span>
</template>

<style scoped>
.tagchip {
  display: inline-block;
  background: rgba(102, 192, 244, .12);
  color: var(--steam-cyan, #66c0f4);
  font-size: .62rem;
  font-weight: 600;
  letter-spacing: .02em;
  padding: .25em .6em;
  margin: .15em .25em .15em 0;
  border-radius: 3px;
  white-space: nowrap;
  transition: background .15s;
}
.tagchip:hover { background: rgba(102, 192, 244, .22); }
</style>
