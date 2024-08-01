<script setup lang="ts">
defineProps<{
  msg: string,
  msg2: string
}>()
</script>

<template>
  <h1 class="white">{{ msg }}</h1>
  <div class="greetings">
    <h3 class="white">{{ msg2 }}</h3>
    <h3>
      Welcome to my website!
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
  color: white;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
