<script setup>
defineProps({ banner: String, heading: String })
</script>

<template>
  <div class="slidev-layout evil-default">
    <div class="evil-term">
      <div
        v-if="banner"
        class="evil-term__banner"
        :style="{ backgroundImage: `url('/${banner}.jpg')` }"
      >
        <div class="evil-term__bar">
          <span class="evil-term__dot" />
          <span class="evil-term__dot" />
          <span class="evil-term__dot" />
          <span class="evil-term__title">root@skynet:~#</span>
        </div>
        <h1 v-if="heading" class="evil-term__heading">{{ heading }}</h1>
      </div>
      <div class="evil-term__body">
        <slot />
      </div>
    </div>
  </div>
</template>
