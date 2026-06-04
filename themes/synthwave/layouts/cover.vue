<template>
  <div class="slidev-layout sw-cover">
    <!-- Kung Fury / Hackerman tribute: leather jacket, jeans, red high-tops,
         headband + shades, fists up — warping up the grid into the past. Faces left (his travel direction). -->
    <div class="hack" aria-hidden="true">
      <svg class="hack__svg" viewBox="0 0 110 162">
        <!-- Kung Fury hoverboard: Hackerman rides a flying keyboard. Drawn before
             the figure so the shoes paint on top of it (he stands on the board). -->
        <g class="hack__board">
          <!-- front edge (board thickness) -->
          <path d="M22 159 L86 159 L84 163 L24 163 Z" fill="#0a1233" />
          <!-- top face, in perspective (wider/closer at the front) -->
          <path d="M32 149 L76 149 L86 159 L22 159 Z" fill="#14224f" stroke="#9bfcff" stroke-width="1" stroke-linejoin="round" />
          <!-- key rows receding toward the back -->
          <path d="M30 152 L78 152" stroke="#9bfcff" stroke-width=".6" opacity=".8" />
          <path d="M26 155.5 L82 155.5" stroke="#9bfcff" stroke-width=".6" opacity=".8" />
          <!-- key columns fanning out with the perspective -->
          <path d="M43 149.5 L40 158.5" stroke="#9bfcff" stroke-width=".5" opacity=".5" />
          <path d="M54 149.5 L54 158.5" stroke="#9bfcff" stroke-width=".5" opacity=".5" />
          <path d="M65 149.5 L68 158.5" stroke="#9bfcff" stroke-width=".5" opacity=".5" />
        </g>
        <g class="hack__fig">
          <!-- back leg (jeans) -->
          <rect x="54" y="94" width="15" height="48" rx="7" fill="#7e88a0" transform="rotate(-6 61 118)" />
          <!-- back shoe (red) -->
          <path d="M50 140 h22 a5 5 0 0 1 5 5 v4 h-31 v-4 a5 5 0 0 1 4 -5 z" fill="#d62828" />
          <!-- front leg (jeans) -->
          <rect x="44" y="94" width="15" height="50" rx="7" fill="#9aa6c2" transform="rotate(9 51 119)" />
          <!-- front shoe (red) -->
          <path d="M36 142 h22 a5 5 0 0 1 5 5 v4 h-31 v-4 a5 5 0 0 1 4 -5 z" fill="#ff3b3b" />
          <!-- torso: leather jacket -->
          <path d="M42 42 q-7 28 4 55 l26 0 q7 -30 -4 -55 z" fill="#17171e" />
          <path d="M60 45 q9 26 5 52 l7 0 q5 -29 -5 -53 z" fill="#2c2c3a" />
          <!-- back arm -->
          <rect x="50" y="46" width="13" height="33" rx="6.5" fill="#202029" transform="rotate(20 56 62)" />
          <!-- front arm bent up, fist by the chin -->
          <rect x="46" y="54" width="12" height="26" rx="6" fill="#17171e" transform="rotate(58 52 67)" />
          <rect x="39" y="34" width="11" height="27" rx="5.5" fill="#1b1b24" transform="rotate(-16 44 47)" />
          <circle cx="41" cy="36" r="6.5" fill="#e7b48a" />
          <!-- neck (drawn first so the head sits on top of it) -->
          <rect x="45" y="32" width="7" height="12" rx="2.5" fill="#d99c72" />
          <!-- head — profile facing left -->
          <circle cx="47" cy="23" r="12" fill="#e7b48a" />
          <!-- nose poking out to the left -->
          <path d="M35.5 22 q-3 1.4 -2.4 3.4 q.7 1.3 2.4 1.1 z" fill="#e7b48a" />
          <!-- ear on the near (right) side -->
          <circle cx="52" cy="25" r="2.4" fill="#d99c72" />
          <!-- hair: crown sweeping back over the skull -->
          <path d="M38 15 q8 -9 19 -1 q3 7 1 15 q1.5 -10 -4 -14 q-8 -4.5 -16 0 z" fill="#16100a" />
          <!-- shades over the eyes -->
          <rect x="34" y="19" width="17" height="6.5" rx="2.5" fill="#0b0b0b" />
          <!-- temple arm of the shades toward the ear -->
          <rect x="49" y="20.5" width="6" height="2" rx="1" fill="#0b0b0b" />
          <!-- red headband across the forehead + tail flying back -->
          <rect x="35" y="12" width="22" height="5.5" rx="2" fill="#ff3b3b" />
          <path d="M56 13 l13 -4 -2 9 z" fill="#d62828" />
        </g>
      </svg>
    </div>

    <slot />
    <div class="sw-cover__tag">&gt; loading shovelware.iso<span class="sw-cursor">█</span></div>
  </div>
</template>

<style scoped>
.sw-cover__sun {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 340px;
  height: 340px;
  transform: translate(-50%, -100%);
  border-radius: 50%;
  background: linear-gradient(180deg, #ffe24a 0%, #ff8c42 38%, #ff2e88 72%, #7700ff 100%);
  box-shadow: 0 0 90px rgba(255, 80, 140, .55), 0 0 160px rgba(119, 0, 255, .35);
  opacity: .9;
  z-index: 0; /* behind the slide text (z-index:2), in front of the grid floor */
}
.sw-cover__sun-slits {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 52%;
  background: repeating-linear-gradient(
    to bottom,
    transparent 0,
    transparent 8px,
    #0b0420 8px,
    #0b0420 14px
  );
}

/* Hackerman warps from the foreground of the grid up to the vanishing point */
.hack {
  position: absolute;
  left: 50%;
  top: 50%;            /* the grid's horizon / vanishing point (now at half height) */
  width: 112px;
  height: 200px;
  margin: 0;
  z-index: 1;          /* on the grid, behind the title text (z-index:2) */
  pointer-events: none;
  transform-origin: 50% 50%;
  /* soft pink rim so the coloured figure still pops on the grid without washing out */
  filter: drop-shadow(0 0 6px rgba(255, 46, 136, .55)) drop-shadow(0 0 2px rgba(0, 0, 0, .8));
  animation: hack-warp 5s cubic-bezier(.45, 0, .75, 1) infinite;
}
.hack__svg { width: 100%; height: 100%; overflow: visible; }
/* the flying keyboard glows cyan, distinct from the figure's pink rim */
.hack__board { filter: drop-shadow(0 0 3px rgba(155, 252, 255, .9)) drop-shadow(0 0 8px rgba(5, 217, 232, .6)); }

/* travels straight into the central vanishing point — which is both where the
   grid lines converge AND the base of the sun (the horizon at top:58%). Because
   the end point IS the vanishing point, the path lies along a grid radial, so it
   follows the drawn lines' angle. translate(-56,-100) centers the box on it. */
@keyframes hack-warp {
  0%   { transform: translate(330px, 210px)  scale(1.3);  opacity: 0; }
  14%  { opacity: 1; }
  94%  { opacity: 1; }
  100% { transform: translate(80px, -100px) scale(.04);  opacity: 0; }
}
</style>
