//functions

function add(num1, num2)
{
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2)
{
    return num1-num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num1/num2;
}

function operate(operator, num1, num2)
{
    if(operator === '+'){
        return add(num1, num2);
    }
    else if(operator === '-'){
        return subtract(num1, num2);
    }
    else if(operator === '*'){
        return multiply(num1, num2);
    }
    else if(operator === '/'){
        return divide(num1, num2);
    }
}


let num1 = "";
let num2 = "";
let operator = "";
let operator_clicked = false;
let answer = 0;
num_buttons = document.querySelectorAll('.numbuttons');
num_buttons.forEach((num_button) =>{
    num_button.addEventListener('click', ()=>{
        if(operator_clicked==false){
        num1 += num_button.value;}
        else if(operator_clicked)
        {
            num2 += num_button.value;
        }
    });
});

operator_buttons = document.querySelectorAll('.operatorbuttons');
operator_buttons.forEach((operator_button) => {
    operator_button.addEventListener('click', () =>
    {
        operator = operator_button.value;
    });
});

//reseting
const screen = document.querySelector('#screen');
const ans_display = document.createElement('p');
ans_display.id = 'ans_display';
ans_display.textContent = answer;
screen.appendChild(ans_display);

function display(answer)
{
    screen.removeChild(ans_display);
    const ans_display = document.createElement('p');
    ans_display.id = 'ans_display';
    ans_display.textContent = answer;
    screen.appendChild(ans_display);
}

function reset()
{
    ans = 0;
    num1 = "";
    num2 = "";
}
const ac_button = document.querySelector('.ac');
ac_button.addEventListener('click', reset);

//deciding when to evaluate
