// let response = prompt("What is your name?")
// console.log(response)

// alert(`Hello, ${response}!`)
// template literal, for mixing strings and variables

let count = 0

while (count <= 5) {
    console.log(`Hi, the value of count is now: ${count}`)
    count += 1
}

alert("The loop is complete!")

// this loop does the same as the above loop using a for loop
for (let count = 0; count <= 5; count++){
    console.log(`Hi, the value of count is now: ${count}`)
}

// while loop that wouldn't work as a for loop
let winner = false
let answer
// while (!winner) {
//     answer = prompt("What is the best song of all time? ")
//     if (answer === 'Strangers In The Night') {
//         winner = true
//     } else {
//         prompt("Nope, keep guessing")
//     }
// }
// alert("You're right!")

function sayHello(name) {
    // parameter -> placeholder, argument -> actual
    alert(`Hello, ${name}!`)
}

sayHello()
// calling the function on argument(s) causes the code to be executed