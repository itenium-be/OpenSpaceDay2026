<script setup>
defineProps({ banner: String })
</script>

<template>
  <div class="slidev-layout evil-default">
    <div class="evil-term">
      <div class="evil-term__bar">
        <span class="evil-term__dot" />
        <span class="evil-term__dot" />
        <span class="evil-term__dot" />
        <span class="evil-term__title">root@skynet:~#</span>
      </div>
      <div class="evil-term__body">
        <slot />
      </div>
      <div
        v-if="banner"
        class="evil-term__banner"
        :style="{ backgroundImage: `url('/${banner}.jpg')` }"
      />
    </div>
  </div>
</template>
