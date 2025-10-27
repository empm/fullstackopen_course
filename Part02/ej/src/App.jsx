import { useState } from 'react'

const MostrarPersona = ({ array }) => <p>Nombre: {array}</p>

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
    const newPerson = { name: newName }
    console.log("New Person.name: ", newPerson.name);
    console.log("Persons.name: ", persons.map(e => e.name));
    console.log("Persons.filer: ", persons.filter(n => n.name == "Enrique"));
    console.log("Persons.includes: ", persons.map(n => n.name.includes("Enrique")));
    /**
     * 	1.	filter() siempre devuelve un array, aunque esté vacío.
     * → Un array vacío en un if siempre se evalúa como true.
     * Por eso siempre entra al if, aunque no haya coincidencias.
     */
    
    if (persons.some(p => p.name === newPerson.name)) {
      alert(`${newPerson.name} ya está añadido a la agenda`)
    } else {
      setPersons(persons.concat(newPerson))
    }

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
        <MostrarPersona key={e.name} array={e.name} />
      )}
    </div>
  )
}

export default App