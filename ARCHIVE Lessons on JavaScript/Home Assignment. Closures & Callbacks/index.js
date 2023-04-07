// ------------------------- Task 1. -----------------------//

function bank() {
    let balance = 100;

    function checkBalance() {
        return `Your current balance is ${balance}.`;
    }

    function depositAmount(amount) {
        balance = balance + amount;

        return `You deposit amount of ${amount}. Your new balance is ${balance}.`;
    }

    function withdrawAmount(amount) {
        if (amount > balance) {
            return `Failed to withdraw. You only have ${balance} balance.`;
        } else {
            balance = balance - amount;

            return `You withdraw amount of ${amount}. Your new balance is ${balance}.`;
        }
    }

    return { checkBalance, depositAmount, withdrawAmount };
}

const bankApp = bank();

console.log("----- Start Task 1. -----");

console.log(bankApp.checkBalance());
console.log("---- END ----");

console.log(bankApp.withdrawAmount(150));
console.log("---- END ----");

console.log(bankApp.depositAmount(100));
console.log(bankApp.withdrawAmount(150));
console.log("---- END ----");

console.log(bankApp.checkBalance());
console.log("---- END ----");

console.log("----- End Task 1. -----");

// ------------------------- Task 2. -----------------------//

let task2balance = 100;

function checkBalance() {
    return `Your current balance is ${task2balance}.`;
}

function depositAmount(amount) {
    task2balance = task2balance + amount;

    return `You deposit amount of ${amount}. Your new balance is ${task2balance}.`;
}

function withdrawAmount(amount) {
    if (amount > task2balance) {
        return `Failed to withdraw. You only have ${task2balance} balance.`;
    } else {
        task2balance = task2balance - amount;

        return `You withdraw amount of ${amount}. Your new balance is ${task2balance}.`;
    }
}

console.log("----- Start Task 2. -----");

console.log(checkBalance());
console.log("---- END ----");

console.log(withdrawAmount(150));
console.log("---- END ----");

console.log(depositAmount(100));
console.log(withdrawAmount(150));
console.log("---- END ----");

console.log(checkBalance());
console.log("---- END ----");

console.log("----- End Task 2. -----");
