<script setup>
import Question from "../components/Question.vue"
import Result from "../components/Result.vue"
import QuizHeader from "../components/QuizHeader.vue"
import { useRoute } from 'vue-router';
import { ref, watch, computed } from "vue"
import quizes from "../data/quizes.json"

const route = useRoute()
const quizId = parseInt(route.params.id)
const quiz = quizes.find(q => q.id === quizId)

const currentQuestionIndex = ref(0)
const numberOfCorrectAnswers = ref(0)
const showResults = ref(false)

const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`)

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswers.value++
  }
  if (quiz.questions.length - 1 === currentQuestionIndex.value) {
    showResults.value = true
  }
  currentQuestionIndex.value++
}

const barPercentage = computed(() => `${currentQuestionIndex.value / quiz.questions.length * 100}%`)
</script>

<template>
  <div class="question-container">
    <QuizHeader 
      :questionStatus="questionStatus"
      :barPercentage="barPercentage"
    />
    <div >
      <Question v-if="!showResults" :question="quiz.questions[currentQuestionIndex]" @selectOption="onOptionSelected" />
      <Result v-else :quizQuestionLength="quiz.questions.length" :numberOfCorrectAnswers="numberOfCorrectAnswers" class="results-container" />
    </div>
  </div>
</template>
<style  scoped>
.question-container{
  background-color: white;
width: 500px;
padding: 2em;
margin-top: 2em;
border-radius: 2em;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.results-container{
  display:flex;
  justify-content: center;;
}
</style>
