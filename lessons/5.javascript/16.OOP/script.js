// pop / oop

class cars {
    name
    wheels
    doors
    canDrive
    canFly
    canSwim

    // setInfo(name, wheels, doors, canDrive, canSwim, canFly) {
    //     this.name = name
    //     this.doors = doors
    //     this.wheels = wheels
    //     this.canDrive = canDrive
    //     this.canSwim = canSwim
    //     this.canFly = canFly
    // }

    constructor(name, wheels, doors, canDrive, canSwim, canFly) {
        this.name = name
        this.doors = doors
        this.wheels = wheels
        this.canDrive = canDrive
        this.canSwim = canSwim
        this.canFly = canFly
    }

    getInfo() {
        console.log("car name is " + this.name)
        console.log("car has " + this.doors + " doors")
        console.log("car has " + this.wheels + " wheels")

        console.log(`car can ${this.canDrive ? "can drive !" : "can't drive !"}`)

        console.log(`car can ${this.canFly ? "can fly !" : "can't fly !"}`)

        console.log(`car can ${this.canSwim ? "can swim !" : "can't swim !"}`)
    }

    drive() {
        console.log(this.name + " car is driving !")
    }

    stop() {
        console.log(this.name + " car is stoped !")
    }

    reverse() {
        console.log(this.name + " car is reversing !")
    }
}

class switf extends cars{
    safetyRatings(){
        return 0
    }
}

let swift = new cars("swift vxi",4,5,true,false,false)
let swift1 = new cars("dizre vxi",4,5,true,false,false)
let swift2 = new cars()
let swift3 = new cars()

// swift.setInfo("swift vxi",4,5,true,false,false)

swift.getInfo()
swift1.getInfo()
// console.log(swift.name)
// console.log(swift.wheels)
// console.log(swift.doors)
// console.log(swift.canDrive)
// console.log(swift.canFly)
// console.log(swift.canSwim)

// swift.drive()
// swift.stop()
// swift.reverse()

// let dizre = new cars()

// dizre.drive()
// dizre.stop()
// dizre.reverse()

Number()
Number()
// Number(data)

let data = new Date("2025-01-01")

console.log(data.toDateString())