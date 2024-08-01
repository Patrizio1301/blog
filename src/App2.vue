<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HorizontalBar from './components/knowledgebar.vue'
import { ref } from 'vue'

const showMenu = ref(false)
</script>

<template>
  <div class="title">Patrizio Guagliardo</div>
  <q-btn color="primary" icon="mail" label="On Left" />
  <div class="title2">Artificial Intelligence Engineer</div>
  <q-btn color="primary" icon="mail" label="On Left" />
  <div class="about">
    <div class="vertical-line">
      <span>up</span>
    </div>
    <div class="navbar">
      <q-btn color="primary" icon="mail" label="On Left" />
      <button class="menu-button" @click="showMenu = !showMenu">☰</button>
      <ul :class="{ 'menu-open': showMenu }">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
     <div class="page">
    <div class="wrapper">
    </div>
    <RouterView />
  </div>
    <div class="experience">
      <div class="years">
        <h1>8+</h1>
        <p>Years Experience Working</p>
      </div>
    </div>
    <div class="description">
      <div class="services">
        <h3>Scala</h3>
        <HorizontalBar :filledPercentage="60"/>
        <h3>Apache Beam</h3>
        <HorizontalBar :filledPercentage="90"/>
        <h3>Spark</h3>
        <HorizontalBar :filledPercentage="95"/>
        <h3>Python</h3>
        <HorizontalBar :filledPercentage="70"/>
        <h3>Natural language Processing</h3>
        <HorizontalBar :filledPercentage="60"/>
        <h3>Generative Models</h3>
        <HorizontalBar :filledPercentage="40"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  position: fixed;
  font-size: 30px;
  padding: 18px 10px 10px 8px;
  font-weight: 500;
}

.title2 {
  position: fixed;
  font-size: 20px;
  padding: 60px 10px 10px 8px;
  font-weight: 500;
}

.about {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  position: relative;
}

.vertical-line {
  position: absolute;
  left: 32px;
  top: 48%;
  transform: translateY(-50%);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  position: fixed;
  color: white;
  font-size: 1.2em;
  display: flex;
  align-items: center;
}

.vertical-line::before, .vertical-line::after {
  content: '';
  display: block;
  position: fixed;
  width: 1px;
  height: 35vh;
  background-color: white;
}

.vertical-line::before {
  top: calc(-36vh + 0px);
  margin-right: 0.5em;
  margin-bottom: 1.5em;
}

.vertical-line::after {
  margin-right: 0.5em;
  margin-top: 1.5em;
}

.experience {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.years {
  text-align: center;
}

.years h1 {
  font-size: 5em;
  margin: 0;
}

.years p {
  font-size: 1.2em;
}

.description {
  flex: 2;
  padding: 1em;
}

.services {
  display: flex;
  flex-direction: column;
}

.services h3 {
  margin: 0.5em 0;
}

.navbar {
  position: fixed;
  top: 25px;
  left: 350px;
  font-family: "Bebas Neue", sans-serif;

}

.menu-button {
  display: none;
  background: none;
  border: none;
  font-size: 2em;
  cursor: pointer;
  padding: 0;
}

.navbar ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 1em;
}

.navbar li {
  display: inline;
}

.navbar a {
  text-decoration: none;
  font-size: 20px;
  padding: 14px 16px;
}

.navbar a:hover {
  background-color: #111;
  color: white;
}

@media (max-width: 1028px) {
  .menu-button {
    display: block;
  }
  .navbar ul {
    display: none;
    flex-direction: column;
    background-color: white;
    position: fixed;
    top: 50px;
    right: 10px;
    width: 100%;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  }
  .navbar ul.menu-open {
    display: flex;
  }
  .navbar a {
    padding: 10px;
  }
}

.page {
  margin-left: 20px;
  margin-top: 20px;
  background-color: white;
}

nav {
  width: 80%;
  font-size: 12px;
  margin-top: 10px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
