function convertToKelvin(tempCelcius) {
    return tempCelcius + 273.15
}
console.log(convertToKelvin(34))

function convertToKelvin(tempFarenheit) {
    return (tempFarenheit - 32) * 5/9 + 273.15
}
console.log(convertToKelvin(143))