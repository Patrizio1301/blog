<template>
  <div class="blog-list q-pa-md">
    <div class="card-grid">
      <q-card v-for="post in posts" :key="post.id" class="my-card">
        <q-img :src="post.image">
          <div class="absolute-bottom text-h6">{{ post.title }}</div>
        </q-img>
        <q-card-section>
          {{ post.date }}
          <br />
          {{ post.description }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogList',
  data() {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      posts: [
        {
          id: 1,
          title: 'Machine Learning',
          date: 'Published on: 2023-08-01',
          image: 'https://cdn.quasar.dev/img/parallax2.jpg',
          description: 'https://cdn.quasar.dev/img/parallax2.jpg',
        },
        {
          id: 2,
          title: 'Optimization Algorithms',
          date: 'Published on: 2023-08-02',
          image: 'https://cdn.quasar.dev/img/parallax2.jpg',
          description: 'https://cdn.quasar.dev/img/parallax2.jpg',
        },
        {
          id: 3,
          title: 'Machine Learning Fundamentals',
          date: 'Published on: 2022-08-03',
          image: 'https://cdn.quasar.dev/img/parallax1.jpg',
          description: 'https://cdn.quasar.dev/img/parallax2.jpg',
        }
      ]
    };
  }
};
</script>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.my-card {
  width: 100%;
}

@media (min-width: 600px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .card-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1200px) {
  .card-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
