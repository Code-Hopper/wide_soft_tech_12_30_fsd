// // let elements = [1,true, "some string", ()=>{console.log("hello !")}]

// // console.log(elements)

// // console.log(elements[0])
// // console.log(elements[1])
// // console.log(elements[2])
// // elements[3]()

// // elements[0] = 1000

// // console.log(elements[0])

// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// // console.log(numbers.length)

// // for(let index = 0 ; index < numbers.length ; index++){
// //     console.log(numbers[index])
// // }

// // forEach, map, for of

// function square(number){
//     return number * number
// }

// // numbers.forEach((number, index)=>{
// //     console.log(`the element at ${index} index is ${number} and it's square is ${square(number)}`)
// // })

// // console.log(numbers.map((number, index)=>{
// //     return number * number
// // }))

// // let newArray = numbers.map(square)

// // console.log(newArray)
// // console.log(numbers)

// // // the only difference between forEach and map is map can return a new array and forEach will return undefined

// // let numbers2 = []

// // numbers.forEach((number, index)=>{
// //     numbers2[index] = number*number
// // })

// // for(let index = 0 ; index < numbers.length ; index++){
// //     numbers2[index] = numbers[index]* numbers[index]
// // }

// // console.log(`numbers2 array is ${numbers2}`)

// for(let number of numbers){
//     console.log(square(number))
// }

// // updating an array
// add, revome

let numbers = [1,2,3,4,5]

// push(trailing side), unshift(leading)

// numbers.push(6)
// numbers.push(7)
// numbers.push(8)
// numbers.push(9)

// numbers.unshift(10)
// numbers.unshift(11)
// numbers.unshift(12)

// console.log(numbers)

// // pop() trailing, shitf() leading

// console.log(numbers.pop())
// numbers.pop()
// numbers.pop()
// numbers.pop()

// numbers.shift()
// numbers.shift()
// numbers.shift()
// numbers.shift()

// console.log(numbers)

// Array.splice(start index, delete count, replacement)

// console.log(numbers)

// numbers.splice(3,0,"hello")

// console.log(numbers)

// Array.method()

// push, pop, shift, unshift, slice, splice, lastIndexOf, indexOf, includes

// console.log([1,2,3,4,5,5].indexOf(5))

// console.log([1,2,3,4,5,5].lastIndexOf(5))

// console.log([1,2,3].includes("1"))





console.log(
    linearSerach([
    {name:"student1"},
    {name:"student2"},
    {name:"student3"},
    {name:"student4"},
    {name:"student5"}
], "student10")
)

function linearSerach(arr, search) {

    let flag = false

    let steps = 0

    for (let index = 0; index < arr.length; index++) {

        steps++

        if (arr[index].name === search) {
            flag = true
        }

        if (flag) {
            return `element ${search} found at position ${index + 1} in ${steps} steps`
        }

    }

    return `element ${search} not found at any position in ${steps} steps`

}