<template>
  <div class="slidev-layout os-intro" :class="$slidev.configs.themeConfig?.skin ? 'skin-' + $slidev.configs.themeConfig.skin : ''">
    <slot />
  </div>
</template>
