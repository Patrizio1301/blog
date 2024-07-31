<template>
  <div class="about">
    hello
    <div v-katex:display="'\\frac{a_i}{1+x}'"></div>
    <img src="./assets/first-picture.png">
    <h1>This is an about page</h1>
    <img src="./assets/second.png">
    <BlogSection />
  </div>
</template>

<script>
import BlogSection from '../components/blogsection.vue';

export default {
  name: 'App',
  components: {
    BlogSection,
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.latex {
  font-size: 20px;
  color: blueviolet;
}
</style>
