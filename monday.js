console.log('Hello, World!')

/* I can add a comment here for context 
comments are not executed by the browser */

let myVariable
// variables can be declared without assigning a value, use let when you want want value to be change-able

console.log(myVariable)

myVariable = true
// can assign value later

console.log(myVariable)

const width = 300
// use const when we don't want a value to change

let totalCost = 99.99
// can declare and set variable at the same time.

let chocolateCookies

chocolateCookies = 10
chocolateCookies += 2
console.log("I now have this many cookies: ", chocolateCookies)
// chocolateCookies = chocolateCookies + 12
// can also do this with shortcut assignment
let secondBatch = 12
chocolateCookies += secondBatch
// same action as line 25
console.log("After the second batch, I have this many cookies: ", chocolateCookies)
chocolateCookies++
// adds one to your value
chocolateCookies += 11

let enoughCookies = 36
// this assigns the value of 36 to enoughCookies

console.log("We have", chocolateCookies, "cookies, and we need", enoughCookies, "cookies")

if (chocolateCookies === enoughCookies) { 
    // is the amount of chocolateCookies the exact same as enoughCookies???
    console.log("You have the exact desired amount of cookies")
} else if (chocolateCookies > enoughCookies) {
    console.log("We have more than enough cookies!")
} else if (enoughCookies - chocolateCookies < 10) {
    console.log("Bake a few more cookies!!!! 🍪🍪")
} else {
    console.log("Bake lots more cookies!!!! 🍪🍪🍪🍪🍪🍪🍪")
}

let firstValue = "1"
let secondValue = 0

if (firstValue && !secondValue) {
    console.log("The thing is true!")
} else {
    console.log("The thing is false")
}
