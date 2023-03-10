<template>
    <div>
        <header>
            <h4>Question 1/3</h4>
            <div class="bar">
                <div class="completion"></div>
            </div>
        </header>
        <div>
            <div class="question-container">
              <h1 class="question">
                What is the chemical value of table salt?
              </h1>  
            </div>
            <div class="options-container">
                <div class="option">
                    <p class="option-label">A
                    </p>
                    <div class="option-value">
                        <p>NaCl</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<style scoped>
header{
    margin-top:20px
}
header h4{
    font-size: 30px;
}
.bar{
    width:300px;
    height:50px;
    border:3px solid #aa7bc3;
    border-radius: 2em;
}
.completion{
    height:100%;
    width:0%;
    background-color: #aa7bc3;
}
.question-container{
    margin-top:20px;
}
.question{
    font-size:40px;
    margin-bottom:20px;
}
</style>