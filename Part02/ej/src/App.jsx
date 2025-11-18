import { useState, useEffect } from 'react'
import api from './services/api'

// Componente para visualizar lista de telefono
const MostrarPersona = ({ name, phone, handleDelete }) => <p>{name} - {phone} <button onClick={handleDelete}>delete</button></p>

// Componente formulario de busqueda
const Search = ({ newSearchValue, handleChangeSearch }) => <input value={newSearchValue} type="search" name="search" id="search" placeholder="Name..." onChange={handleChangeSearch} />

// Componentes formulario añadir a persona
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

  // form name
  const handleChangeName = (e) => setNewName(e.target.value)

  // form phone
  const handleChangePhone = (e) => setNewPhone(e.target.value)

  // form search
  const handleChangeSearch = (e) => setNewSearch(e.target.value)

  // GET
  const hookGet = () => {
    api.getAll()
      .then(data => setPersons(data))
  }
  useEffect(hookGet, [])

  const contactToShow = !newSearch
    ? persons
    : persons.filter(p => p.name.toLowerCase().includes(newSearch))

  // Funcion onSubmit add person
  const addPerson = (e) => {
    e.preventDefault()

    const newPerson = { name: newName, number: newPhone }

    const buscarPorNombre = persons.some(p => p.name === newPerson.name)
    const buscarPorTelefono = persons.some(p => p.number === newPerson.number)
    const obtenerPersona = persons.find(p => p.name === newPerson.name)

    // Si tiene el mismo nombre
    // TODO: que el nombre y el telefono sea de la misma persona
    if (buscarPorNombre && !buscarPorTelefono) {

      // Si tiene distinto telefono
      
        if (window.confirm(`Quieres modificar el numero de ${newName}`)) {
          api.modifyPhone(obtenerPersona.id, newPerson)
          .then(updatedPerson => {
          // Actualizar el estado con la persona modificada
          setPersons(
            persons.map(p =>
              p.id === personaExistente.id ? updatedPerson : p
            )
          )
        })
        }
      
    } else {
      api.addNew(newPerson)
        .then(p => setPersons(persons.concat(p)))
    }
    setNewName('')
    setNewPhone('')
  }

  // Funcion onClick delete person
  const deletePerson = (p) => {
    console.log("Objeto persona: ", p)
    console.log("Nombre : ", p.name)
    console.log("Id : ", p.id)

    if (window.confirm("Do you want delete " + p.name + "?")) {
      // Eliminar del backen
      api.deletePerson(p.id)
        .then(res => console.log("Persona eliminada: ", res))
      // Eliminar del front (hook) - Con esto se actualiza el front sin refrescar
      setPersons(persons.filter(per => per.id !== p.id))
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Search newSearchValue={newSearch} handleChangeSearch={handleChangeSearch} />
      <h2>Add a new</h2>
      <Form addPerson={addPerson} newNameValue={newName} newPhoneValue={newPhone} handleChangeName={handleChangeName} handleChangePhone={handleChangePhone} />
      <h2>Numbers</h2>
      {contactToShow.map(e =>
        <MostrarPersona key={e.id} name={e.name} phone={e.number} handleDelete={() => deletePerson(e)} />
      )}
    </div>
  )
}

export default App