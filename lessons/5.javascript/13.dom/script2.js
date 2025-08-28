// // getter , setter

// let element = document.querySelector(".primary")
// console.log(element.style.color)
// console.log(element.classList)
// console.log(element.id)


// element.style.color = "rgba(0,255,0,1)"

// element.setAttribute("style", { color: "black", background: "yellow" })

// let input1 = document.querySelector("#input1")

// console.log(input1.name)
// console.log(input1.id)
// console.log(input1.classList)
// console.log(input1.type)
// console.log(input1.placeholder)
// console.log(input1.value)
// console.log(input1.required)
// console.log(input1.disabled)

// input1.setAttribute("type","color")

// let student1 = {
//     name: "some name"
// }

// student1.name = "new name"
// console.log(student1)


// // let e2 = document.getElementById("e2")

// // // e2.setAttribute("class","size color 
// // // border")

// // e2.classList = `${e2.classList} border`

// // "size color border"

// // console.log(e2.classList)


let e2 = document.getElementById("e2")

function addBorder() {
    // let borderClassExist = e2.classList.includes("border")
    console.log(e2.classList[0])
    if (borderClassExist) {
        e2.classList = `${e2.classList}`
    }else{
        e2.classList = `${e2.classList} border`
    }
}

let button = document.querySelector("#btn1")

button.addEventListener("click", addBorder)