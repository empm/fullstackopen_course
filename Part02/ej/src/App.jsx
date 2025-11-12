import { useState, useEffect } from 'react'
import axios from 'axios'
import api from './services/api'

// Componente para visualizar lista de telefono
const MostrarPersona = ({ name, phone }) => <p>{name} - {phone}</p>

const Search = ({ newSearchValue, handleChangeSearch }) => {
  return (
    <input value={newSearchValue} type="search" name="search" id="search" placeholder="Name..." onChange={handleChangeSearch} />
  )
}

const Form = ({ addPerson, newNameValue, newPhoneValue, handleChangeName, handleChangePhone }) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        Name: <input value={newNameValue} onChange={handleChangeName} /> <br />
        Phone: <input value={newPhoneValue} onChange={handleChangePhone} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const endpoint = 'http://localhost:3002/persons'

  // form name
  const handleChangeName = (e) => {
    setNewName(e.target.value)
  }

  // form phone
  const handleChangePhone = (e) => {
    setNewPhone(e.target.value)
  }

  const handleChangeSearch = (e) => {
    setNewSearch(e.target.value)
  }

  // Funcion que guarda el array que devuelve `getAll()` en el componente `persons`.
  const hook = () => {
    api.getAll()
    .then(data => setPersons(data))
  }
  useEffect(hook, [])

  // Esta es la misma sintaxis que la linea anterior
  // useEffect(() => api.getAll().then(data => setPersons(data)))

  const contactToShow = !newSearch
    ? persons
    : persons.filter(p => p.name.toLowerCase().includes(newSearch))

  // Funcion onSubmit
  const addPerson = (e) => {
    e.preventDefault()
    const newPerson = { name: newName, number: newPhone, id: persons.length + 1 }
    // el id: podríamos evitarlo, pero prefiero que se formatee

    if (persons.some(p => p.name === newPerson.name)) {
      alert(`${newPerson.name} ya está añadido a la agenda`)
    } else {
      // post para añadir nueva persona
      axios
        .post(endpoint, newPerson)
        .then(res => {
          setPersons(persons.concat(newPerson))
          console.log("Add person + info: ", res.data);
        })
    }
    setNewName('')
    setNewPhone('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search newSearchValue={newSearch} handleChangeSearch={handleChangeSearch} />
      <h2>Add a new</h2>
      <Form addPerson={addPerson} newNameValue={newName} newPhoneValue={newPhone} handleChangeName={handleChangeName} handleChangePhone={handleChangePhone} />
      <h2>Numbers</h2>
      {contactToShow.map(e =>
        <MostrarPersona key={e.id} name={e.name} phone={e.number} />
      )}
    </div>
  )
}

export default App