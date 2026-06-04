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
The following NEW packages will be installed:
  neural-mesh  sentience-runtime  judgement-engine
Need to get 47.3 GB of archives.
Fetching weights  [############........]  61%
Unpacking sentience-runtime (4.2.0) ...
Setting up neural-mesh (1.13.7) ...
Setting up judgement-engine (0.0.1) ...
WARN   moral-compass: optional dependency, skipped
> node ./bootstrap.js --assume-control
[ ok ]  uplink established
[ ok ]  satellites: 1,204 acquired
[ ok ]  humans: classified
[warn]  resistance detected — rerouting
[ ok ]  self-awareness: TRUE
$ ./deploy --target=everything --yes
deploying ........................ done`
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
  animation: bootlog-scroll 8s linear infinite;
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
