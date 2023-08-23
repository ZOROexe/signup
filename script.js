'use strict';

const emailInput = document.getElementById('email');
const main = document.querySelector('.main');
const success = document.querySelector('.success');
let text = document.querySelector('.entmail');

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

document.querySelector('.buton').addEventListener('click', function (e) {
  e.preventDefault();
  if (!isValidEmail(emailInput.value)) {
    document.querySelector('.valid').style.display = 'block';
    document.getElementById('email').style.border = '1px solid var(--tomato)';
    document.getElementById('email').style.backgroundColor = 'var(--tomato2)';
  } else {
    main.classList.add('hidden');
    success.classList.remove('hidden');
    text.textContent = emailInput.value;
  }
});

document.querySelector('.dismiss').addEventListener('click', function (e) {
  e.preventDefault();
  success.classList.add('hidden');
  main.classList.remove('hidden');
});
