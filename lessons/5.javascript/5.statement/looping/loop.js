// let number = 0

// while (number <= 10000) {
//     if (number % 5 == 0) {
//         console.log(number)
//     }
//     number++
// }

// let number = 1000

// let count = 0 

// while (number != 0) {
//     if (number % 2 == 0) {
//         count++
//         console.log(number)
//     }
//     number--
// }

// console.log("from 0 to 1000 their are totatl " + count + " even numbers!")

// factorial

// 5! =  5 * 4 * 3 * 2 * 1 = 120

// 0 to 100

let start = 1
let end = 10

while (start <= end) {
    if (start % 2 == 0) {
        let number = start
        let fact = 1
        while (number != 0) {
            fact = fact * number
            number--
        }
        console.log(fact)
    }
    start++
}