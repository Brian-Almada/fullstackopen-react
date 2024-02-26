import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contador from './Contador.jsx'
import Clicker from './Clicks.jsx'
import Callbacks from './callbacks.jsx'
import Unicafe from './Unicafe.jsx'
import Work from './Work.jsx'
import Listado from './Listado.jsx'
import NoteApp from './NoteApp.jsx'
import Phonebook from './Phonebook.jsx'
import axios from 'axios'

const promise = axios.get('http://localhost:3001/notes')
promise.then(response => {
    console.log(response)  
})
console.log(promise)

const promise2 = axios.get('http://localhost:3001/foo nbar')
console.log(promise2)

ReactDOM.createRoot(document.getElementById('root')).render(<Phonebook />)
