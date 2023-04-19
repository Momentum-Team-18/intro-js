let watchCollection = ['AP', "Rolex", "Gucci", "Seiko", "Casio"]
// get the first watch
console.log(watchCollection[0])
console.log(watchCollection[watchCollection.length - 1])

let answers = ['yes', true, 6, undefined, "Abraham Lincoln", false]
// can mix data types in an array

for (let i = 0; i < answers.length; i++){
    console.log(`The answer in index position ${i} is ${answers[i]}`)
}
// for loop with array

let i = 0
while (i < answers.length) {
    console.log(i, answers[i])
    i++
}
// can also loop through array with a while loop

for (let watch of watchCollection) {
    console.log(`Q has a ${watch} watch.`)
}
// for of loop visits each item one at a time, use when you don't need index
// let watchCollection = ['AP', "Rolex", "Gucci", "Seiko", "Casio"]


// built in array methods
watchCollection.push('Richard M')
console.log(watchCollection)

let forSale = watchCollection.pop()
console.log(forSale)
console.log(watchCollection)

watchCollection.unshift(forSale)
console.log(watchCollection)

watchCollection.shift(forSale)
console.log(watchCollection)

watchCollection.splice(2, 1)
console.log(watchCollection)
// splice removes an item in a specific position

// two ways to copy an array
let answersCopy = answers.slice()
// slice
let answersCopyWithSpread = [...answers]
// spread operator (newer)



// let watchCollection = ['AP', "Rolex", "Gucci", "Seiko", "Casio"]

watchCollection.push('Vasheron Constantini')
// console.log(`The watch with the longest brand name is: ${longestBrandName}`)
let answerTypes = []
for (let answer of answers) {
    answerTypes.push(typeof answer)
}
console.log(answerTypes)

// rewrite the transformation to answer types using map()
let boolAnswersWithMap = answers.map(function (answer) {
    return typeof answer
})
console.log(boolAnswersWithMap)

let booleanAnswers = []
for (let answer of answers) {
    if (typeof answer === 'boolean') {
        booleanAnswers.push(answer)
    }
}
console.log(booleanAnswers)
// filtering an array

let filteredAnswers = answers.filter(function (answer) {
    return typeof answer === 'boolean'
})
console.log(filteredAnswers)
// does the same thing as above loop using filter()

let longestBrandName = null

for (let watch of watchCollection) {
    if (longestBrandName === null || watch.length > longestBrandName.length) {
        longestBrandName = watch
    }
}
console.log(longestBrandName)

let longest = watchCollection.reduce(function (longestName, watch) {
    if (watch.length > longestName.length) {
        return watch
    } else {
        return longestName
    }
        
})

console.log(longest)
