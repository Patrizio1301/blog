<template>
  <div class="blog-section">
    Hello
    gianna
    <div v-html="renderedContent"></div>
  </div>
</template>

<script>
import { marked } from "marked";

export default {
  name: 'BlogSection',
  data() {
    return {
      content: `
# Introduction to Machine Learning

Machine learning is a field of artificial intelligence that uses statistical techniques to give computer systems the ability to "learn" from data, without being explicitly programmed.

## Example Formula

Here is an example of a mathematical formula:

$$
E = mc^2
$$
      `,
    };
  },
  computed: {
    renderedContent() {
      const renderer = new marked.Renderer();

      renderer.code = (code, language) => {
        if (language === 'math') {
          return katex.renderToString(code, {
            throwOnError: false,
          });
        }
        return `<pre><code>${code}</code></pre>`;
      };

      return marked(this.content, { renderer });
    },
  },
};
</script>

<style scoped>
.blog-section {
  padding: 20px;
}

.katex {
  font-size: 1.2em;
}
</style>
