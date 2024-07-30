<template>
  <div class="about">
    hello
    <h1>This is an about page</h1>
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
</style>
