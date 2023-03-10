<template >
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input type="text" placeholder="Search..">
    </header>
    <div class="options-container">
     <div class="card">
      <img src="" alt="">
      <div class="card-text">
        <h2>Math</h2>
        <p>15 questions</p>
      </div>
     </div>
    </div>
  </div>
</template>
<style scoped>
.container{
  max-width: 1000px;
  margin:0 auto;
}
header{
  margin-bottom:10px;
  margin-top:30px;
  display:flex;
  align-items: center;

}
header h1{
  font-weight: bold;
  margin-right:30px;
}
header input{
  border:none;
  background-color: rgba(128,128,128,0.1);
  padding: 10px;
  border-radius:5px;

}
</style>