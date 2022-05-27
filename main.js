let numberArr = document.querySelectorAll('.number');
let operationArr = document.querySelectorAll('.operation')
let equalBTN = document.querySelector('#equal')
let clearBTN = document.querySelector('#clear')
let display = document.querySelector('#display')


let num1 = ''; //stores first number 
let num2 = ''; //stores second number
let solution = ''; //stores solution after equal button is hit
let nextOperation = ''; //stores operation sign
let havedot = false;

// BUGS TO FIX
//=============================================================
// - You can have two decimals 
// - hitting operation sign two times in a row creates an error
// - You Can add unlimited Numbers
// - You can type numbers right after hitting the numbers


// function to listen for numbers
for (let num of numberArr){
    num.addEventListener('click', function (event){
        // checks to see if first number and next operation exist (not blank), then determines where to store user input
        if(num1 && nextOperation && !num2){
            display.innerText = '';
            havedot = true;
            num2 += event.target.innerText;
            display.innerText += event.target.innerText;
        } else if(num1 && nextOperation){
            num2 += event.target.innerText;
            display.innerText += event.target.innerText;
        } else {
            num1 += event.target.innerText;
            display.innerText += event.target.innerText;
        }
    }) 
}

// function to listen for operations
for (let operation of operationArr){
    operation.addEventListener('click', function (event){
        if(num1 && !nextOperation){
            nextOperation = event.target.innerText;
            display.innerText = '';
        } else {
            calculation();
            num1 = solution.toString();
            num2 = '';
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
    } 
})

// function to perform calculations
function calculation(){
    if(nextOperation === 'X'){
        solution = (parseFloat(num1) * parseFloat(num2));   
        display.innerText = solution;
        console.log(solution)
    } else if(nextOperation === '/'){
        solution = (parseFloat(num1) / parseFloat(num2));
        display.innerText = solution;
    } else if(nextOperation === '+'){
        solution = (parseFloat(num1) + parseFloat(num2));
        display.innerText = solution;
    } else if(nextOperation === '-'){
        solution = (parseFloat(num1) - parseFloat(num2));
        display.innerText = solution;
    }
}

