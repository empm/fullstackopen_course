import { useState } from 'react'

const MostrarPersona = ({ name, phone }) => <p>{name} - {phone}</p>

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      phone: '040-1234567'
    }
  ])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  // form name
  const handleChangeName = (e) => {
    setNewName(e.target.value)
  }
        
  const handleChangePhone = (e) => {
    setNewPhone(e.target.value)
  }
      // form phone

  const verPersona = (e) => {
    e.preventDefault()
    const newPerson = { name: newName, phone: newPhone }

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
      <form onSubmit={verPersona}>
        <div>
          name: <input value={newName} onChange={handleChangeName} /> <br />
          phone: <input value={newPhone} onChange={handleChangePhone} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(e =>
        <MostrarPersona key={e.name} name={e.name} phone={e.phone} />
      )}
    </div>
  )
}

export default App