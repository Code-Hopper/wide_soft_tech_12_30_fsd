class example {
    #data = 100 // private keyword -> # (access specifier) , to create a encapsulate data``
    // setter and getter for the private
    getData() {
        return this.#data
    }
    setData(number) {
        this.#data += number
    }
    addNumbers(n1, n2) {
        console.log(n1 + n2)
    }
}

let obj = new example()

console.log(obj.data)
obj.setData(100)
console.log(obj.getData())
obj.addNumbers(1,2)
// check balanace

// bal: 50