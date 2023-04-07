const Employee = require("./employee");

class TeamLead extends Employee {
    constructor(name, salary, specialty) {
        super();
        this.name = name;
        this.salary = salary;
        this.specialty = specialty;
    }

    specialize() {
        console.log(`I am a Team Lead specializing in ${this.specialty}.`);
    }

    worksAt() {
        console.log(`I work at ${this.companyName}`);
    }
}

const izuku = new TeamLead(
    "Izuku",
    "$2000",
    "Give instructions to other employees"
);
izuku.introduce();
izuku.printSalary();
izuku.specialize();
izuku.worksAt();
