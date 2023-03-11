<script setup>
import Card from "../components/Card.vue"
import q from "../data/quizes"

import {ref, watch} from "vue"

const quizes= ref(q)
const search= ref("")

watch(search, () =>{
  quizes.value= q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))

})
</script>

<template >
  <div>
    <header>
      <h1>Fun Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search..">
    </header>
    <div class="options-container">
   <Card  v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
    </div>
  </div>
</template>
<style scoped>


  @import url('https://fonts.googleapis.com/css2?family=Rubik+Iso&display=swap');

header{
  margin-bottom:10px;
  margin-top:30px;
  display:flex;
  align-items: center;

}
header h1{
  color: #592e83;
  margin-right:30px;
  font-family: 'Rubik Iso', cursive;
}
header input{
  border: none;
background-color: rgb(215, 209, 253);
padding: 10px;
border-radius: 5px;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
width: 300px;
height: 40px;

}
.options-container{
  display:flex;
  flex-wrap: wrap;
  margin-top:40px;
}

</style>