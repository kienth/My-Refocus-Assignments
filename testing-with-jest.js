function calculator(a, b) {
    function sum() {
        return a + b;
    }

    function minus() {
        return a - b;
    }

    return {
        sum,
        minus,
    };
}

console.log(calculator(1, 2).sum());
console.log(calculator(1, 2).minus());
