// // // to create , append and remove a  child (html element)

// // // create a element
// // let element1 = document.createElement("h1")


// // element1.innerText = "this heading is created using js"

// // element1.setAttribute("class","red")

// // // append
// // // parent

// // // document.appendChild(element1)

// // // document.getElementById("target").appendChild(element1)

// // document.querySelector("body").appendChild(element1)

// // array of list item
// // append it into a list
// // list must be append at last into the body

// let list = document.createElement("ul")

// let listItem1 = document.createElement("li")

// let listItem2 = document.createElement("li")

// let listItem3 = document.createElement("li")


// listItem1.innerHTML = "<b>this is some text</b>"
// listItem2.innerText = "item 2"
// listItem3.innerText = "item 3"

// listItem1.style.color = "red"

// list.appendChild(listItem1)
// list.appendChild(listItem2)
// list.appendChild(listItem3)

// document.getElementById("target").appendChild(list)

// document.getElementById("target").appendChild(list)

// document.getElementById("target").appendChild(list)

// let elementToRemove = document.getElementById("heading1")

// document.getElementById("target").removeChild(elementToRemove)

let tableData = [
    {
        name: "person 1",
        phone: "123456"
    },
    {
        name: "person 2",
        phone: "123456"
    },
    {
        name: "person 3",
        phone: "123456"
    },
    {
        name: "person 4",
        phone: "123456"
    }
]


let table = document.getElementById("table1")

let tr = document.createElement("tr")
let td1 = document.createElement("td")
let td2 = document.createElement("td")

td1.innerText = tableData[0].name
td2.innerText = tableData[0].phone

tr.appendChild(td1)
tr.appendChild(td2)

table.appendChild(tr)

// table.append(tr)