const myFunctions = require("./bmi_calculator");

test("Check if height 175 and weight 45 is 'Your BMI falls within the underweight range'", () => {
    expect(myFunctions(175, 45)).toBe(
        "Your BMI falls within the underweight range"
    );
});
