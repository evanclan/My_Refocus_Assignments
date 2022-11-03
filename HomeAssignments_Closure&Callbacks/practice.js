
let bankAccountID = {
    name: "evan",
    balance: 0,
    depositAmount: function (amount) {
        this.balance += amount;
        console.log("Your initial deposit is " + amount);
    },
    withdrawAmount: function (amount) {
        if (this.balance < amount) {
            console.log("You dont have enough balance");
        } else {
            this.balance -= amount;
            console.log("You withdraw " + amount);
        }
    },
    checkBalance: function () {
        console.log("Your current balance is " + this.balance);
    },
    
}