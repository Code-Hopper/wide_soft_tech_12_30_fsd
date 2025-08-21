let student1 = {
    name: "amey khondekar",
    phone: 9766696550,
    status: true,
    address: "sakkaradhara nagpur",
    intrest: ["Java"],
    contactPerson: {
        name: "so and so",
        phone: 8857032120
    }
}

student1.name = "Sahil Kumar"

console.log(student1.name)
console.log(student1.phone)
console.log(student1.address)
console.log(student1.intrest)
console.log(student1.contactPerson)

for (let key in student1) {
    console.log(key + " : " + student1[key])
}

// destructure a array/object

let numbers = [1, 2, 3]

let [a, b, c] = numbers

console.log(`${a} ${b} ${c}`)

let number2 = [4, 5, 6, ...numbers]

console.log(number2)

let { name, phone } = student1

console.log(name)
console.log(phone)