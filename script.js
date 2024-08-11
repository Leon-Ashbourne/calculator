const storeOperand = document.querySelector('.numbers-box');
const storeOperator = document.querySelector('.operand-box');

let variableOne = 0;
let operator = '';
let variableTwo = '';

storeOperand.addEventListener('click', (event)=> {
    if(event.target.className === 'number-box'){
        return;
    }else {
        valueChecker(event.target.value);
    }
})

storeOperator.addEventListener('click', (event)=>{
    if(event.target.className === 'operand-box' || event.target.value === 'undefined'){
        return;
    }else {
        valueChecker(event.target.value);
    }
})

let stringValue = '';

function valueChecker(elementValue){
    // if(!operator && isNaN(Number(elementValue))){
    //     return;
    // }
    if(elementValue === '--'){
        clear();
        return;
    }else if(elementValue === '!-'){
        allClear();
        return;
    }else if(elementValue === '='){
        if(operator === ''){
            return;
        }
        variableTwo = Number(stringValue);
        operationRun(operator);
        return;
    }


    if(!isNaN(Number(elementValue))){
        stringValue += elementValue;
        display();

    }else {

        if(!variableOne){
            variableOne = Number(stringValue);
            stringValue='';
            display();

        }else {
            variableTwo = Number(stringValue);
            stringValue = '';

            switch(operator){
                case '+':
                    operator = elementValue;
                    addition();
                    break;
                case '-':
                    operator = elementValue;
                    subtraction();
                    break;
                case '*':
                    operator = elementValue;
                    multiplication();
                    break;
                case '/':
                    operator = elementValue;
                    division();
                    break;
            }

            operator = elementValue;
            display();
        }
    }
}

function clear(){
    if(stringValue){
        stringValue = stringValue.slice(0,-1);
        display();
    }else if(operator){
        operator = '';
    }else {
        return;
    }
}
const displayBox = document.querySelector('.display-box');

function display(){
    if(operator === '='){
        displayBox.firstElementChild.textContent = variableOne;
        displayBox.lastElementChild.textContent = '0';
        return;
    }
    displayBox.firstElementChild.textContent = variableOne;
    displayBox.lastElementChild.textContent = operator + ' ' + stringValue;

}
let addition = function(){
    variableOne += variableTwo;
    display();
}
let multiplication = function(){
    variableOne *= variableTwo;
    display();
}
let subtraction = function(){
    variableOne -= variableTwo;
    display();
}

let division = function(){
    if(variableTwo === 0){

        display();
        displayBox.firstElementChild.textContent = 'ERROR';
        return;
    }else if(variableTwo === ''){
        console.log(variableTwo)
;        variableTwo = 1;
    }
    variableOne = variableOne/variableTwo ;
    display();
}

function allClear(){
    stringValue = '';
    operator = '';
    variableOne = 0;
    variableTwo = 0;
    displayBox.firstElementChild.textContent = variableOne;
    displayBox.lastElementChild.textContent = '0';

}
function operationRun(value){
    operator = '=';
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
