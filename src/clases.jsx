class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log('Hello, my name is ' + this.name)
    }
}

const adam = new Person('Adam', 25)
adam.greet()

const bob = new Person('Bob', 30)
bob.greet()