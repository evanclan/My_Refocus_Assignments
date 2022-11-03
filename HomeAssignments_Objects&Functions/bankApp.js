let bankAccountID = Math.floor(Math.random() * 1000000);
let bankAccount = {
    "bankAccountID": bankAccountID,
    "accountNumber": 123456789,
    "credentials": [
        {"username": "user1"},
        {"password": "pass1"},
        {"pin": 1234}
    ],
    "balance": 2000,
    "createdAt": "Nov 1, 2022"
}

let userAccount = {
    "bankAccount": bankAccount["bankAccountID"],
    "firstName": "Evan",
    "lastName": "Alferez",
    "birthDate": "Dec 9, 1990",
    "validID": ['driversLicense', 'socialSecurity', 'passport'],
    "address" :  "Kagoshima",
    "getBankAccountDetails": function(user,pass) {
        if (user === bankAccount["credentials"][0]["username"] && pass === bankAccount["credentials"][1]["password"]) {
            return 'Welcome ' + this.firstName + ' to your bank account #'+ bankAccount["bankAccountID"] + '. Your account debit card number is ' + bankAccount["accountNumber"] + ' and your balance is ' + bankAccount["balance"]
        } else {
            return "Invalid username or password"
        }
    },
    "withdrawMoney": function(user, pass, withdrawAmount){
        if (user === bankAccount["credentials"][0]["username"] && pass === bankAccount["credentials"][1]["password"]){
            if (withdrawAmount > bankAccount["balance"]){
                return "Insufficient funds"
            } else {
                bankAccount["balance"] -= withdrawAmount
                return "You have withdrawn " + withdrawAmount + " from your account. Your current balance is " + bankAccount["balance"]
            }
        } else {
            return "Invalid username or password"
        }
    },
    "depositMoney": function(user, pass, depositAmount){
        if (user === bankAccount["credentials"][0]["username"] && pass === bankAccount["credentials"][1]["password"]){
            bankAccount["balance"] += depositAmount
            return "You have deposited " + depositAmount + " to your account. Your current balance is " + bankAccount["balance"]
        }
    }
}


console.log(userAccount.getBankAccountDetails("user1", "pass1"))
console.log(userAccount.getBankAccountDetails("wronguser", "wrongpass", 1000)) //wrong username

console.log(userAccount.withdrawMoney("user1", "pass1", 1000))
console.log(userAccount.withdrawMoney("user1", "pass1", 3000)) //withdraw exceed to balance
console.log(userAccount.withdrawMoney("wronguser", "pass1", 1000)) //wrong username

console.log(userAccount.depositMoney("user1", "pass1", 5000))