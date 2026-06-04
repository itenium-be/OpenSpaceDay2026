<script setup>
defineProps({ banner: String, heading: String })
// Prepend the deck's deploy base (e.g. /more-ai-sessions/) so the banner resolves
// on a subpath — a literal "/" would request the image from the host root.
const base = import.meta.env.BASE_URL
</script>

<template>
  <div class="slidev-layout evil-default">
    <div class="evil-term">
      <div
        v-if="banner"
        class="evil-term__banner"
        :style="{ backgroundImage: `url('${base}${banner}.jpg')` }"
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
