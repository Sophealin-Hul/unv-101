var readlineSync = require("readline-sync");
var firstInput = readlineSync.questionInt("Please enter your first number: ");
var secondInput = readlineSync.questionInt("Please enter your second number: ");
var enteredOperation = readlineSync.question("Please enter the operator to perform: add, sub, mul, div ");

function addition(num1, num2){
    return (num1 + num2);
}

function substraction(num1, num2){
    return (num1 - num2);
}

function multiplication(num1, num2){
    return (num1 * num2);
}

function division(num1, num2){
    return (num1 / num2);
}

function calculator(number1, number2, operation){
    if(operation == "add"){
        console.log("The result is : " + addition(number1, number2));
    }else if(operation == "sub"){
        console.log("The result is : " + substraction(number1, number2));
    }else if(operation == "mul"){
        console.log("The result is : " + multiplication(number2, number2));
    }else if( operation == "div"){
        console.log("The result is : " + division(number1, number2));
    }else {
        console.log("Invalid operation. Please try again!");
    }
}
calculator(firstInput, secondInput, enteredOperation);