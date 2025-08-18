// do_something1()

// function do_something1() {
//     console.log("hello im a do something 1 function")
// } 

// let do_something2 = () =>{
//     console.log("hello im a do something 2 function")
// }

// let do_something3 = () =>{
//     console.log("hello im a do something 3 function")
// }

// do_something2()
// do_something2()
// do_something2()
// do_something2()

// do_something3()

// // 
// // hoisting

// function add(num1, num2){
//     // console.log(num1+num2)
//     let add  = num1 + num2
//     return add
// }

// let answer = add(100,200)
// console.log(answer)

// console.log(add(100,50))
// add(1,5)
// add(50,.5)

// let data = 100

// function squareData(){
//     return data * data
// }

// console.log(squareData())

function factroial(number){
    let fact = 1
    while(number != 0){
        fact = fact * number
        number--
    }
    return fact
}

function square(number){
    return number * number
}

function cube(number){
    return number * number * number
}

console.log(factroial(1))
console.log(factroial(2))
console.log(factroial(3))
console.log(factroial(4))
console.log(factroial(5))
console.log(factroial(6))
console.log(factroial(7))
console.log(factroial(8))

console.log(square(4))
console.log(cube(4))