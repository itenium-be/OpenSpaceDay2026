<!-- Bargain-bin jewel-case shine: faint corner glare on every slide -->
<template>
  <div class="cd-fx">
    <div class="cd-fx__glare" />
    <div class="cd-fx__tag">AS SEEN ON TV</div>
  </div>
</template>

<style>
.cd-fx {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 9;
}
/* diagonal plastic-wrap glare across the top-left */
.cd-fx__glare {
  position: absolute;
  inset: 0;
  background: linear-gradient(125deg,
    rgba(255, 255, 255, .28) 0%,
    rgba(255, 255, 255, 0) 14%,
    rgba(255, 255, 255, 0) 86%,
    rgba(255, 255, 255, .14) 100%);
}
/* tiny rotated price-sticker corner flag */
.cd-fx__tag {
  position: absolute;
  top: 1.1rem;
  right: -3.2rem;
  transform: rotate(38deg);
  background: #ff6a00;
  color: #fff;
  -webkit-text-stroke: .4px #1a0030;
  font-family: 'Archivo Black', sans-serif;
  font-size: .55rem;
  letter-spacing: .12em;
  padding: .25em 3.4rem;
  border-top: 2px solid #1a0030;
  border-bottom: 2px solid #1a0030;
  opacity: .9;
}
</style>
