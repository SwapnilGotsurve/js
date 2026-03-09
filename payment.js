class Payment{
constructor(amount){
    this.amount = amount;   
}
}
class CreditCardPayment extends Payment{
    pay(amt){
        if(amt < this.amount){
        this.amount -= amt;
        console.log(`Payment of ${amt} made. Remaining balance: ${this.amount}`);
    }
}
}
class UPI extends Payment{
    pay(amt){
        if(amt < this.amount){
        this.amount -= amt;
        console.log(`Payment of ${amt} made via UPI. Remaining balance: ${this.amount}`);
    }
}
}

let c1 = new CreditCardPayment(1000);
c1.pay(100);

let u1 = new UPI(500);
u1.pay(200);