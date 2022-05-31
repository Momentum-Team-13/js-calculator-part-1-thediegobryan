let numberArr = document.querySelectorAll('.number');
let operationArr = document.querySelectorAll('.operation')
let equalBTN = document.querySelector('#equal')
let clearBTN = document.querySelector('#clear')
let display = document.querySelector('#display')
let plusMinus = document.querySelector('#plusMinus')
let button = document.querySelectorAll('.button');

let num1 = ''; //stores first number 
let num2 = ''; //stores second number
let solution = ''; //stores solution after equal button is hit
let nextOperation = ''; //stores operation sign


// function to listen for numbers
for (let num of numberArr){
    num.addEventListener('click', function (event){

        // checks to see if first number and next operation exist (not blank), then determines where to store user input
        if(num1 && nextOperation && !num2){
            //determines how to process the decimal
            if(event.target.innerText === '.'){
                num1 += '0'
            }

            display.innerText = '';
            num2 += event.target.innerText;
            display.innerText = num2;
        } else if(num1 && nextOperation){
            //determines how to process the decimal
            if(event.target.innerText === '.' && num2.includes('.') === true){
                return
            }
            //prevents user from inputting a number that is too long
            if(num2.length >= 9){
                return
            }
            
            num2 += event.target.innerText;
            display.innerText = num2;
        } else if (num1 === solution.toString()){
            num1 = '';
            //determines how to process the decimal
            if(event.target.innerText === '.'){
                if(num1.includes('.') === true){
                    return
                } else if(num1 === ''){
                    console.log('hello')
                    num1 += '0';
                }
            }

            num1 += event.target.innerText
            display.innerText = num1;
        }else {
            //determines how to process the decimal
            if(event.target.innerText === '.'){
                if(num1.includes('.') === true){
                    return
                } else if(num1 === ''){
                    num1 += '0';
                }
            }
            //prevents user from inputting a number that is too long
            if(num1.length >= 9){
                return
            }
            num1 += event.target.innerText;
            display.innerText = num1;
        }
    }) 
}

// function to listen for operations
for (let operation of operationArr){
    operation.addEventListener('click', function (event){

        if(num1 && nextOperation && num2){
            calculation();
            num1 = solution.toString();
            num2 = '';
            nextOperation = event.target.innerText;
        } else if (num1){
            nextOperation = event.target.innerText;
        }
    }) 
}

// Listens for clear button to be pressed and resets everything
clearBTN.addEventListener('click' , function(event){
    display.innerText = '';
    num1 = ''; 
    num2 = ''; 
    solution = ''; 
    nextOperation = ''; 
})

//listens for equal sign to be hit;
equalBTN.addEventListener('click', function(event){
    if(num1 && num2){
        calculation();
        num1 = solution.toString();
        num2 = '';
        nextOperation = '';
    } 
})

//listens to plusMinus
plusMinus.addEventListener('click', function(event){
    if(num1 && nextOperation){
        if(num2.includes('+/-') === true){
            num2 = num2.slice(1);
            display.innerText = num2;
        } else {
            num2 = '-' + num2;
            display.innerText = num2;
        }
    } else {
        if(num1.includes('-') === true){
            console.log('includes negative')
            num1 = num1.slice(1);
            display.innerText = num1;
        } else {
            console.log('hello world')
            num1 = '-' + num1;
            display.innerText = num1;
        }
    }
})

// function to perform calculations
function calculation(){
    if(nextOperation === 'X'){
        solution = (parseFloat(num1) * parseFloat(num2));   
        display.innerText = solution;
    } else if(nextOperation === '/'){
        solution = (parseFloat(num1) / parseFloat(num2));
        display.innerText = solution;
    } else if(nextOperation === '+'){
        solution = (parseFloat(num1) + parseFloat(num2));
        display.innerText = solution;
    } else if(nextOperation === '-'){
        solution = (parseFloat(num1) - parseFloat(num2));
        display.innerText = solution;
    } else if(nextOperation === '%'){
        solution = (parseFloat(num1) % parseFloat(num2));
        display.innerText = solution;
    }
}

//listens for keyboard input

window.addEventListener('keydown', (e)=>{
    if(
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' || 
        e.key === '3' || 
        e.key === '4' || 
        e.key === '5' || 
        e.key === '6' || 
        e.key === '7' || 
        e.key === '8' ||
        e.key === '9' || 
        e.key === '.'    
    ){
        clickButton(e.key);
    } else if (
        e.key === '/' ||
        e.key === '%' ||
        e.key === '-' ||
        e.key === '+' 
    ){
        clickOperation(e.key);
    } else if(e.key === '*'){
        clickOperation('X');
    } else if(e.key == 'Enter' || e.key === '='){
        clickEqual();
    }
});

function clickButton(key){
    numberArr.forEach( button => {
        if (button.innerText === key){
            button.click();
        };
    })
};

function clickOperation (key){
    operationArr.forEach(button => {
        if (button.innerText === key){
            button.click();
        }
    })
};

function clickEqual(){
    equalBTN.click();
};