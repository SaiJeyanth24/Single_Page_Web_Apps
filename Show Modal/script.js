'use strict';

const openModalBtn=document.querySelectorAll('.show-modal');
const closeModalBtn=document.querySelector('.close-modal');
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');

function openModalHandler(){
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
}

function closeModalHandler(){
    overlay.classList.add('hidden')
    modal.classList.add('hidden');
}


for(let i=0;i<openModalBtn.length;i++)
    openModalBtn[i].addEventListener('click',openModalHandler);

closeModalBtn.addEventListener('click',closeModalHandler)

overlay.addEventListener('click',closeModalHandler);

