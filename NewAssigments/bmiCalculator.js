//calculate body mass index
function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    return bmi.toFixed(2)
}

console.log(calculateBMI(80, 1.8));