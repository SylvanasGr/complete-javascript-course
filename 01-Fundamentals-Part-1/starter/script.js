'use strict';


//generate a random number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// 20 try's
let score = 20;
let highscore = 0;

const displayMessage = function (message){
 document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click',function(){
const guess =  Number(document.querySelector('.guess').value);
console.log(guess,typeof guess);

//When there is no input
if (guess > 21 || guess < 1) {
 displayMessage(' Number Between 1 & 20 🤦‍♂️🤦‍♂️🤦‍♂️ ');
 
 // when players win
} else if (guess === secretNumber){
 displayMessage('Whoooraaah You are a Ninja 🐱‍👤 🐱‍🚀🐱‍👓🐱‍💻👏👍👍');
 document.querySelector('.number').textContent = secretNumber;
 
 document.querySelector('body').style.backgroundColor = '#60b347';

 document.querySelector('.number').style.width ='30rem';
 if (score > highscore ) {
  highscore = score;
  document.querySelector('.highscore').textContent=highscore;
 }
 // when guess is wrong
}else if (guess!== secretNumber){
 if (score >1) {
   displayMessage(guess < secretNumber ?`You need to guess higher than ${guess} 🤷‍♂️ ` : `You need to guess lower than ${guess} 👇👇 `);
  score--;
  document.querySelector('.score').textContent = score
 }else{
  displayMessage(`You lost the game! 😭😭😭😰 `)
  document.querySelector('.score').textContent = 0;
 }
}

});

// again - reset the score,background etc...
document.querySelector('.again').addEventListener('click',function(){
 
 const guess =  document.querySelector('.guess').value='';
 console.log(guess,typeof guess);
 document.querySelector('.score').textContent = 20;
 displayMessage('Start guessing...');
 document.querySelector('body').style.backgroundColor  ='#222';
 document.querySelector('.number').style.width  ='15rem';
document.querySelector('.number').textContent = '?';

});