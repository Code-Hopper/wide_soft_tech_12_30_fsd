// let string1 = "this is some string 1"
// console.log(string1)

// let string2 = 'this is some string 2'
// console.log(string2)

// let string3 = `this is some string`
// console.log(string3)

// // concatenation
// console.log(string1 + string2)

// console.log(string1.length)

// change

// case

// let string4 = "SOME string data"

// // console.log(string4.length)

// // string4 = string4.toUpperCase()

// string4 = string4.toLowerCase()

// console.log(string4)

// "hello" // length : 5
//  01234

// let string1 = "hello world"

// console.log(string1.charAt(0))
// console.log(string1[0])

// console.log(string1.indexOf("l"))
// // it return first occurence of any passed charchter
// console.log(string1.lastIndexOf("l"))
// // it return last occurence of any passed charchter

// console.log(string1.length)

// slice(start index, end index) & substring(start index, end index)

// h - 0
// e - 1
// l - 2 
// l - 3
// o - 4
//   - 5
// w - 6
// o - 7
// r - 8
// l - 9
// d - 10  

// 11 | data.length - 1

// length - 1 - last index

// let newString1 = string1.slice(0,5)
// let newString2 = string1.slice(5,11)

// console.log(string1)
// console.log(newString1)
// console.log(newString1.length)
// console.log(newString2)
// console.log(newString2.length)

// let newString1 = string1.substring(0,5)
// let newString2 = string1.substring(5,11)

// console.log(string1)
// console.log(newString1)
// console.log(newString1.length)
// console.log(newString2)
// console.log(newString2.length)

// let string3 = "     this is some string      "

// console.log(string3.length)

// string3 = string3.trim()

// console.log(string3.length)

// console.log(string3)

// // string3 = string3.replace("is","was")
// string3 = string3.replaceAll("is","was")

// console.log(string3)

// wap is js to take user name as a input and then change it's to capitalise

// amey khondekar - Amey Khondekar

// let name = "om kumar"

// console.log(name)

// name = name.replace(name.charAt(0),name.charAt(0).toUpperCase())

// name = name.replace(name.charAt(name.indexOf(" ")+1),name.charAt(name.indexOf(" ")+1).toUpperCase() )

// console.log(name)

// wap in js to reverse a string
// hint : indexes and concatenation

// template litral string (ES6)

// let name1 = "amey"
// let age = 21

// console.log("hello ! " + name1 + " your age is "+ age + " years !")

// console.log(`hello ! ${name1.toUpperCase()} your age is ${age- 10} years !`)

// console.log(`this is some string ${100+100}` + ` new string`)

// regex litrals

// regular expresion(partner)

// input -> email

// atleast one upper case, one lowercase, 1 digit and mini length would be 8 and max be 15

// Password
// Password123
// Password1234

// let pattern = /hello/gi

// let string = "hi Hello hello hello"

// // string.match(regex)
// // regex.text(string)

// console.log(string.match(pattern))
// console.log(pattern.test(string))

// flag i, g

// patterns \d - only digits \w - only charchter \W - non-chachter \s - space \S non-space

// ^ - start of string $ - end of string

// let partner1 = /\W/

// \W - non word charchter - special charchters

// let partner1 = new RegExp("")

// let string = "asdasd!@#$%^&*()_"

// console.log(partner1.test(string))

let passwordValidation = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/

// // {n} - {2} - excatly 2

// {n,}- {2,} - atleast 2

// {n,m}- {2,5} - atleast 2 max is 5

let matchString = "PaSSWO$D12"

console.log(passwordValidation.test(matchString))