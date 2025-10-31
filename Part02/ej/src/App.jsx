import { useState } from 'react'

// Componente para visualizar lista de telefono
const MostrarPersona = ({ name, phone }) => <p>{name} - {phone}</p>

const Search = ({ newSearchValue, handleChangeSearch}) => {
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
  // List
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

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
      <Search newSearchValue={newSearch} handleChangeSearch={handleChangeSearch}/>
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