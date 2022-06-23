function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function divide(a,b){
    return a / b;
}
function multiply(a,b){
    return a * b;
}
function modulus(a,b){
    return a % b;
}

function askUser(){
    let first = prompt("Enter first number");
    let second = prompt("Enter second number");
    let operator = prompt("Choose operator");
    let result = 0;
    if (operator == "+"){
        result= add(first,second);
    }
    else if(operator == "-"){
        result= subtract(first,second);
    }
    else if (operator == "*"){
        result= multiply(first,second);
    }
    else if (operator == "/"){
        result= divide(first,second);
    }
    else if (operator == "%"){
        result= modulus(first,second);
    }
    else{
        alert("Please enter a valid operator");
    }
    alert(result);
}
askUser();