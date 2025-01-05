'use strict';
let targetNumber=generateRandom();
let score=document.querySelector('.score');
const inputValue=document.querySelector('.guess');
const highScore=document.querySelector('.highscore');
const message=document.querySelector('.message');
const againButton=document.querySelector('.again');
const checkButton=document.querySelector('.check');
const body=document.querySelector('body');

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
    body.style.backgroundColor='#222'
    inputValue.disabled=false
    checkButton.disabled=false;
}

function checkInputHandler(event){
    console.log(targetNumber);
    if(+inputValue.value===targetNumber){
        message.textContent="It's correct 🎉"
        inputValue.disabled=true;
        checkButton.disabled=true;
        body.style.backgroundColor='#45f248';
        setHighScore();
        
    }
    else{
        if(+inputValue.value>targetNumber){
            message.textContent="Lower 🔽"
            score.textContent=(+score.textContent-1).toString();
        }
        else{
            message.textContent="Higher 🔼"
            score.textContent=(+score.textContent-1).toString();
        }
        if(+score.textContent===0){
            message.textContent="Game ended 🤯"
            inputValue.disabled=true;
            checkButton.disabled=true;
            body.style.backgroundColor='#ff0f0f';
        }
    }
}


checkButton.addEventListener('click',checkInputHandler);
againButton.addEventListener('click',ResetGame);