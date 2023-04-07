const upperCaseChecker = (text) => {
    let textArr = text.split("");
    let letters = /^[A-Za-z]+$/;

    for (let i = 0; textArr.length > i; i++) {
        if (textArr[i].match(letters)) {
            if (textArr[i].toUpperCase() === textArr[i]) {
                return textArr[i];
                break;
            } else if (textArr.length - 1 === i) {
                return "No uppercase in the text";
            }
        }
    }
};

let texthere = "there is a storm coming to the Est of the Philippines";

console.log(upperCaseChecker(texthere));
