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
num_buttons = document.querySelectorAll('.numbutton');
let reseted = false;
num_buttons.forEach((num_button) =>{
    num_button.addEventListener('click', ()=>{
        console.log("checker");
        
        if(equal_sign && reseted == false){
                reset();
                reseted = true;
        }
        if(operator_clicked==false){

            num1 += num_button.textContent;
            console.log('num1');
            console.log(num1);
            display(num1);
        }
        else if(operator_clicked)
        {
            
            num2 += num_button.textContent;
            console.log('num2')
            console.log(num2);
            display(num2);
        }
    });
});

const screen = document.querySelector('#screen');
const ans_display = document.createElement('p');
ans_display.id = 'ans_display';
ans_display.textContent = answer;
console.log(ans_display.textContent);
screen.appendChild(ans_display);

function display(ans)
{
    const curr_display = document.querySelector('#ans_display');
    screen.removeChild(curr_display);
    const ans_display = document.createElement('p');
    ans_display.id = 'ans_display';
    ans_display.textContent = ans;
    screen.appendChild(ans_display);
}
let first_operator=true;
let prev_operator = "";
let equal_sign = false;
operator_buttons = document.querySelectorAll('.operatorbuttons');
operator_buttons.forEach((operator_button) => {
    operator_button.addEventListener('click', () =>
    {
        operator = operator_button.textContent;
        console.log('operator clicked');
        console.log(operator);
        if(first_operator == false)
        {
            if(equal_sign) //equal_sign signifies state of still just =
            {
                prev_operator = operator;
                equal_sign = false;
            }
            else{
                answer = operate(prev_operator, num1, num2);
                reseted = false;
                display(answer);
            }
            if(operator === '=') {equal_sign = true; prev_operator = "";}
            else {prev_operator = operator;}
            num1 = answer;
            num2 = "";
            
        }else{
            first_operator = false;
            operator_clicked = true;
            prev_operator = operator;
        }
    });
});

//reseting


function reset()
{
    answer = 5;
    num1 = "";
    num2 = "";
    first_operator = true;
    operator_clicked = false;
    display(answer);
}
const ac_buttons = document.querySelector('#ac');
ac_buttons.addEventListener('click', reset);

//deciding when to evaluate
