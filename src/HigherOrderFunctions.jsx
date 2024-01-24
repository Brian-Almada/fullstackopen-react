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

let isDog = (animal) => animal.specie === 'dog'

let dogs = animals.filter(isDog)
let otherAnimals = animals.reject(isDog)

/*let dogs = []
for (let i = 0; i < animals.length; i++) {
    if (animals[i].specie === 'dog')
        dogs.push(animals[i])
}

console.log(dogs);*/
