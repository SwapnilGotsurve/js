class Bank {
    constructor(name) {
        this.name = name;  
     }
     displayBname(){
        console.log("Name of bank = "+ this.name);
     }
        
     }
    class Employee extends Bank{
        display(){
            console.log("employee working in "+ this.name);
            
        }
    }

let e1 = new Employee("HDFC")

e1.display()
e1.displayBname()