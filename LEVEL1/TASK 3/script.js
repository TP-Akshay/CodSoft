// script.js

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    
    let currentInput = '';
    let previousInput = '';
    let operator = null;
    const maxDigits=10;
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const buttonText = button.innerText;
  
        if (button.classList.contains('number') || button.id === 'decimal') {
          if (buttonText === '.' && currentInput.includes('.')) return;
          currentInput += buttonText;
          display.innerText = currentInput;
        } else if (button.id === 'clear') {
          currentInput = '';
          previousInput = '';
          operator = null;
          display.innerText = '';
        } else if (button.classList.contains('equal')) {
          if (currentInput === '' || previousInput === '' || operator === null) return;
          currentInput = String(calculate(parseFloat(previousInput), parseFloat(currentInput), operator));
          display.innerText = currentInput;
          previousInput = '';
          operator = null;
        } else {
          if (currentInput === '') return;
          if (previousInput !== '') {
            previousInput = String(calculate(parseFloat(previousInput), parseFloat(currentInput), operator));
          } else {
            previousInput = currentInput;
          }
          currentInput = '';
          operator = buttonText;
        }
      });
    });
  
    function calculate(num1, num2, operator) {
      switch (operator) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          return num1 / num2;
        case '^2':
          return num1 * num1;
        default:
          return num2;
      }
    }
  });
  