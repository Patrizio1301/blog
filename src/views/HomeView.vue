<script setup lang="ts">
import AboutMe from '../components/AboutMe.vue'
import Skills from '../components/Skills.vue'
import Idea from '../components/Idea.vue'
</script>

<template>
  <div class="image-container">
    <q-img src="../assets/home.png" class="image">
      <div class="overlay-text">
        Patrizio Guagliardo
      </div>
      <div class="overlay-text2">
        AI ENGINEER
      </div>
    </q-img>
    <main>
      <q-intersection
          transition="scale"
          class="example-item"
        >
      <AboutMe />
      <Skills />
      <Idea />
      </q-intersection>
    </main>
  </div>
</template>


<style scoped>
.image-container {
  position: relative;
}

.image {
  width: 100%;
  height: calc(100vh - 0px);
}

.overlay-text {
  position: absolute;
  top: 47%;
  left: 20%;
  transform: translate(-50%, -50%);
  color: black;
  font-family: "Bebas Neue", sans-serif;
  font-size: 70px;
  font-weight: 400;
  text-align: center;
  background-color: transparent;
}
.overlay-text2 {
  position: absolute;
  top: 53%;
  left: 20%;
  transform: translate(-50%, -50%);
  color: black;
  font-family: "Bebas Neue", sans-serif;
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  background-color: transparent;
}

@media (max-width: 1200px) {
  .overlay-text {
    font-size: 60px;
    font-weight: 300;
  }
  .overlay-text2 {
    font-size: 35px;
    font-weight: 300;
  }
}

@media (max-width: 992px) {
  .overlay-text {
    left: 20%;
    font-size: 50px;
    font-weight: 300;
  }
  .overlay-text2 {
    left: 20%;
    font-size: 30px;
    font-weight: 300;
  }
  .image {
    height: calc(100vh - 0px);
  }
}

@media (max-width: 768px) {
  .overlay-text {
    left: 30%;
    font-size: 40px;
    font-weight: 300;
  }
  .overlay-text2 {
    left: 30%;
    font-size: 25px;
    font-weight: 300;
  }
  .image {
    height: calc(100vh - 0px);
  }
}
@media (max-width: 576px) {
  .overlay-text {
    left: 30%;
    font-size: 25px;
    font-weight: 300;
  }
  .overlay-text2 {
    left: 30%;
    font-size: 25px;
    font-weight: 300;
  }
  .image {
    height: calc(100vh - 0px);
  }
}
</style>