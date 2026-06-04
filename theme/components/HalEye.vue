<!-- Pure-CSS glowing red machine eye -->
<template>
  <div class="hal-eye">
    <div class="hal-eye__pupil" />
  </div>
</template>

<style scoped>
.hal-eye {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 50% 45%, #25000a 0%, #140006 45%, #060608 72%);
  box-shadow: 0 0 45px rgba(255, 31, 61, .45), inset 0 0 35px #000;
}
.hal-eye__pupil {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: radial-gradient(circle, #fff 0%, #ff1f3d 38%, #b3001b 72%);
  box-shadow: 0 0 25px #ff1f3d, 0 0 55px rgba(255, 31, 61, .7);
  animation: hal-pulse 3.2s ease-in-out infinite;
}
@keyframes hal-pulse {
  0%, 100% { box-shadow: 0 0 22px #ff1f3d, 0 0 45px rgba(255, 31, 61, .55); }
  50% { box-shadow: 0 0 34px #ff1f3d, 0 0 80px rgba(255, 31, 61, .9); }
}
</style>
