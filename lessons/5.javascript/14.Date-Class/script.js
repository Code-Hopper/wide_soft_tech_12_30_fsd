// date is built in class in js 
// using which we can access date properties and date methods

// methods - getter, setter

// to create a date object

let date = new Date()

// date.setTime(0)

// console.log(date.getTime())
// return time in ms
// 1 jan 1970 -- ms //y2k // 2036

// console.log(date.toDateString())

// date.getTime()
// console.log(date.getHours())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())
// console.log(date.getMinutes())

// console.log(date.getDay())
// console.log(date.getMonth())
// console.log(date.getFullYear())

// console.log(date.getUTCHours())

// console.log(date.toDateString())
// console.log(date.toTimeString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())

// +5:30 GMT - 0:0 IST

function calculateAge(userDob){

    let dob = new Date(userDob)

    let currentDate = new Date()

    let difference = currentDate.getTime() - dob.getTime()

    let years = (((((difference/1000)/60)/60)/24)/365)

    return years 
}

// let date1 = new Date("2000-01-01")

// let date2 = new Date()

// console.log(date1.getTime())
// console.log(date2.getTime())


console.log(calculateAge('2000-09-1'))

// x years , y days