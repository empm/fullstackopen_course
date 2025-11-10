import { useState, useEffect } from 'react'
import axios from 'axios'

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
  const [persons, setPersons] = useState([]) // Creamos el array de personas (db)
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState('')

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

  // Funcion mostrar toda la lista de personas o las filtradas
  const hook = () => {
    axios
      .get('http://localhost:3002/persons')
      .then(res => {
        setPersons(res.data)
      })
  }
  useEffect(hook, [])

  const contactToShow = !newSearch
    ? persons
    : persons.filter(p => p.name.toLowerCase().includes(newSearch))

  // Funcion onSubmit
  const addPerson = (e) => {
    e.preventDefault()
    const newPerson = { name: newName, number: newPhone, id: persons.length + 1 }

    if (persons.some(p => p.name === newPerson.name)) {
      alert(`${newPerson.name} ya está añadido a la agenda`)
    } else {
      setPersons(persons.concat(newPerson))
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