function firstLetterUpper(str){
    let strArr = str.split(" ")
    let arr = []
    strArr.forEach( word => {
        if(word[0] === word[0].toUpperCase()){
            arr.push(word[0])
        } 
    })
    if(arr.length === 0){
        return "No uppercase letter found"
    }
    return arr[0].toString()
}


console.log(firstLetterUpper("there is a storm coming to the East of the Philippines"))
console.log(firstLetterUpper("no more rainy days here, sun is about to show up"))