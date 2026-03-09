class Account{
    constructor(balance){
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
    }
}

class SavingsAccount extends Account{
    constructor(balance, interestRate){
        super(balance);
        this.interestRate = interestRate;
    }   
    addInterest(){
        this.balance += this.balance * this.interestRate;
        console.log(`Interest added. New balance: ${this.balance}`);    
    }
}

let myAccount = new SavingsAccount(1000, 1);

console.log(myAccount.balance); 
myAccount.addInterest();
myAccount.deposit(500);
console.log(myAccount.balance);