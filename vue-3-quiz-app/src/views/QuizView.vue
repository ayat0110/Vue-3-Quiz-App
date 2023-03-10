<script setup>
import Question from "../components/Question.vue"
import QuizHeader from "../components/QuizHeader.vue"
import {useRoute} from "vue-router"
import {ref} from "vue"
import quizes from "../data/quizes.json"
const route= useRoute()
const quiz= quizes.find(q => q.id === quizId)
const quizId= parseInt(route.params.id)
const currentQuestionInex = ref(0);
</script>
<template>
    <div>
        <QuizHeader />
        <div>
           <Question />
        </div>
    </div>
</template>
