<template>
  <div class="slidev-layout os-cover" :class="$slidev.configs.themeConfig?.skin ? 'skin-' + $slidev.configs.themeConfig.skin : ''">
    <slot />
  </div>
</template>
