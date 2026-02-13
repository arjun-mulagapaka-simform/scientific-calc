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

document.querySelectorAll('.digit-btn').forEach((button)=>{
    button.addEventListener('click',handleDigitOperation);
});

function handleUnaryOperation(e){
    let data = handleDataFetch(e);
    let op = handleOpFetch(e);
    if (Number.isNaN(data) || !op) return;
    let result = unaryActions[op](data);
    IOops.setData(result);
}

function handleBinaryOperation(e){
    handleDataFetch(e);
}

function handleInpManipulationOperation(e){
    let op = handleOpFetch(e);
    if (!op) return;
    inputActions[op]();
}

function handleDigitOperation(e){
    inputActions['append'](e);
}

function handleDataFetch(){
    try {
        let value = IOops.getData();
        return value;       
    } catch (error) {
        alert(error);
    }   
}

function handleOpFetch(e){
    try{
        let op = IOops.getDataOp(e);
        return op;
    }catch (error) {
        alert(error);
    }
}

const inputActions = {
    clear: () => IOops.clear(),
    removelastchar: () => IOops.pop(),
    togglesign: () => IOops.toggleSign(),
    append: (e) => IOops.append(e),
    decimal: () => IOops.addDecimal()
};

const unaryActions = {
    square: (val) => Calculator.square(val),
    inverse: (val) => Calculator.inverse(val),
    absolute: (val) => Calculator.abs(val),
    squareroot: (val) => Calculator.sqrt(val),
    factorial: (val) => Calculator.factorial(val),
    powertoten: (val) => Calculator.exp(10,val),
    log: (val) => Calculator.log(val),
    naturallog: (val) => Calculator.ln(val)
}