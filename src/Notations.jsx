import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'


const Notex = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('a new note...')
    const [showAll, setShowAll] = useState(true)

    const hook = () => {
        console.log('effect')
        axios
            .get('http://localhost:3001/notes')
            .then(response => {
                console.log('promise fulfilled')
                setNotes(response.data)
            })
    }
    useEffect(hook, [])

    console.log('render', notes.length, 'notes')

    const addNote = (e) => {
        e.preventDefault()
        const noteObject = {
            content: newNote,
            important: Math.random() > 0.5,
            id: notes.length + 1
        }

        axios
            .post('http://localhost:3001/notes', noteObject)
            .then(response => {
                console.log(response)
            })
        /*setNotes(notes.concat(noteObject))
        setNewNote('')*/
    }

    const handleNoteChange = (event) => {
        setNewNote(event.target.value)
    }

    const noteToShow = showAll
        ? notes
        : notes.filter(note => note.important === true)

    return (
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick= {() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all'}
                </button>
            </div>
            <ul>
                {noteToShow.map(note =>
                    <Note key={note.id} note={note}/>
                )}
            </ul>
            <form   onSubmit={addNote}>
                <input
                    value={newNote}
                    onChange={handleNoteChange}
                />

                <button type='submit'>save</button>
            </form>
        </div>
    )
}

export default Notex
