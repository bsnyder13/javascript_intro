// Objects

/*
syntax:
    {
        k1: v1,
        k2: v2
    }

keys can be in " " but don't have to be if they are valid var names, 
i.e. they don't start with a "number" or have invalid chars, or has spaces

 */
let obj1 = {
    name: "Justin"
}

let obj2 = {
    "name": "Amit"
}
// There are two ways to get things out of objects "Dot" notation and "square bracket" notation

console.log(obj1.name)
console.log(obj1["name"])

let car = {
    make: "Jeep",
    model: "Wrangler",
    year: 2020, 
    miles: 10_000,
    owners: [{name: "Amy"},{name: "Josh"}]
}
console.log(car.miles)
console.log(car["miles"])
console.log(car.owners[1]) // Objects can hold more than just primitive types

let person = {
    fName: "Justin",
    lName: "Ahmann",
    fullName: function(){
        return `${this.fName} ${this.lName}`
    },
    greet: function(greetWord){
        return `${greetWord}, ${this.fName}`
    }
}
console.log(person.fName)
console.log(person.fullName())
console.log(person.greet("Hello"))


let builderObj = {} // An empty obj
console.log(builderObj)
builderObj.name = "Justin"
builderObj["age"] = 28
builderObj.greet = function(greetWord){
    return `${greetWord}, ${this.name}`
}
console.log(builderObj)
console.log(builderObj.greet("Hello"))


// A look ahead STACKS and QUEUES
// Stacks are LIFO (last in first out)
// Queues are FIFO (first in last out)


// A look ahead at "Classes", special type of way to build an obj

class Dog {
    constructor(breed, age){
        this.breed = breed
        this.age = age
    }
}

let fido = new Dog("lab", 25)
console.log(fido.breed)


