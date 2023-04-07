// ------------------------- Task 1. -----------------------//

const bankAccount = {
    bankAccountID: 1,
    accountNumber: 1234,
    credentials: ["test", "123", "123"],
    balance: 100,
    createdAt: "25-12-2022 12:45:00",
};

// ------------------------- Task 2. -----------------------//

const userAccount = {
    bankAccount,
    debitCard: 1234,
    firstName: "Kienth James",
    lastName: "Acenas",
    birthDate: "28-04-1998",
    validID: { type: "passport", id: "123" },
    address: "CDO",
};

// ------------------------- Task 3. -----------------------//

function getBankAccountDetails() {
    return bankAccount;
}

function withdrawMoney(accountNumber, amount) {
    if (accountNumber === bankAccount["accountNumber"]) {
        if (amount > bankAccount["balance"]) {
            return `Failed to withdraw. You only have ${bankAccount["balance"]} balance.`;
        } else {
            bankAccount["balance"] = bankAccount["balance"] - amount;
            return `You successfully withdraw an amount of ${amount}. Your new balance is ${bankAccount["balance"]}.`;
        }
    } else {
        return "Wrong account number";
    }
}

function depositMoney(accountNumber, amount) {
    if (accountNumber === bankAccount["accountNumber"]) {
        bankAccount["balance"] = bankAccount["balance"] + amount;
        return `You successfully deposit an amount of ${amount}. Your new balance is ${bankAccount["balance"]}.`;
    } else {
        return "Wrong account number";
    }
}

function login(username, password, accessFunction) {
    if (
        username === bankAccount["credentials"][0] &&
        password === bankAccount["credentials"][1]
    ) {
        return accessFunction;
    } else {
        return "Wrong Credentials";
    }
}

// Username: test
// Password: 123
// Account Number : 1234

console.log(
    login(
        "test", // Username here
        "123", // Password here
        getBankAccountDetails() // Function name here
    )
); // Task 3.1

console.log(
    login(
        "test", // Username here
        "123", // Password here
        withdrawMoney(
            1234, // Account number
            50 // Amount to withdraw
        ) // Function name here
    )
); // Task 3.2

console.log(
    login(
        "test", // Username here
        "123", // Password here
        depositMoney(
            1234, // Account number
            50 // Amount to deposit
        ) // Function name here
    )
); // Task 3.3
