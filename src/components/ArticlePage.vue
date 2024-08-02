<template>
  <div class="article-page q-pa-md">
    <div class="container">
      <div class="index">
        <h3>Table of Contents</h3>
        <ul>
          <li v-for="section in article.sections" :key="section.id">
            <a :href="'#' + section.id">{{ section.title }}</a>
          </li>
        </ul>
      </div>
      <div class="content">
        <h1>{{ article.title }}</h1>
        <p>{{ article.date }}</p>
        <div v-html="article.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticlePage',
  props: ['id'],
  data() {
    return {
      article: {}
    };
  },
  created() {
    // Fetch the article based on the ID from the route
    const articleId = this.$route.params.id;
    // Example data fetching (replace with your own data source)
    this.article = this.getArticleById(articleId);
  },
  methods: {
    getArticleById(id) {
      // Replace with your data fetching logic
      const articles = [
        // Example articles data
        {
          id: '7',
          title: 'RAG Systems',
          date: 'Published on: 2024-06-03',
          content: '<h2 id="introduction">Introduction</h2><p>Content of RAG Systems article...</p>',
          sections: [{ id: 'introduction', title: 'Introduction' }]
        },
        // Add other articles as needed
      ];
      return articles.find(article => article.id === id) || {};
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}

.index {
  width: 30%;
  padding-right: 20px;
}

.content {
  width: 70%;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
