class Employee {
    companyName = "MHA";

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name}.`);
    }

    printSalary() {
        console.log(`${this.name}'s salary is ${this.salary}.`);
    }
}

module.exports = Employee;
