const storeOperand = document.querySelector('.numbers-box');
const storeOperator = document.querySelector('.operand-box');

let valueOne = '';
let valueTwo = '';
let operationValue = '';
let solution = null;

storeOperand.addEventListener('click', (event)=>{
    if(event.target.className === 'number-box'){
        return;
    }else {
        valueChecker(event.target);
    }
})

storeOperator.addEventListener('click', (event)=>{
    if(event.target.className === 'operand-box'){
        return;
    }else {
        valueChecker(event.target);
    }
})

let stringValue = '';

function valueChecker(targetElement){
    let targetValue = targetElement.value;
    if(!isNaN(Number(targetValue))){
        stringValue += targetValue;
    }else {
        if(!valueTwo){
            valueTwo = stringValue;
            display();
        }else {
            valueOne = stringValue;
            display();
        }
        if(!operationValue){
            operationValue = targetValue;
        }else {
            switch(operationValue){
                case '+':
                    addition();
                    operationValue = targetValue;
                    break;
                case '-':
                    subtraction();
                    operationValue = targetValue;
                    break;
                case '*':
                    multiplication();
                    operationValue = targetValue;
                    break;
                case '/':
                    division();
                    operationValue = targetValue;
                    break;
                case '=':
                    operationRun(targetValue);
                    break;
            }
        }
    }
}
const displayBox = document.querySelector('.display-box');
function display(){
    if(!solution){
        displayBox.lastElementChild.textcontent = solution;
    }else {
        displayBox.firstElementChild.textContent = valueOne;
    }
}
let addition = function(){
    let variableOne = Number(valueOne);
    let variableTwo = Number(valueTwo);
    if(!isNaN(Number(solution))){
        solution = variableOne + variableTwo;
    }else {
        solution += variableOne;
    }
}
let multiplication = function(){
    let variableOne = Number(valueOne);
    let variableTwo = Number(valueTwo);
    if(!isNaN(Number(solution))){
        solution = variableOne + variableTwo;
    }else {
        solution *= variableOne;
    }
}
let subtraction = function(){
    let variableOne = Number(valueOne);
    let variableTwo = Number(valueTwo);
    if(!isNan(Number(solution))){
        solution = variableOne + variableTwo;
    }else {
        solution -= variableOne;
    }
}
let division = function(){
    let variableOne = Number(valueOne);
    let variableTwo = Number(valueTwo);
    if(!isNan(Number(solution))){
        solution = variableOne + variableTwo;
    }else {
        solution /= variableOne;
    }
}

function operationRun(value){
    switch(value){
        case '+':
            addition();
            break;
        case '-':
            subtraction();
            break;
        case '*':
            multiplication();
            break;
        case '/':
            division();
            break;
    }
}
