let balance = 0;


function createBankAccount(name, deposit, withdraw, depositAmountCallback, withdrawAmountCallback, checkBalance){
    console.log("Thank you for banking with us " + name)
    depositAmountCallback(deposit)
    withdrawAmountCallback(withdraw)
    checkBalance()
}
function depositAmountCallback(deposit){
    balance += deposit;
    console.log("Your initial deposit is " + deposit)
}
function withdrawAmountCallback(withdraw){
    balance -= withdraw;
    console.log("You withdraw amount of " + withdraw)
}

function checkBalance(){
    console.log("Your current balance is " + balance)

}
createBankAccount("evan", 1000, 200, depositAmountCallback, withdrawAmountCallback, checkBalance)