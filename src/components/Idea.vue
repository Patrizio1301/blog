<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <div class="container">
    <div class="about-section">
      <h3 class="header">"Artificial Intelligence is about amplifying human ingenuity and unlocking new possibilities to improve our world."
— Ginni Rometty</h3>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px; /* Remove top padding */
  height: 80vh;
}

.about-section {
  margin-top: 10px; /* Minimal top margin */
  margin-bottom: 20px; /* Separate from the content */
  width: 100%;
  text-align: center;
}

.header {
  margin-top: 30vh;
  font-family: "Bebas Neue", sans-serif;
}
</style>
