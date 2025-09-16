let data1 = true
let data2 = false

function doSomthing() {
    console.log("doing something !")
}

let something = "hello !"

// named export
export { data1 }
export { data2, doSomthing }

export function doSomthing2() {
    console.log("doing someting 2 !")
}

export default something