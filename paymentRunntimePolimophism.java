public class Payment2 {
    public void processPayment() {
        System.out.println("Processing payment.");
    }
}
class CreditCardPayment extends Payment {
    public void processPayment() {
        System.out.println("Processing credit card payment.");
    }
}
class PayPalPayment extends Payment {
    public void processPayment() {
        System.out.println("Processing PayPal payment.");
    }
}
