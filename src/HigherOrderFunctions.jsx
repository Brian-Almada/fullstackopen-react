const animals = [
    { name: 'Tropo', specie: 'dog'},
    { name: 'Toto', specie: 'cat'},
    { name: 'Pepe', specie: 'carrot'},
    { name: 'Pepa', specie: 'cat'},
    { name: 'Snippet', specie: 'dog'},
    { name: 'Titi', specie: 'bird'},
    { name: 'Trote', specie: 'horse'},
    { name: 'Torto', specie: 'turtle'},
    { name: 'Numo', specie: 'fish'},
    { name: 'Meridio', specie: 'dog'}
]

// Higher order functions => Filter //

let isDog = (animal) => animal.specie === 'dog'

let dogs = animals.filter(isDog)
let otherAnimals = animals.reject(isDog)

/*let dogs = []
for (let i = 0; i < animals.length; i++) {
    if (animals[i].specie === 'dog')
        dogs.push(animals[i])
}

console.log(dogs);*/
//-----------------------------------------------------------------//

// Higher order functions => Map //

let names = animals.map((animal) => animal.name)


/*let names = []
for (let i = 0; i < animals.length; i++) {
    return names.push(animals[i].name)
}
*/
console.log(names)
