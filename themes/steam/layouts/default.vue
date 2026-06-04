<script setup>
defineProps({ tab: String, wallet: String })
</script>

<template>
  <div class="slidev-layout steam-default">
    <nav class="steam-nav">
      <span class="steam-nav__logo">STEAM</span>
      <span class="steam-nav__item" :class="{ 'steam-nav__item--active': tab === 'store' }">Store</span>
      <span class="steam-nav__item" :class="{ 'steam-nav__item--active': tab === 'library' }">Library</span>
      <span class="steam-nav__item" :class="{ 'steam-nav__item--active': tab === 'community' }">Community</span>
      <span class="steam-nav__spacer" />
      <span class="steam-nav__wallet">{{ wallet || 'Wouter' }}</span>
    </nav>
    <div class="steam-default__body">
      <slot />
    </div>
  </div>
</template>
