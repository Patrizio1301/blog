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
      <h3 class="header">ABOUT ME</h3>
    </div>
    <div class="content">
      <p>I am an enthusiastic Machine Learning practitioner with a particular focus on Natural Language Processing (NLP) and Deep Generative Models. My expertise encompasses 6+ years in working in multiple international Machine Learning projects with focus on providing scalable solutions with automated processes (MLOps). Main interests are cloud systems, ML libraries, and deep learning techniques, including Transformers, Difussion models, time series prediction, and recommendation systems. Additionally, I bring extensive experience in data engineering with knowledge of Spark (Scala), Apache Beam and Docker, rounding out my skill set, all backed by a strong educational background in mathematics.</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15vh 20px; /* Remove top padding */
  height: 80vh;
}

.about-section {
  margin-top: 10px; /* Minimal top margin */
  margin-bottom: 20px; /* Separate from the content */
  width: 100%;
  text-align: center;
}

.header {
  margin-top: 60px;
  font-family: "Bebas Neue", sans-serif;
}

.content {
  width: 100%;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 25px;

}


@media (max-width: 1700px) {
  .container {
    padding: 10vh 20px; /* Remove top padding */
    height: 80vh;
  }
  .content {
    font-size: 18px;
  }
}

@media (max-width: 1200px) {
  .container {
    padding: 10vh 20px; /* Remove top padding */
    height: 80vh;
  }
  .content {
    font-size: 15px;
  }
}

@media (max-width: 992px) {
  .container {
    padding: 7vh 20px; /* Remove top padding */
    height: 80vh;
  }
    .content {
    font-size: 15px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 1vh 20px; /* Remove top padding */
    height: 80vh;
  }
    .content {
    font-size: 15px;
  }
}
@media (max-width: 576px) {
  .container {
    padding: 10vh 20px; /* Remove top padding */
    height: 80vh;
  }
    .content {
    font-size: 12px;
  }
}


</style>
