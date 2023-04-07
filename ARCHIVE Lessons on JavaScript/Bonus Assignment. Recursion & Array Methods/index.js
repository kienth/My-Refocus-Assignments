// ---------- Task 1. -----------//

const arr = [
    "Web Developer",
    "Refocus",
    "Web Developer",
    "Web Developer",
    "Refocus",
    "Awesome",
];

const countItem = () => {
    let countsVariable = {};

    arr.forEach(function (item) {
        countsVariable[item] = (countsVariable[item] || 0) + 1;
    });

    return countsVariable;
};

console.log(countItem());

// ---------- Task 2. -----------//

let invoiceList = ["Invoice 008", "Invoice 007", "Invoice 006", "Invoice 005"];

const insertToBottom = (item) => {
    invoiceList.push(item);

    return invoiceList;
};

const reverseList = () => {
    return invoiceList.reverse();
};

console.log(insertToBottom("Invoice 004"));
console.log(reverseList());
