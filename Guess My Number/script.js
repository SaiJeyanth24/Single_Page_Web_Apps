'use strict';
let targetNumber=generateRandom();
let score=document.querySelector('.score');
const inputValue=document.querySelector('.guess');
const highScore=document.querySelector('.highscore');
const message=document.querySelector('.message');
const againButton=document.querySelector('.again');
const checkButton=document.querySelector('.check');

function generateRandom(){
    return Math.trunc(Math.random()*20+1);
}

function setHighScore(){
    if(highScore.textContent<score.textContent)
        highScore.textContent=score.textContent
}

function ResetGame(){
    score.textContent='20';
    targetNumber=generateRandom();
    inputValue.value=''
    message.textContent="Start guessing..."
}

function checkInputHandler(event){
    console.log(targetNumber);
    if(+inputValue.value===targetNumber){
        console.log('true');
        message.textContent="Congratulations!!! It's correct"
        setHighScore();
    }
    else if(+inputValue.value>targetNumber){
        console.log('lower');
        message.textContent="Lower--"
        score.textContent=(+score.textContent-1).toString();
    }
    else{
    console.log('higher');
    message.textContent="Higher++"
    score.textContent=(+score.textContent-1).toString();
    }
}


checkButton.addEventListener('click',checkInputHandler);
againButton.addEventListener('click',ResetGame);