// // // console.log(document)

// // // console.log($)

// // // document.on("click", () => { console.log("document clicked !") })

// // let container1 = document.getElementById('container1')

// // container1.addEventListener("click", () => {
// //     alert('container1 clicked !')
// // })

// // $('#container1').on("click", () => {
// //     alert('container1 clicked !')
// // })

// // // querySelector() -> $()

// // console.log(document.querySelector("h1").dataset.valueNew)

// // document.querySelector("img").setAttribute("src", "https://picsum.photos/id/238/200/300")

// // console.log(document.querySelector("img").src)

// // let numbers = [[1, 2], [3, 4], [5, 6]]

// // // let oddNumbers = numbers.filter((number) => {
// // //     return number % 2 == 1
// // // })

// // // let evenNubers = numbers.filter((number) => {
// // //     return number % 2 == 0
// // // })

// // // console.log(oddNumbers)
// // // console.log(evenNubers)

// // // let sum = numbers.reduce((prev, crr) => { return prev + crr })
// // // console.log(sum)

// // console.log(numbers)

// // let flatArray = numbers.reduce((prev,crr)=>{
// //     return prev.concat(crr)
// // })

// // // console.log([1, 2].concat([3, 4]))

// // console.log(flatArray)

// // let currentDate = new Date()

// // console.log(currentDate.toDateString())

// // let nextDate = new Date()

// // nextDate.setFullYear(2026)

// // console.log(nextDate.toDateString())

// // built in class in js

// // we have to create an object of date class to use it's properties and methods

// // let dateObject = new Date()

// // // setter, getter

// // console.log(dateObject.getTime())
// // console.log(dateObject.getDate())
// // console.log(dateObject.getDay())
// // console.log(dateObject.getFullYear())
// // // .
// // // .
// // // dateObject.

// // dateObject.setTime()

// // let numbers = [3, 1, 4, 2, 5]

// // console.log(numbers.sort())
// // 1 2 3 4 5
// // numbers.sort((a,b)=>{return a - b})

// // 3 1 4 2 5
// // 1 3 4 2 5
// // 1 3 4 2 5
// // 1 3 2 4 5
// // 1 3 2 4 5

// // 1 2 3 4 5
// // 1 2 3 4 5

// // 3 1 4 2 5

// // minIndex = 1
// // swap
// // 1 3 4 2 5

// // sort for index 1
// // minIndex = 3
// // swap
// // 1 2 4 3 5

// // sort for index 2
// // minIndex = 3
// // 1 2 3 4 5

// // document.querySelector("")
// // // single element
// // document.querySelectorAll("")
// // collection NodeList
// // css selectors, tagname, .class, #id, element > element,element element, element + element, element ~ element

// // for()

// // *  
// // * *  
// // * * * 
// // * * * * 
// // * * * * *
// // c1 2 3 4 5 
// // * * * * * R1 
// // * * * * * 2
// // * * * * * 3
// // * * * * * 4
// // * * * * * 5

// // let columnStart = ""

// // for (let row = 0; row < 5; row++) {
// //     for (let column = 0; column <= row; column++) {
// //         columnStart += " * "
// //     }
// //     console.log(columnStart)
// //     columnStart = ""
// // }

// function getData() {
//     let myPromise =  new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(new Promise((resolve, reject) => {
//                 setTimeout((
//                     resolve("both promise resolved !")
//                 ), 3000)
//             }))
//         }, 1000)
//     })

//     return myPromise
// }

// getData().then((resolve) => {
//     console.log("first promise resolved !")
// }).then((resolve)=>{
//     console.log('all promises completed !')
//     console.log(resolve)
// }).catch((reject) => {
//     console.log('promise returned an error/rejected !')
// })

// window.addEventListener("scroll",(event)=>{
//     console.log(event)
//     console.log("window scrolled")
// })

// console.log(document.getElementById("container1").classList.value)

// document.getElementById("container1").classList.value += " newclass"

// console.log(document.getElementById("container1").classList.value)

// function genRateRandomNumber(range) {
//     return Math.floor((Math.random() * range) + 1)
// }

// let randomNumber1 = genRateRandomNumber(6)
// let randomNumber2 = genRateRandomNumber(6)

// "img-${number}.png/jgp"


// document.querySelector("h1").innerText = "<u>some text</u>"
// document.querySelector("h1").textContent = "<u>some text</u>"

// console.log(document.querySelector("h1").innerText)

// to learn textContent

// localStorage.getItem()
// localStorage.setItem()
// localStorage.removeItem()

let data = 123

localStorage.setItem("data","something")
// localStorage.removeItem("data")
let result = localStorage.getItem("data")
console.log(result)