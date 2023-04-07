const Employee = require("./employee");

class Tester extends Employee {
    constructor(name, salary, specialty) {
        super();
        this.name = name;
        this.salary = salary;
        this.specialty = specialty;
    }

    specialize() {
        let getItem =
            this.specialty.length > 1
                ? this.specialty.join(", ")
                : this.specialty.toString();
        console.log(`I am a Tester specializing in ${getItem}.`);
    }

    worksAt() {
        console.log(`I work at ${this.companyName}`);
    }
}

const izuku = new Tester("Izuku", "$2000", [
    "Say that a code passes",
    "Say that a code is rejected",
]);
izuku.introduce();
izuku.printSalary();
izuku.specialize();
izuku.worksAt();
