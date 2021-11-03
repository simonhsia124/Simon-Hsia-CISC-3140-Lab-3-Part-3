/* 
CISC 3140 Lab 3 Part 3
Simon Hsia
Professor Chuang

*/

function simpleCalculator() {
    // program for a simple calculator
let result; //stores result for each operation

// take the operator input
//Asks user whether they want to add,subtract divide or multiply
const operator = prompt('Enter operator ( either add, subtract, multiply or divide ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: ')); //Holds users input for first number
const number2 = parseFloat(prompt('Enter second number: ')); //holds users input for second number

switch(operator) {
    //Case for adding two numbers
    case 'add':
         result = number1 + number2;
        alert(`${number1} + ${number2} = ${result}`);
        break;
 //Case for subtracting two numbers
    case 'subtract':
         result = number1 - number2;
        alert(`${number1} - ${number2} = ${result}`);
        break;
 //Case for multiplying two numbers
    case 'multiply':
         result = number1 * number2;
         alert(`${number1} * ${number2} = ${result}`);
        break;
//Case for dividing two numbers
    case 'divide':
         result = number1 / number2;
         alert(`${number1} / ${number2} = ${result}`);
        break;
//Case where if none of the proper operators used throws an invalid operator message
    default:
        alert('Invalid operator');
        break;
}
}
