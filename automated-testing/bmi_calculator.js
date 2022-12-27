const BMICalculator = (height, weight) => {
    let getHeight = Math.pow(height / 100, 2);
    let BMI = (weight / getHeight).toFixed(1);

    if (BMI < 18.5) {
        return "Your BMI falls within the underweight range";
    } else if (BMI > 18.5 && BMI < 24.9) {
        return "Your BMI falls within the normal or healthy weight range";
    } else if (BMI > 25 && BMI < 29.9) {
        return "Your BMI falls within the overweight range";
    } else {
        return "Your BMI falls within the obese range";
    }
};

module.exports = BMICalculator;
