<template>
  <div class="about">
    <section id="machine-learning-fundamentals">
      <h2>Machine Learning Fundamentals</h2>

      <!-- Definitions Section -->
      <div>
        <h3 class="header">Definitions</h3>

        <div>
          <h4 class="header">Domain set</h4>
          <p>
            An arbitrary set, <strong>X</strong>. This is the set of objects that we may wish to label.
            Usually, these domain points will be represented by a vector of features. We also refer to domain points
            as instances and to <strong>X</strong> as instance space.
          </p>

          <div>
            <h5 class="header">Examples</h5>
            <ul>
              <li><strong>Patient information:</strong> Health-related features of patients, including age, BMI, blood pressure, glucose level, insulin level.</li>
              <li><strong>House information:</strong> Characteristics of different houses in San Francisco: location, square meters, number of bedrooms, number of bathrooms, distance to nearest hospital or school, etc.</li>
              <li><strong>Customer reviews:</strong> Dataset of customer reviews for Amazon products. This is an example of unstructured data.</li>
            </ul>
          </div>
        </div>

        <div>
          <h4 class="header">Label set</h4>
          <p>Let <strong>Y</strong> denote our set of possible labels.</p>

          <div>
            <ul>
              <li>If <strong>Y</strong> is categorical, it is called a <strong>classification</strong> task.</li>
              <li>If <strong>Y</strong> is continuous, it is called a <strong>regression</strong> task.</li>
            </ul>
          </div>

          <div>
            <h5 class="header">Examples</h5>
            <ul>
              <li><strong>Diabetes Diagnosis:</strong> The dataset informs whether a patient has diabetes or not.</li>
              <li><strong>House Prices:</strong> Information of house prices in San Francisco.</li>
              <li><strong>Sentiment Report:</strong> This dataset indicates which sentiment can be associated with each customer review: very positive, positive, neutral, negative, very negative.</li>
            </ul>
          </div>
        </div>

        <div>
          <h4 class="header">Training data</h4>
          <p>The sequence of labeled domain points is a finite sequence of pairs in <strong>X × Y</strong>:</p>
          <div v-katex:display="'S = ((x_1, y_1),...,(x_m, y_m))'"></div>

          <div>
            <h5 class="header">Examples</h5>
            <ul>
              <li><strong>Diabetes Diagnosis (binary classification):</strong> We label patient information with whether a patient has diabetes or not.</li>
              <li><strong>House Price Prediction Dataset (regression):</strong> Each house is labeled with a price.</li>
              <li><strong>Sentiment Analysis (classification):</strong> Each review is labeled with a specific sentiment.</li>
            </ul>
          </div>
        </div>

        <div>
          <h4>The learner’s output</h4>
          <p>The learner is requested to output a prediction rule:</p>
          <div v-katex:display="'h : X \\to Y'"></div>
          <p>This function is also called a predictor, a hypothesis, or a classifier. The predictor can be used to predict the label of new domain points. We use the notation <strong>A(S)</strong> to denote the hypothesis that a learning algorithm, <strong>A</strong>, returns upon receiving the training sequence <strong>S</strong>.</p>

          <div>
            <h5 class="header">Examples</h5>
            <ul>
              <li><strong>Linear Models:</strong></li>
              <ul>
                <li>Linear Regression</li>
                <li>Logistic Regression</li>
                <li>Support Vector Machines</li>
              </ul>
              <li>K - Nearest Neighbours</li>
              <li><strong>Probabilistic Models:</strong></li>
              <ul>
                <li>Naive Bayes</li>
                <li>Gaussian Processes</li>
              </ul>
              <li><strong>Tree Based Models:</strong></li>
              <ul>
                <li>Decision Trees</li>
                <li>Random Forest</li>
                <li>Gradient Boosting Machines</li>
              </ul>
              <li><strong>Neural Networks:</strong></li>
              <ul>
                <li>Multi-Layer Perceptron (MLP)</li>
                <li>Convolutional Neural Networks</li>
                <li>Recurrent Neural Networks</li>
              </ul>
            </ul>
          </div>
        </div>

        <div>
          <h4 class="header">Assumptions on ML models</h4>
          <ul>
            <li>We assume an (unknown) underlying distribution of the real world <strong>𝓓</strong></li>
            <li>Independent: All samples <strong>x_i</strong> are unrelated to each other:
              <div v-katex:display="'\\mathbb{P}(x_i\\vert x_j)=\\mathbb{P}(x_i), \\quad \\forall i,j'"></div>
            </li>
          </ul>

          <div>
            <h5 class="header">Methods</h5>
            <ul>
              <li>Observational Data</li>
              <li>Web scraping</li>
              <li>Surveys and Questionnaires</li>
              <li>Simulation</li>
            </ul>
          </div>

          <div>
            <h5 class="header">Generalization error</h5>
            <p>We define the error of a classifier to be the probability that it does not predict the correct label on a random data point generated by the aforementioned underlying distribution. That is,</p>
            <div v-katex:display="'L_{\\mathcal{D}, f}(h)\n\t\t\t\t&=\\mathbb{P}_{x\\sim\\mathcal{D}}[h(x)\\neq f(x)]\\\\\n\t\t\t\t&=\\mathcal{D}(\\lbrace x: h(x)\\neq f(x)\\rbrace)'">
            </div>
            <p>The error <strong><div v-katex="'L_{\\mathcal{D}, f}(h)'"></div></strong> has several synonymous names such as the generalization error, the risk, or the true error of h.</p>
          </div>

          <div>
            <h5 class="header">Empirical risk error</h5>
            <p>Since the learner does not know what D and f are, the true error is not directly available to the learner. A useful notion of error that can be calculated by the learner is the training error – the error the classifier incurs over the training sample</p>
            <div v-katex:display="'L_S(h)=\\frac{| i\\in[m]: h(x_i)\\neq y_i|}{m}'"></div>
            <p>where <strong>m := |S|</strong>. The terms empirical error and empirical risk are often used interchangeably for this error.</p>
          </div>

          <div>
            <h5 class="header">Empirical Risk Minimization</h5>
            <p>Since the training sample is the snapshot of the world that is available to the learner, it makes sense to search for a solution that works well on that data. The learning paradigm - coming up with a predictor <strong>h</strong> that minimizes <strong>L_S(h)</strong> - is called Empirical Risk Minimization or ERM for short.</p>
            <p>If a predictor whose performance on the training set is excellent, yet its performance on the true "world" is very poor, this phenomenon is called overfitting. On the other hand, we would like to find predictors whose performance on the training set is representative of its performance in the real world.</p>
          </div>
        </div>
      </div>
    <div class="images-container">
      <img src="../assets/first_picture.png">
      <img src="../assets/second.png">
    </div>
    <BlogSection />
    </section>
  </div>
</template>

<script>
import BlogSection from '../components/blogsection.vue';

export default {
  name: 'App',
  components: {
    BlogSection,
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.latex {
  font-size: 20px;
  color: blueviolet;
}

.images-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.images-container img {
  max-width: 100%;  /* Adjust this value as needed */
  height: auto;
  margin-bottom: 10px; /* Add some spacing between the images if needed */
}

.header {
  margin-bottom: 10px; /* Add some spacing between the images if needed */
  margin-top: 10px; /* Add some spacing between the images if needed */
}

</style>
