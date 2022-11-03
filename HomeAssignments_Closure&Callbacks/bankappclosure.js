function createBankAccount(name) {
    console.log('welcome' + name);
    let balance = 0;
    function depositAmount(amount){
        balance += amount;
        console.log('you deposit ' + balance)
        return balance
    }
    function withdrawAmount(amount){
        if (balance < amount) {
            console.log('you dont have enough balance');
        } else {
            balance -= amount;
            console.log('You withdraw ' + balance)
        }
        return balance
    }
    function checkBalance(){
        console.log('Your balance is ' + balance)
    }
    return {
        depositAmount,
        withdrawAmount,
        checkBalance
    }
}

const evan = createBankAccount('evan gwapo')

console.log(evan.depositAmount(1000))
console.log(evan.withdrawAmount(1500))
console.log(evan.withdrawAmount(500))
console.log(evan.checkBalance())