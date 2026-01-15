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
        return Math.round(divide(num1, num2)*10)/10;
    }
}

//reseting
function reset()
{
    answer = 0;
    num1 = "";
    num2 = "";
    equal_sign = false;
    first_operator = true;
    operator_clicked = false;
    display(answer);
}

function deleting()
{
    const curr_display  = document.querySelector('#ans_display');
    let val = curr_display.textContent;
    if(val.length == 1 || val.length == 0){
        display(0);
        if(curr_standing == 'num1') num1 = "";
        else if(curr_standing == 'num2') num2 = "";
    }else{
        let updated_val = val.slice(0, -1);
        console.log(`updated val: ${updated_val}`);
        console.log(`curr standing: ${curr_standing}`)
        display(updated_val);
        if(curr_standing == 'num1') num1 = updated_val;
        else if(curr_standing == 'num2') num2 = updated_val;

        console.log(`after updating n1: ${num1}`);
        console.log(`after updating n2: ${num2}`);
    }
}

function display(ans)
{
    const curr_display = document.querySelector('#ans_display');
    screen.removeChild(curr_display);
    const ans_display = document.createElement('p');
    ans_display.id = 'ans_display';
    ans_display.textContent = ans;
    screen.appendChild(ans_display);
}

let num1 = "";
let num2 = "";
let operator = "";
let operator_clicked = false;
let answer = 0;
num_buttons = document.querySelectorAll('.numbutton');
let reseted = false;
let double_operator = false;

const screen = document.querySelector('#screen');
const ans_display = document.createElement('p');
ans_display.id = 'ans_display';
ans_display.textContent = answer;
console.log(ans_display.textContent);
screen.appendChild(ans_display);
let curr_standing = ""

let first_operator=true;
let prev_operator = "";
let equal_sign = false;

num_buttons.forEach((num_button) =>{
    num_button.addEventListener('click', ()=>{
        console.log("checker we are in numbers");
        double_operator = false;
        if(equal_sign && reseted == false){
                reset();
                reseted = true;
        }
        

        if(operator_clicked==false){
            curr_standing = "num1"
            num1 += num_button.textContent;
            console.log('num1');
            console.log(num1);
            display(num1);
            
        }
        else if(operator_clicked)
        {
            curr_standing = "num2"
            num2 += num_button.textContent;
            console.log('num2')
            console.log(num2);
            display(num2);
        }
    });
});


operator_buttons = document.querySelectorAll('.operatorbuttons');
operator_buttons.forEach((operator_button) => {
    operator_button.addEventListener('click', () =>
    {   
        
        operator = operator_button.textContent;
        console.log('operator clicked we are in operator');
        console.log(operator);
        console.log(`num1 ${num1}`);
        console.log(`num2 ${num2}`);
        
        if(first_operator == false)
        {   
            if(double_operator){
                prev_operator = operator;
                return;
            }
            if(equal_sign) //equal_sign signifies state of still just =
            {
                prev_operator = operator;
                equal_sign = false;
            }
            else{
                answer = operate(prev_operator, num1, num2);
                reseted = false;
                display(answer);
                num1 = answer;
                num2 = "";
            }
            if(operator === '=') {equal_sign = true; prev_operator = ""; num1 = answer; num2 = ""; curr_standing = "num1"; return;}
            else {prev_operator = operator;}
            
            curr_standing = 'num1';
            
        
        }else{
            console.log('we are in else terittory')
            first_operator = false;
            operator_clicked = true;
            prev_operator = operator;
        }
        
        double_operator = true;
    });
});



const ac_buttons = document.querySelector('#ac');
ac_buttons.addEventListener('click', reset);

const del_button = document.querySelector('#del');
del_button.addEventListener('click', deleting);

//deciding when to evaluate
