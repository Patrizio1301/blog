<template>
  <div class="blog-list q-pa-md">
    <div class="card-grid">
      <q-card v-for="post in posts" :key="post.id" class="my-card" @click="navigateToArticle(post.id)">
        <q-img :src="post.image" style="height: 30vh">
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
          id: 7,
          title: 'RAG Systems',
          date: 'Published on: 2024-06-03',
          image: './RAGsystem.png',
          description: 'RAG (Retrieval-Augmented Generation) systems combine retrieving relevant documents with generative models to enhance response accuracy. They can fail due to retrieval errors or generative model limitations; addressing these issues involves refining retrieval methods, improving the integration between retrieval and generation, and enhancing the model\'s ability to handle diverse queries.',
        },
        {
          id: 6,
          title: 'Conformal Predictions',
          date: 'Published on: 2022-08-03',
          image: './conformal.png',
          description: 'Conformal predictions provide a measure of uncertainty for machine learning model outputs by creating prediction intervals that contain the true outcome with a specified probability. They are important because they offer reliable confidence estimates, enhancing decision-making and trust in model predictions.',
        },
          {
          id: 5,
          title: 'Transformers explained',
          date: 'Published on: 2022-08-03',
          image: './transformers.png',
          description: 'Transformers are deep learning models designed for handling sequential data, excelling in tasks like language translation and text generation. They are often poorly explained due to their complex architecture, involving self-attention mechanisms and multiple processing layers, making them hard to understand without a solid background in neural networks.',
        },
        {
          id: 1,
          title: 'Word Embeddings',
          date: 'Published on: 2023-08-01',
          image: './word_embeddings_colah.png',
          description: 'Word embeddings are vector representations of words that capture their meanings based on context and usage. They are fundamental because they enable machine learning models to understand and process language with semantic awareness, improving tasks like translation, sentiment analysis, and information retrieval.',
        },
        {
          id: 2,
          title: 'Optimization Algorithms',
          date: 'Published on: 2023-08-02',
          image: './optimization.jpg',
          description: 'Optimization algorithms are methods used to adjust model parameters to minimize or maximize an objective function. They are the heart of AI because they enable models to learn from data, improving their accuracy and performance in various tasks.',
        },
        {
          id: 3,
          title: 'ML Fundamentals',
          date: 'Published on: 2022-08-03',
          image: './Machine-learning-def-.png',
          description: '\n' +
              'Machine learning fundamentals include key definitions and concepts such as supervised and unsupervised learning, model training, and evaluation metrics. Central ideas revolve around understanding data quality, preprocessing, and the assumptions about data distributions that models rely on to make accurate predictions and generalize effectively.',
        }
      ]
    };
  },
  methods: {
    navigateToArticle(id) {
      this.$router.push({ name: 'ArticlePage', params: { id } });
    }
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
