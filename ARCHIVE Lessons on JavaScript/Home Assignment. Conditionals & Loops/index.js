// ------------------------------- Task 1. ------------------------------ //

var saturation = 91;

function oximeter(saturation) {
    if (saturation > 95) {
        console.log("Normal reading.");
    } else if (saturation == 95) {
        console.log("Acceptable to continue home monitoring.");
    } else if (saturation >= 92 && saturation < 95) {
        console.log("Seek advice from health professionals.");
    } else if (saturation < 92) {
        console.log("Seek urgent medical advice");
    } else {
        console.log("The value of the saturation variable is not numerical");
    }
}

oximeter(saturation);

// ------------------------------- Task 2. ------------------------------ //

var beat = 131;
function oximeterReader(beat) {
    if (beat >= 40 && beat <= 100) {
        console.log("Normal reading.");
    } else if (beat >= 101 && beat <= 109) {
        console.log("Acceptable to continue home monitoring");
    } else if (beat >= 110 && beat <= 130) {
        console.log("Acceptable to continue home monitoring");
    } else if (beat >= 131) {
        console.log("Seek urgent medical advice.");
    } else {
        console.log("Below 40");
    }
}

oximeterReader(beat);
