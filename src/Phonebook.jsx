import { useState } from "react";

const initialPersons = [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
]

const Phonebook = () => {
    const [persons, setPersons] = useState(initialPersons)
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filterPerson, setFilterPerson] = useState('')

    const addPerson = (e) => {
        e.preventDefault()
        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
        } else if (persons.some(person => person.number === newNumber)) {
            alert(`${newNumber} is already added to phonebook`)
        } else {
            setPersons(persons.concat({name: newName, number: newNumber, id: persons.length + 1}))
        }
    }

    const searchShowPerson = filterPerson
    ? persons.filter(person => person.name.includes((filterPerson)))
    : persons

    const handleInputChange = (e) => {
        e.preventDefault()
        setNewName(e.target.value)
    }

    const handleInputNumber = (e) => {
        e.preventDefault()
        setNewNumber(e.target.value)
    }

    const handleInputFilter = (e) => {
        e.preventDefault()
        setFilterPerson(e.target.value)
    }

    return (
        <div>
            <h1>Phonebook</h1>

            <div>
                filter shown with:
                <input
                    value= {filterPerson}
                    onChange={handleInputFilter}
                />
            </div>

            <h2>Add a new</h2>

            <form onSubmit={addPerson}>
                <div>
                    name:
                    <input
                        value={newName}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    number:
                    <input
                        value={newNumber}
                        onChange={handleInputNumber}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {searchShowPerson.map(person => <p key={person.id}>{person.name} {person.number}</p>)}
        </div>
    )
}

export default Phonebook