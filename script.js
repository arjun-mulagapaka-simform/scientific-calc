// memory module
// I/O module
// exception handling module
// calculations(basic):
// -> square
// -> square root
// -> inverse
// -> abs
// -> user input exponentiation
// -> mod
// -> factorial
// -> division
// -> multiplication
// -> subtraction
// -> addition
// -> natural log (with e)
// -> log with base 10


// data structures: stack for inputs, stack for memory module
import {Calculator} from './Calculator.js';
import {IOops} from './IOops.js';
import {Stack} from './Stack.js';

let inp_stack = new Stack();

document.querySelectorAll('.unary-btn').forEach((button)=>{
    button.addEventListener('click',handleUnaryOperation);
});

document.querySelectorAll('.binary-btn').forEach((button)=>{
    button.addEventListener('click',handleBinaryOperation);
});

document.querySelectorAll('.input-manipulator-btn').forEach((button)=>{
    button.addEventListener('click',handleInpManipulationOperation);
});

function handleUnaryOperation(e){
    try {
        let value = IOops.getData();
        let operator = e.currentTarget.dataset.op;
        console.log(value + " " + operator);        
    } catch (error) {
        console.log(error);
    }
}

function handleBinaryOperation(e){
    try {
        let value = IOops.getData();
        let operator = e.currentTarget.dataset.op;
        console.log(value + " " + operator);        
    } catch (error) {
        console.log(error);
    }
}

function handleInpManipulationOperation(e){
    try {
        let value = IOops.getData();
        let operator = e.currentTarget.dataset.op;
        console.log(value + " " + operator);        
    } catch (error) {
        console.log(error);
    }
}