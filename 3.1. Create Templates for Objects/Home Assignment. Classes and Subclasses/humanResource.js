const Employee = require("./employee");

class HumanResource extends Employee {
    constructor(name, salary, specialty) {
        super();
        this.name = name;
        this.salary = salary;
        this.specialty = specialty;
    }

    specialize() {
        console.log(`I am a Human Resource specializing in ${this.specialty}.`);
    }

    worksAt() {
        console.log(`I work at ${this.companyName}`);
    }
}

const izuku = new HumanResource("Izuku", "$2000", "Hire an employee");
izuku.introduce();
izuku.printSalary();
izuku.specialize();
izuku.worksAt();
