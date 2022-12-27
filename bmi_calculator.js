const BMICalculator = (height, weight) => {
    let getHeight = Math.pow(height / 100, 2);
    let BMI = (weight / getHeight).toFixed(1);

    console.log(BMI);

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

const testBMICalculator = () => {
    const result = BMICalculator(175, 45);
    const expect = "Your BMI falls within the underweight range";

    console.log(
        result == expect ? "The result match" : "The result does not match"
    );
};

// console.log(BMICalculator(175, 45));
testBMICalculator();
