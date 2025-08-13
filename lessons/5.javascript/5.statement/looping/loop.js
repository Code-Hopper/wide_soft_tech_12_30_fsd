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

// let current_year = 2196

// let next_leap_year = current_year

// let willLoopRun = true

// while(willLoopRun){
//     next_leap_year++
//     let year = next_leap_year
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             willLoopRun = false
//         }
//     } else if (year % 4 == 0) {
//         willLoopRun = false    
//     }
// }

// console.log(next_leap_year)

// reverse of number || to check if the given number is palindrome or not

// 121 = 121 true , 123 = 321 false

// let number = org_number = 121

// let rev = 0
// let d = 0
// while(number != 0){
//     d = number % 10
//     rev = rev * 10 + d
//     number = parseInt(number/10)
// }

// console.log(rev)

// if(org_number == rev){
//     console.log(org_number + " is palindrome !")
// }else{
//     console.log(org_number + " is not a palindrome !")
// }

// rev = rev * 10 + d

// rev = 0 * 10 + 3 // 3
// rev = 3 * 10 + 2 // 32
// rev = 32 * 10 + 1 // 321

// let number1 = 100

// while (number1 < 100) {
//     console.log(number)
//     number++
// }

// do {
//     console.log(number1)
//     number1++
// } while (number1 < 100)

// let choice = false

// do {
//     let year = Number(window.prompt("enter year to check !"))

//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             console.log(year + " is a leap year !")
//         } else {
//             console.log(year + " is not a leap year !")
//         }
//     } else if (year % 4 == 0) {
//         console.log(year + " is a leap year !")
//     } else {
//         console.log(year + " is not a leap year !")
//     }

//     choice = window.confirm("do you wish to continue yes/no")

// } while (choice)

// make similar palindrome as of leap year using do while

// bug fix: the program must not take 0 or NaN as input

// for (let number1 = 0; number1 <= 1000; number1++) {
//     if(number1 % 2 != 0) console.log(number1)
// }

// repeat all examples from while loop using for loop

let choice = false

do {
    let year = Number(window.prompt("enter year to check !"))

    if (year == 0 || isNaN(year)) {
        console.log("not a valid data for year. year has to greater than 0 and also should not be NaN !")
    } else {

        if (year % 100 == 0) {
            if (year % 400 == 0) {
                console.log(year + " is a leap year !")
            } else {
                console.log(year + " is not a leap year !")
            }
        } else if (year % 4 == 0) {
            console.log(year + " is a leap year !")
        } else {
            console.log(year + " is not a leap year !")
        }
    }
    choice = window.confirm("do you wish to continue yes/no")

} while (choice)