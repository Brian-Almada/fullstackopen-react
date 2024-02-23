import { useState } from "react";

const initialPersons = [
    {
        name: 'Arto Hellas',
        number: 157187777,
        id: 1
    }
]

const Phonebook = () => {
    const [persons, setPersons] = useState(initialPersons)
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

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

    const handleInputChange = (e) => {
        e.preventDefault()
        setNewName(e.target.value)
    }

    const handleInputNumber = (e) => {
        e.preventDefault()
        setNewNumber(e.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
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
            {persons.map(person => <p key={person.id}>{person.name} {person.number}</p>)}
            <div>debug: {newName}</div>
        </div>
    )
}

export default Phonebook