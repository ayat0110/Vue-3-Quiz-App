<script setup>
const {numberOfCorrectAnswers,quizQuestionLength}=defineProps(["quizQuestionLength","numberOfCorrectAnswers"])

</script>

<template>
    <div class="results">
        <p>Your results...</p>
        <h1>
            {{numberOfCorrectAnswers}}/{{ quizQuestionLength }}
        </h1>
        <RouterLink to="/">Go Back</RouterLink>
    </div>
</template>
<style scoped>
.results{
  text-align: center;
  padding: 72px 0;
  background-color: #afb1ff;
  border-radius: 50%;
  margin-top: 2em;
  width: 282px;
  height: 299px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  color: #423030;
}
p{
    font-size: 25px;
}
h1{
    font-size: 80px;
}
a{
    text-decoration: none;
font-weight: bold;
border-bottom: 1px dotted white;
color: #fff;
}
</style>