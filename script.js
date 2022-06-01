'use strict';
/* how to use dom
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let guess;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫No number!';

    //Correct guess
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //Guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      score = score - 1;
      console.log((document.querySelector('.score').textContent = score));
      document.querySelector('.message').textContent = 'Too high!';
    } else {
      document.querySelector('.message').textContent = 'Game over!';
      document.querySelector('.score').textContent = '0';
    }
    //Guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      score = score - 1;
      console.log((document.querySelector('.score').textContent = score));
      document.querySelector('.message').textContent = 'Too low!';
    } else {
      document.querySelector('.message').textContent = 'Game over!';
      document.querySelector('.score').textContent = '0';
    }
  }
});

//Implement again button
document.querySelector('.again').addEventListener('click', function () {
  console.clear();
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = '20';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
