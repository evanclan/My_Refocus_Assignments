function pulseRate(rate){
    if(rate >= 40 && rate <= 100) {
        return 'Acceptable to continue home monitoring.'
    } else if (rate >= 101 && rate <= 109){
        return 'Normal reading.'
    } else if (rate >= 110 && rate <= 120) {
        return 'Seek advice from health professional.'
    } else if (rate >= 130){
        return 'Seek urgent medical advice.'
    } else {
        return 'You should be dead'
    }
    
}

console.log(pulseRate(41))
console.log(pulseRate(104))
console.log(pulseRate(110))
console.log(pulseRate(140))
console.log(pulseRate(13))