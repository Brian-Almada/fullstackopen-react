import axios from 'axios'
import React, { useState, useEffect } from 'react';


const PromiseAxios = () => {

    const [notes, setNotes] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:3001/notes')
            .then(response => {
                setNotes(response.data)
            })
            .catch(error => {
                console.log('Error', error)
            })
    })


    return (
        <div>
            {notes && (
                <ul>
                    {notes.map(note => (
                        <li key={note.id}>{note.content}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default PromiseAxios
