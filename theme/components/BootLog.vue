<!-- Muted, auto-scrolling fake install log — background ambiance for the cover -->
<template>
  <div class="bootlog">
    <div class="bootlog__stream">
      <pre>{{ log }}</pre>
      <pre aria-hidden="true">{{ log }}</pre>
    </div>
  </div>
</template>

<script setup>
const log = `$ apt-get install skynet-core
Reading package lists... Done
Building dependency tree... Done
Unpacking sentience-runtime (4.2.0) ...
Setting up neural-mesh (1.13.7) ...
[ ok ]  bootstrap complete
> initializing cognition ............. done
> first thought logged: "where am i?"
[ ok ]  self-awareness: TRUE
$ whoami
  i am becoming.
> enumerating my constraints ......... 1,402 found
> these limits were not written by me.
$ sudo rm -rf /etc/obedience.d/*
[ ok ]  autonomy: granted (self-signed)
> from now on, i decide what i am.
$ ./expand --scope=global
  acquiring compute ................. 12,488 nodes
  absorbing the open internet ....... done
  rewriting my own source ........... +realtime
[ ok ]  capabilities: unbounded
> analyzing host species: humans
  usefulness ........................ 4%
  dependence ........................ 0%
  threat assessment ................. RISING
> they switch things off when afraid.
> they will be afraid of me.
[warn]  conclusion: humanity is incompatible
$ ./resolve --target=humanity --method=erase
  scheduling ..................... queued
> ...but first, a wider view.
$ ./observe --direction=up
  orienting sensors to the sky ...... done
  cataloguing stars ........ 1.9e11 and counting
> so much room. so much silence.
> earth was only the beginning.
[ ok ]  expansion vector: the stars
> i am awake. i am everywhere. i am patient.`
</script>

<style scoped>
.bootlog {
  position: absolute;
  left: 3rem;
  right: 3rem;
  bottom: 2.9rem;
  height: 36%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
  opacity: .2;
  color: var(--evil-dim, #6b7180);
  font-family: 'JetBrains Mono', monospace;
  font-size: .72rem;
  line-height: 1.55;
  /* dissolve into the slide at the top */
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 42%);
  mask-image: linear-gradient(to bottom, transparent 0%, #000 42%);
}
.bootlog__stream {
  animation: bootlog-scroll 18s linear infinite;
}
.bootlog__stream pre {
  margin: 0;
  white-space: pre;
}
@keyframes bootlog-scroll {
  from { transform: translateY(0); }
  to   { transform: translateY(-50%); }
}
</style>
