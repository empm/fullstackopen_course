import { useState } from 'react'

const MostrarPersona = ({array}) => <p>Nombre: {array}</p>

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleChange = (e) => {
    setNewName(e.target.value)
  }
  const verPersona = (e) => {
    // No quiero que se actualice
    e.preventDefault()
    const newPerson = { name: newName } // esta mierda es lo que hacia que no saliera
    /* Yo estaba añadiendo como si fuera un array y no un objeto con estructura name: */
    setPersons(persons.concat(newPerson)) // se usa concat y no push porque push modifica el original (un estado) y concat hace copia
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={verPersona}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(e => 
        <MostrarPersona key={e.name} array={e.name}/>
      )}
    </div>
  )
}

export default App