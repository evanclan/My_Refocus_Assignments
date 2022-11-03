

function samSavings(money) {
    let wantToSave = 10000
    let percent = ((wantToSave- money) / wantToSave) * 100
    if (money === wantToSave) {
        return `Congratulations you reached your goal of 1000`
    } else if (money > wantToSave) {
        return `You have ${money}, you exceeded your goal! Congratulations`
    }else{
        return `Thank you for your discipline and hardwork, Sam! You are now ${percent}% away from your goal of saving ₱10,000.`
    }
}
console.log(samSavings(10000))
console.log(samSavings(7500))
console.log(samSavings(16000))