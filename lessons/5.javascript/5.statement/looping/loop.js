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

// let start = 1
// let end = 10

// while (start <= end) {
//     if (start % 2 == 0) {
//         let number = start
//         let fact = 1
//         while (number != 0) {
//             fact = fact * number
//             number--
//         }
//         console.log(fact)
//     }
//     start++
// }

// repeating statement 

// while (){
// }

// wap in js to print all even numbers from 0 to 1000

// let number = 0

// while (number < 1000) {
//     if (number % 2 == 0) {
//         console.log(number)
//     }
//     number++
// }

// leap year

// let year = 1800

// if(year % 100 == 0){
//     if(year % 400 == 0){
//         console.log(year + " is a leap year !")
//     }else{
//         console.log(year + " is not a leap year !")
//     }
// }else if(year % 4 == 0){
//     console.log(year + " is a leap year !")
// }else{
//     console.log(year + " is not a leap year !")
// }

// if(((year % 100 == 0) && (year % 400 == 0)) || (year % 4 == 0)){
//     console.log(year + " is a leap year !")
// }else{
//     console.log(year + " is not a leap year !")
// }

// if(((year % 100 != 0) && (year % 4 == 0)) || (year % 400 == 0)){
//     console.log(year + " is a leap year !")
// }else{
//     console.log(year + " is not a leap year !")
// }

// let start = 1500
// let org_start = start
// let end = 2025

// let count = 0

// while (start <= end) {
//     let year = start
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             count++
//             console.log(year)
//         }
//     } else if (year % 4 == 0) {
//         count++
//         console.log(year)
//     }
//     start++
// }

// console.log("their are total " + count + " leap year in range of " + org_start + " to " + end + " !")

// let current_year = 2025
// let next_leap_year = current_year + 1

// while(!((next_leap_year % 100 != 0) && (next_leap_year % 4 == 0)) || (next_leap_year % 400 == 0)){
//     next_leap_year++
// }

// console.log(next_leap_year)

// (t && f) || (f)

// f || f

// f
// t-> f

let current_year = 2196

let next_leap_year = current_year

let willLoopRun = true

while(willLoopRun){
    next_leap_year++
    let year = next_leap_year
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            willLoopRun = false
        }
    } else if (year % 4 == 0) {
        willLoopRun = false    
    }
}

console.log(next_leap_year)