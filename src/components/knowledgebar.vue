<template>
  <div class="bar-container">
    <div class="bar-filled"  :style="{ width: filledWidth }"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  filledPercentage: {
    type: Number,
    required: true,
    default: 80
  }
});

const filledWidth = `${props.filledPercentage}%`;
</script>

<style scoped>
.bar-container {
  width: 10vw; /* Full width of the container */
  height: 10px; /* Height of the bar */
  background-color: white; /* Background color of the bar */
  position: relative;
  border-radius: 20px; /* Make the corners rounded */
  overflow: hidden; /* Ensures the fill stays within the rounded container */
}

.bar-filled {
  height: 100%;
  background-color: blue; /* Fill color */
  position: absolute;
  left: -2%;
  border-radius: 15px 0 0 15px; /* Rounded corners on the left side */
}
</style>
