class Account {
    constructor(accountNumber) {
        this.balance = 0;
        this.accountNumber = accountNumber;
    }
    set deposit(amount){
        this.balance += amount; 
        console.log(`The amount deposited and new amount is : ${this.balance}`);
        
    }
    set withdraw(amount){
        if (this.balance - amount < 0) {
            console.log("Insufficient funds. Withdrawal canceled.");
            return; 
          }
        
        this.balance -= amount;
        console.log(`The amount withdraw completed and new amount is : ${this.balance}`);
    }
    get getBalance(){
        return this.balance
    }
}


let acc1 = new Account(1234)
acc1.deposit= 34234
acc1.withdraw = 400
let bal = acc1.getBalance
console.log(bal);
