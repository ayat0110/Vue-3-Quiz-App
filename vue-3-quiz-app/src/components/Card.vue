<script setup>
import {defineProps} from "vue"
const {quiz} = defineProps(['quiz']);

</script>
<template>
    <div>
         <div class="card">
      <img :src="quiz.img" alt="">
      <div class="card-text">
        <h2>{{quiz.name}}</h2>
        <p>{{quiz.questions.length}} questions</p>
      </div>
     </div>
    </div>
</template>
<style scoped>
.card{
  width: 310px;
  overflow: hidden;
  border-radius:2%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-bottom:35px ;
  margin-right: 20px;
  cursor:pointer;
  padding: 2em;
  background-color: #f6e5ff;
 color: #9984d4;
}

.card img{
 width:100%;
  height:190px;
  margin:0;
  border-radius:15px;
}
.card .card-text{
  padding:0 5px;
}
.card .card-text h2{
  font-weight: bold;
  border-bottom: 0.5px solid gray;
}
</style>