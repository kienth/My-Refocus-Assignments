const BMICalculator = (height, weight) => {
    let BMI = weight / height ** 2;

    if (BMI < 18.5) {
        console.log("Your BMI falls within the underweight range");
    } else if (BMI > 18.5 && BMI < 24.9) {
        console.log("Your BMI falls within the normal or healthy weight range");
    } else if (BMI > 25 && BMI < 29.9) {
        console.log("Your BMI falls within the overweight range");
    } else {
        console.log("Your BMI falls within the obese range");
    }

    return BMI;
};

BMICalculator(60, 150);
