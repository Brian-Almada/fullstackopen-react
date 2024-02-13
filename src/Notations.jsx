import React from 'react'
import { useState } from 'react'
import Note from './components/Note'


const Notex = (props) => {
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState('a new note...')

    const addNote = (e) => {
        e.preventDefault(
            console.log('button clicked', e.target)
        )
    }

    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
      }

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map(note =>
                    <Note key={note.id} note={note}/>
                )}
            </ul>
            <form onSubmit={addNote}>
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
