// // 2-D[Row][Column]
// // let array = [ [] , [] , [] , [] ]
// let numbers = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [10, 11, 12, 13]
// ]

// console.log(numbers[0])
// console.log(numbers[1])
// console.log(numbers[2])

// console.log(numbers[0][0])
// console.log(numbers[0][1])
// console.log(numbers[0][2])
// console.log(numbers[1][0])
// console.log(numbers[1][1])
// console.log(numbers[1][2])
// console.log(numbers[2][0])
// console.log(numbers[2][1])
// console.log(numbers[2][2])

// // for (let row = 0; row < numbers.length; row++) {
// //     for (let column = 0; column < numbers[row].length; column++){
// //         console.log(numbers[row][column])
// //     }
// // }

// // for(let array of numbers){
// //     for(let element of array){
// //         console.log(element)
// //     }
// // }

let wideSoftTechBranchMedicalSquare = [
    [{
        name: "amey khondekar",
        phone: 9766696550,
        status: true,
        address: "sakkaradhara nagpur",
        intrest: ["Java"],
        contactPerson: {
            name: "so and so",
            phone: 8857032120
        }
    }, "B1 student2", "B1 student3"],
    ["B1 student4", "B1 student5", "B1 student6"],
    ["B1 student7", "B1 student8", "B1 student9"],
    ["B1 student10", "B1 student11", "B1 student12"]
]

let wideSoftTechBranchSakkaradharaSquare = [
    ["B2 student1", "B2 student2", "B2 student3"],
    ["B2 student4", "B2 student5", "B2 student6"],
    ["B2 student7", "B2 student8", "B2 student9"],
    ["B2 student10", "B2 student11", "B2 student12"]
]

let wideSoftTechBranchManewadaSquare = [
    ["B3 student1", "B3 student2", "B3 student3"],
    ["B3 student4", "B3 student5", "B3 student6"],
    ["B3 student7", "B3 student8", "B3 student9"],
    ["B3 student10", "B3 student11", "B3 student12"]
]

let wideSoftNagpur = [
    wideSoftTechBranchMedicalSquare,
    wideSoftTechBranchSakkaradharaSquare,
    wideSoftTechBranchManewadaSquare
]

for (let branch of wideSoftNagpur) {
    for (let batch of branch) {
        for (let student of batch) {
            console.log(student)
        }
    }
}