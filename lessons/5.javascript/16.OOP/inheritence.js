// parent(p1)(propreties,methods)
//   | 
// child(c1,p2)(propreties,methods ,parent[propreties,methods])
//   |
// child(c2,p3)
//   |
// child(c3)
// // single level, multi-level

class parent {
    data;
    constructor(data) {
        this.data = data
    }
    doParentThings() {
        console.log("this is from parent class !")
    }
}

class child extends parent {
    childData = 456
    constructor(data) {
        super(data)
    }
    doChildThings() {
        console.log("this is child class method !")
    }
}

class child2 extends child {
    childData2 = 789
    constructor(data) {
        super(data)
    }
    doChild2Things() {
        console.log("this is child class method  2!")
    }
}

// let obj1 = new parent()

// console.log(obj1.data)
// obj1.doParentThings()

let obj1 = new child2(1000)

console.log(obj1.data)
obj1.doParentThings()
console.log(obj1.childData)
obj1.doChildThings()