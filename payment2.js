class Payment{
    pay(){
        console.log("Payment made");
    }
}
class CreditCardPayment extends Payment{
    pay(){
        console.log("Payment made using Credit Card");      

    }
}
class UPI extends Payment{
    pay(){
        console.log("Payment made using UPI");
    }
}   
let c1 = new CreditCardPayment();
c1.pay();
let u1 = new UPI();
u1.pay();
