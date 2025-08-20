
// linear search algo

function linearSerach(arr, search) {

    let flag = false

    let steps = 0

    for (let index = 0; index < arr.length; index++) {

        steps++

        if (arr[index] === search) {
            flag = true
        }

        if (flag) {
            return `element ${search} found at position ${index + 1} in ${steps} steps`
        }

    }

    return `element ${search} not found at any position in ${steps} steps`

}

// let string = "amey khondekar"

// let nameArray = string.split("")

// console.log(nameArray)

// console.log(linearSerach([1,2,3,4,5,6,7,8,10,11,12],15))

// console.log(linearSerach([1,2,3,4,5,6,7,8,10,11,12],10))

// console.log(linearSerach(["amey","rohit","sahil"],"amey"))

// best case O(1)
// worst case O(n)

// binary search

// sorted array

function binarySearch(arr, search) {

    let ub = arr.length - 1
    let lb = 0

    let steps = 0

    while (lb <= ub) {

        steps++

        let midpoint = parseInt((ub + lb) / 2)

        if (arr[midpoint] === search) {
            return `element ${search} found at position ${midpoint + 1} in ${steps} steps`
        }

        if (arr[midpoint] < search) {
            lb = midpoint + 1
        } else {
            ub = midpoint - 1
        }

    }

    return `element ${search} not found any positon in ${steps} steps !`

}

// 1 2 3 4 5 6 7 8 9 10 // length 10
// 0 1 2 3 4 5 6 7 8 9

// search 10

// while(lb <= ub)

// midpoint = (ub + lb)/2

// Array[midpoint] === searchvalue

// return

// if(arr[midpoint] < searchvalue){
//     lb = midpoint + 1
// }else{
//     ub = midpoint - 1
// }

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let names = ["amey", "bhavesh", "rohit", "sahil"]

console.log(linearSerach(numbers, 10))
console.log(binarySearch(numbers, 5))
console.log(binarySearch(names, "rohit"))

// A - 65
// B - 66
// C - 67

// a - 97
// b - 98
// c - 99