import React from "react";
import ReactDOM from 'react-dom'
import Note from './components/Note'

const notes = [
    {
        id: 1,
        content: 'HTML in easy',
        date: '2019-05-30T17:30:31.098Z',
        important: true
    },
    {
        id: 2,
        content: 'Browser can execute only JavaScript',
        date: '2019-05-30T18:39:34.091Z',
        important: false
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        date: '2019-05-30T19:20:14.298Z',
        important: true
    }
]

const Notex = ({ notes }) => {

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map(note => (
                    <Note key={note.id} note={note}/>
                ))}
            </ul>
        </div>
    )
}

ReactDOM.render(<Notex notes={notes} />, document.getElementById('root'))

console.log(notes)

//para renderizar hay que cambiar la ruta de src en index.html