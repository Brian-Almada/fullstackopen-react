import { useState } from "react";

const initialPersons = [
    {
        name: 'Arto Hellas'
    }
]

const Phonebook = () => {
    const [persons, setPersons] = useState(initialPersons)
    const [newName, setNewName] = useState('')

    const addPerson = (e) => {
        e.preventDefault()
        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            setPersons(persons.concat({name: newName}))
        }
    }

    const handleInputChange = (e) => {
        e.preventDefault()
        setNewName(e.target.value)
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
                    <input />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(person => <p key={person.name}>{person.name}</p>)}
            <div>debug: {newName}</div>
        </div>
    )
}

export default Phonebook