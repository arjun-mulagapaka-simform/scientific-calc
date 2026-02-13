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
let binary_op = null;
let unary_op = false;

document.querySelectorAll('.unary-btn').forEach((button)=>{
    button.addEventListener('click',handleUnaryOperation);
});

document.querySelectorAll('.binary-btn').forEach((button)=>{
    button.addEventListener('click',handleBinaryButton);
});

document.querySelectorAll('.input-manipulator-btn').forEach((button)=>{
    button.addEventListener('click',handleInpManipulationOperation);
});

document.querySelectorAll('.digit-btn').forEach((button)=>{
    button.addEventListener('click',handleDigitOperation);
});

document.querySelector('.result-button').addEventListener('click',handleResultOperation);

function handleUnaryOperation(e){
    let data = handleDataFetch();
    let op = handleOpFetch(e);
    if (data === null || op === null) return;
    unary_op = true;
    let result = unaryActions[op](data);
    IOops.setData(result);
    inp_stack.push(result);
}

function handleBinaryButton(e){
    let data = handleDataFetch();
    let op = handleOpFetch(e);
    if(data === null || op===null) return;
    if (inp_stack.peek() && unary_op==false && binary_op!=null) {
        let result = binaryActions[binary_op](inp_stack.pop(),data);
        if (result === Infinity || result === -Infinity){
            alert ("Result is too large for the previous operation");
            return;
        }
        inp_stack.push(result);
    }else if (!inp_stack.peek() && unary_op==false){
        inp_stack.push(data);
    }
    binary_op = op;
    IOops.setData("");
    unary_op = false;
    inp_stack.display();
}

function handleInpManipulationOperation(e){
    let op = handleOpFetch(e);
    if (op === null) return;
    inputActions[op]();
}

function handleDigitOperation(e){
    try {
        inputActions['append'](e);
    } catch (error) {
        alert(error);
    }
}

function handleResultOperation(){
    if (binary_op === null) return;
    let num1 = inp_stack.pop();
    let num2 = handleDataFetch();
    if(!num1 || num2 === null) return;
    let result = binaryActions[binary_op](num1,num2);
    if (result === Infinity || result === -Infinity){
        alert ("Result is too large");
        return;
    }
    IOops.setData(result);
    inp_stack.push(result);
    binary_op = null;
    inp_stack.display();
}

function handleDataFetch(){
    try {
        let value = IOops.getData();
        return value;       
    } catch (error) {
        alert(error);
        return null;
    }   
}

function handleOpFetch(e){
    try{
        let op = IOops.getDataOp(e);
        return op;
    }catch (error) {
        alert(error);
        return null;
    }
}

const inputActions = {
    clear: () => {
        IOops.clear();
        inp_stack.clear();
    },
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
};

const binaryActions = {
    power: (base,exp) => Calculator.exp(base,exp),
    modulo: (num1,num2) => Calculator.modulo(num1,num2),
    division: (num1,num2) => Calculator.divide(num1,num2),
    multiplication: (num1,num2) => Calculator.multiply(num1,num2),
    subtraction: (num1,num2) => Calculator.subtract(num1,num2),
    addition: (num1,num2) => Calculator.add(num1,num2)
};