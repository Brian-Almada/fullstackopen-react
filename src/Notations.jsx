import React from 'react'
import Note from './components/Note'


const Notex = ({notes}) => {

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map(note =>
                    <Note key={note.id} note={note}/>
                )}
            </ul>
        </div>
    )
}

export default Notex
//para renderizar hay que cambiar la ruta de src en index.html