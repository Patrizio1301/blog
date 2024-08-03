<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import HorizontalBar from "@/components/knowledgebar.vue";
</script>

<template>
  <div class="container">

        <div class="skill">
          Apache Beam
          <HorizontalBar :filledPercentage="90"/>
        </div>
        <div class="skill">
          Apache Spark
          <HorizontalBar :filledPercentage="90"/>
        </div>
        <div class="skill">
          Python
          <HorizontalBar :filledPercentage="90"/>
        </div>
        <div class="skill">
          Scala
          <HorizontalBar :filledPercentage="90"/>
        </div>
        <div class="skill">
          Javascript
          <HorizontalBar :filledPercentage="90"/>
        </div>
        <div class="skill">
          Vue.js
          <HorizontalBar :filledPercentage="90"/>
        </div>
  </div>
</template>

<style scoped>
.container {
  padding: 0 20px; /* Remove top padding */
  height: 70vh;
  color: white;
  background-color: #00142d;
  padding-top: 10%;
  padding-left: 10%;
}

.skill {
  margin-top: 10px; /* Minimal top margin */
  margin-bottom: 20px; /* Separate from the content */
}
</style>
