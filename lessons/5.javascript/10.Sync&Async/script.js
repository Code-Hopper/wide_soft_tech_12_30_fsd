// // console.log(1) //1s
// // console.log(2) //3s
// // console.log(3) //4s
// // console.log(4) //1s
// // console.log(5) //2s

// // // Sync code will take 11s to complete all tasks

// // // Async code will take 4s to complete all tasks

// // 1
// // 2
// // 3
// // 4
// // 5

// // setInterval
// // setTimeout

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)

// // setInterval(()=>{
// //     console.log("this is set interval !")
// // },[2000])

// // it's built in async function(task/method)
// // which accepts a callback and interval(ms)
// // the callback will be called every interval

// // setTimeout(()=>{
// //     console.log("this is set timeout !")
// // },[10000])

// // it's built in async function(task/method)
// // which accepts a callback and interval(ms)

// // setInterval(()=>{
// //     setTimeout(()=>{
// //         console.log("hello")
// //     },[2000])
// // },[2000])

// let timeCalc = setInterval(() => {
//     document.getElementById("time").innerHTML = new Date().toTimeString()
// }, [1000])

// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)

// // setTimeout(()=>{clearInterval(timeCalc)},[10000])