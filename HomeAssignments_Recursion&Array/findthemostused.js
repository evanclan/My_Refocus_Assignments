const arr = ["Web Developer", "Refocus", "Web Developer", "Web Developer", "Refocus", "Awesome"]

let mostUsed = {}

arr.forEach( word => {
    if (mostUsed[word]) {
        mostUsed[word] += 1
    } else {
        mostUsed[word] = 1
    }
}
)

console.log(mostUsed)