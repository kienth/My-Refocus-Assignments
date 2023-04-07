const Employee = require("./employee");

class Marketer extends Employee {
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
        console.log(`I am a Marketer specializing in ${getItem}.`);
    }

    worksAt() {
        console.log(`I work at ${this.companyName}`);
    }
}

const izuku = new Marketer("Izuku", "$2000", [
    "Promote the company they work at",
    "Show products to customers",
]);
izuku.introduce();
izuku.printSalary();
izuku.specialize();
izuku.worksAt();
