// ---------------------------------- Task 1. ------------------------------- //

function convertCelsiusToKelvin(temp) {
    let tempKelvin = temp + 273.15;
    return tempKelvin;
}

function convertFahrenheittoKelvin(temp) {
    let tempKelvin = ((temp - 32) * 5) / 9 + 273.15;
    return tempKelvin;
}

console.log(convertCelsiusToKelvin(80));
console.log(convertFahrenheittoKelvin(80));

// ---------------------------------- Task 2. ------------------------------- //

function computeTip(totalBill) {
    let totalTip = totalBill * 0.1;
    return totalTip;
}

console.log(computeTip(100));
