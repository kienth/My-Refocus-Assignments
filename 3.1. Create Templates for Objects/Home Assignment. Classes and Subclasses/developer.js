const Employee = require("./employee");

class Developer extends Employee {
    constructor(name, salary, specialty) {
        super();
        this.name = name;
        this.salary = salary;
        this.specialty = specialty;
    }

    specialize() {
        console.log(`I am a Web Developer specializing in ${this.specialty}.`);
    }

    worksAt() {
        console.log(`I work at ${this.companyName}`);
    }
}

const izuku = new Developer("Izuku", "$2000", "front end development");
izuku.introduce();
izuku.printSalary();
izuku.specialize();
izuku.worksAt();
