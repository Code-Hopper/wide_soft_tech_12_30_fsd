// // // event
// // // mouse event(click), keyboard event(keypress), window event(load, resize, scroll), form event(change, select, submit)

// // let target = document.getElementById('target')

// // // target.onmouseleave = (event) => {
// // //     console.log("target got clicked !")
// // //     console.log(event.x)
// // //     console.log(event.y)
// // // }

// // // target.addEventListener('click', (event) => {
// // //     console.log("target got clicked !")
// // //     console.log(event.x)
// // //     console.log(event.y)
// // // })

// // // document.addEventListener("keypress",(event)=>{
// // //     console.log('a key has been presed !')
// // //     console.log(event.key)
// // //     console.log(event.ctrlKey)

// // //     if(event.key == 'q' && event.ctrlKey){
// // //         target.style.display = "none"
// // //     }
// // // })

// // // window.addEventListener("resize",(event)=>{
// // //     console.log('resize event trigger')
// // //     console.log(event)
// // // })

// let form = document.getElementById("form1")

// // form.addEventListener("submit",(event)=>{
// //     event.preventDefault()
// //     console.log("form has been submitted")
// //     console.log(event.target[0].value)
// // })

// document.getElementById("input1").addEventListener("change",(event)=>{
//     console.log("change has been occured !")
//     console.log(event.target.value)
// })

// // color rgb(255,255,255)

let target = document.getElementById('target')

let ir1 = document.getElementById("ir1")
let ir2 = document.getElementById("ir2")
let ir3 = document.getElementById("ir3")

let red = 0
let green = 0
let blue = 0

ir1.addEventListener("change", (event) => {
    console.log("red : " + event.target.value)

    red = event.target.value
    updateColor()
})

ir2.addEventListener("change", (event) => {
    console.log("green : " + event.target.value)
    green = event.target.value
    updateColor()
})

ir3.addEventListener("change", (event) => {
    console.log("blue : " + event.target.value)
    blue = event.target.value
    updateColor()
})

function updateColor() {
    target.style.background = `rgb(${red},${green},${blue})`
}

updateColor()