// // // // DOM- Document Object Model

// // // html - root node
// // // |
// // // |
// // // head - 
// // // |       meta
// // //         meta
// // //         title
// // //         link
// // //         style
// // //         script
// // // |
// // // body -  
// // //     h1
// // //     div-
// // //         h2
    
// // let data = [
// //     {
// //         name : "person 1",
// //         city : "nagpur"
// //     },
// //     {
// //         name : "person 2",
// //         city : "pune"
// //     },
// //     {
// //         name : "person 3",
// //         city : "mumbai"
// //     },
// //     {
// //         name : "person 4",
// //         city : "nagpur"
// //     }
// // ]

// // name      city
// // person1   nagpur
// // person2   pune
// // person3   mumbai  
// // person4   nagpur

// // target html elements/nodes

// // document.getElementById("id")
// // //returns object
// // document.getElementsByTagName("tagname")
// // //returns collection(array, NodeList)
// // document.getElementsByClassName("classname")
// // //returns collection(array, NodeList)

// // let element = document.getElementById("first")

// // let elements = document.getElementsByTagName("h1")

// // let elements = document.getElementsByClassName("primary")

// // document.querySelector()
// // single object
// // document.querySelectorAll()
// // collection

// // note: the query selectors can take css selectors as a input(string)

// // console.log(element)
// // console.log(elements)

// // let element = document.querySelector("h1")

// // let element = document.querySelector(".primary")

// // let element = document.querySelector("#first")

// // let elements = document.querySelectorAll("h1")

// // let elements = document.querySelectorAll(".primary")

// // let elements = document.querySelectorAll("#first")

// // console.log(elements[0])

// // let target = document.querySelector(".secondary > h2 + img")

// // console.log(target)

// // document.getElementById & document.querySelector() -> single object/null(false)

// // rest of the selectors will return a collection of elements / empty array(true)

// let search = document.querySelectorAll("#something")

// // if(search.length != 0 ){
// //     console.log("we found something !")
// // }else{
// //     console.log("we not found something !")
// // }

// if(search){
//     console.log("we found something !")
// }else{
//     console.log("we not found something !")
// }