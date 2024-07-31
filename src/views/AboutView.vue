<template>
  <div class="about">
    hello
    <div v-katex:display="'\\frac{a_i}{1+x}'"></div>

    <div class="images-container">
      <img src="../assets/first_picture.png">
      <img src="../assets/second.png">
    </div>
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

.images-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.images-container img {
  max-width: 100%;  /* Adjust this value as needed */
  height: auto;
  margin-bottom: 10px; /* Add some spacing between the images if needed */
}
</style>
