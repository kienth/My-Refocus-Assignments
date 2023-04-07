// -------------- Start Task 1 ------------------//

let obj = {
    num1: 100,
    num2: 50,
    sum: 150,
    difference: 50,
    product: 500,
    quotient: 20,
};

// -------------- End Task 1 --------------------//

// -------------- Start Task 2 ------------------//

function showData(obj) {
    console.log("=============================");
    console.log(`First Number: ${obj.num1}`);
    console.log(`Second Number: ${obj.num2}`);
    console.log(`The sum is: ${obj.sum}`);
    console.log(`The difference is: ${obj.difference}`);
    console.log(`The product is: ${obj.product}`);
    console.log(`The quotient is: ${obj.quotient}`);
}

// -------------- End Task 2 --------------------//

// -------------- Start Task 3 ------------------//

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// -------------- End Task 3 --------------------//

// -------------- Start Task 4 ------------------//

function newSetOfNumbers(num1, num2) {
    obj.num1 = num1;
    obj.num2 = num2;
    obj.sum = add(num1, num2);
    obj.difference = subtract(num1, num2);
    obj.product = multiply(num1, num2);
    obj.quotient = divide(num1, num2);
}

// -------------- End Task 4 --------------------//

// -------------- Start Task 5 ------------------//

showData(obj);
newSetOfNumbers(200, 10);
showData(obj);
newSetOfNumbers(500, 20);
showData(obj);
