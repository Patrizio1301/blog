<template>
  <div class="about">
    hello
    <textarea v-model="latex" style="width: 300px; height: 200px"></textarea>
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
  data() {
    return {
      latex: "$\\frac{2}{3}$ abc $\\\\$ 你好 $\\frac{33}{444}$",
    };
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
