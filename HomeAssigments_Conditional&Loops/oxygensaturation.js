function oxygenSaturation(percent){
    if(percent === 95) {
        return 'Acceptable to continue home monitoring.'
    } else if (percent >= 96){
        return 'Normal reading.'
    } else if (percent === 93 || percent === 94  ) {
        return 'Seek advice from health professional.'
    } else {
        return 'Seek urgent medical advice.'
    }
    
}

console.log(oxygenSaturation(97))
console.log(oxygenSaturation(95))
console.log(oxygenSaturation(93))
console.log(oxygenSaturation(90))