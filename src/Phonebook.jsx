import { useState } from "react";

const Phonebook = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas'},
    ])
    const [newName, setNewName] = useState('')

    const handleInputChange = (e) => {
        e.preventDefault()
        setNewName(e.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form>
                <div>
                    name:
                    <input
                        value={newName}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>debug: {newName}</div>
        </div>
    )
}

export default Phonebook