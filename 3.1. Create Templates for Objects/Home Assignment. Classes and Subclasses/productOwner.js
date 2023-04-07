const Employee = require("./employee");

class ProductOwner extends Employee {
    constructor(name, salary) {
        super();
        this.name = name;
        this.salary = salary;
        this.specialty = [];
    }

    specialize() {
        let getItem =
            this.specialty.length > 1
                ? this.specialty.join(", ")
                : this.specialty.toString();
        console.log(`I am a Tester specializing in ${getItem}.`);
    }

    addProject(add) {
        this.specialty.push(add);
    }

    worksAt() {
        console.log(`I work at ${this.companyName}`);
    }
}

const izuku = new ProductOwner("Izuku", "$2000", ["Create new projects"]);
izuku.introduce();
izuku.printSalary();
izuku.addProject("Create new projects");
izuku.specialize();
izuku.worksAt();
