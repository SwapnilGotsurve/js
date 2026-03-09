class Employee{
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    salary(base){
        console.log(`Salary of employee ${this.name} with ID ${this.id} is ${base}.`);
    }
}

class Manager extends Employee{
    constructor(name, id, department) {
        super(name, id);
        this.department = department;
    }
    salary(base,bonus){
        const totalSalary = base + bonus;
        console.log(`Salary of manager ${this.name} with ID ${this.id} in department ${this.department} is ${totalSalary}.`);
    }
}

let emp1 = new Employee("Alice", 101);
emp1.salary(50000);