<template>
  <div class="slidev-layout cd-cover">
    <CdDisc class="cd-cover__disc" :size="200" label="1000+ REPOS" />
    <slot />
    <Starburst class="cd-cover__price" label="ONLY $4.99" color="#b6ff00" :tilt="14" :size="135" />
    <Starburst class="cd-cover__ai" label="NOW WITH AI!" color="#00e5ff" :tilt="-16" :size="135" />
  </div>
</template>

<style scoped>
.cd-cover__price { position: absolute; bottom: 5%; right: 4%; z-index: 5; }
.cd-cover__ai { position: absolute; top: 5%; left: 4%; z-index: 5; }
</style>
