<script setup>
defineProps({
  title: String,
  // pipe-separated tag list, e.g. "TypeScript|Docker|Python"
  tags: String,
  // review badge text, defaults to a Steam-style rating
  review: { type: String, default: 'Very Positive' },
  reviews: { type: String, default: '47' },
  // 0-5 filled stars
  stars: { type: Number, default: 4 },
  price: String,
  // short capsule subtitle / what it is
  desc: String,
})
</script>

<template>
  <div class="storecard">
    <div class="storecard__capsule">
      <span class="storecard__title">{{ title }}</span>
      <span v-if="price" class="storecard__price" :class="{ 'storecard__price--free': price === 'FREE' }">{{ price }}</span>
    </div>
    <div class="storecard__body">
      <p v-if="desc" class="storecard__desc">{{ desc }}</p>
      <p v-else class="storecard__desc"><slot /></p>
      <div class="storecard__tags">
        <span v-for="t in (tags || '').split('|').filter(Boolean)" :key="t" class="storecard__tag">{{ t }}</span>
      </div>
      <div class="storecard__review">
        <span class="storecard__stars">
          <span v-for="n in 5" :key="n" :class="n <= stars ? 'on' : 'off'">★</span>
        </span>
        <span class="storecard__rating">{{ review }}</span>
        <span class="storecard__count">({{ reviews }})</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.storecard {
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #1f3447 0%, #16202d 100%);
  border: 1px solid rgba(102, 192, 244, .14);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, .4);
  transition: transform .15s, box-shadow .15s;
}
.storecard:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(102, 192, 244, .18);
}
.storecard__capsule {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
  padding: .55rem .75rem;
  background: linear-gradient(100deg, #2a475e 0%, #1b2838 100%);
  border-bottom: 1px solid rgba(0, 0, 0, .35);
}
.storecard__title { font-weight: 800; color: #fff; font-size: .95rem; }
.storecard__price {
  font-size: .62rem;
  font-weight: 700;
  color: #d2e885;
  background: rgba(164, 208, 7, .18);
  padding: .2em .5em;
  border-radius: 3px;
  white-space: nowrap;
}
.storecard__price--free { color: #cdebff; background: rgba(45, 115, 255, .35); }
.storecard__body { padding: .6rem .75rem .7rem; flex: 1; display: flex; flex-direction: column; }
.storecard__desc { margin: 0 0 .5rem; color: var(--steam-text, #c7d5e0); font-size: .76rem; line-height: 1.35; flex: 1; }
.storecard__tags { display: flex; flex-wrap: wrap; gap: .25rem; margin-bottom: .5rem; }
.storecard__tag {
  background: rgba(102, 192, 244, .12);
  color: var(--steam-cyan, #66c0f4);
  font-size: .58rem;
  font-weight: 600;
  padding: .2em .5em;
  border-radius: 3px;
  white-space: nowrap;
}
.storecard__review { display: flex; align-items: center; gap: .4rem; font-size: .68rem; }
.storecard__stars .on { color: var(--steam-gold, #e5c100); }
.storecard__stars .off { color: #3a4a59; }
.storecard__rating { color: var(--steam-cyan, #66c0f4); font-weight: 600; }
.storecard__count { color: var(--steam-faint, #5e6b78); }
</style>
