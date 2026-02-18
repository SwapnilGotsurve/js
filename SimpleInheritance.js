class Parent{
    constructor(name){
        this.name = name;
    }
    sayHello(){
        console.log(`Hello, I am ${this.name}`);
    }
}
class Child extends Parent{
    constructor(name, age){
        super(name);
        this.age = age;
    }   
    sayHello(){
        super.sayHello();
        console.log(`I am ${this.age} years old`);
    }
}
let parent = new Parent("John");
parent.sayHello();
// Output: Hello, I am John
let child = new Child("Alice", 10);
child.sayHello();
// Output:
// Hello, I am Alice
// I am 10 years old