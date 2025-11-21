import { useState, useEffect } from 'react'
import api from './services/api'
import './styles.css'

/* Componente para manejar errores */
const Notification = ({ message, type }) => {

  if (message === null) {
    return null
  }

  if (type === "succes") {
    return (
      <div className='succes'>
        {message}
      </div>
    )
  }
  if (type === "error") {
    return (
      <div className='error'>
        {message}
      </div>
    )
  }
}
/* Componente para visualizar lista de telefono */
const MostrarPersona = ({ name, phone, handleDelete }) => <p>{name} - {phone} <button onClick={handleDelete}>delete</button></p>

/* Componente formulario de busqueda */
const Search = ({ newSearchValue, handleChangeSearch }) => <input value={newSearchValue} type="search" name="search" id="search" placeholder="Name..." onChange={handleChangeSearch} />

/* Componentes formulario añadir a persona */
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

/* Componente principal APP */
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState()
  // Manejar errores
  const [errorMessage, setErrorMessage] = useState(null)
  const [typeMessage, setTypeMessage] = useState('')

  const seconds = 5000

  // form name
  const handleChangeName = (e) => setNewName(e.target.value)

  // form phone
  const handleChangePhone = (e) => setNewPhone(e.target.value)

  // form search
  const handleChangeSearch = (e) => setNewSearch(e.target.value)

  // GET all persons
  const hookGet = () => {
    api.getAll()
      .then(data => setPersons(data))
  }
  useEffect(hookGet, [])

  // Filter search
  const contactToShow = !newSearch
    ? persons
    : persons.filter(p => p.name.toLowerCase().includes(newSearch))

  // Funcion onSubmit add person
  const addPerson = (e) => {
    e.preventDefault()

    // Person constructor
    const newPerson = { name: newName, number: newPhone }

    const buscarPorNombre = persons.some(p => p.name === newPerson.name)
    const obtenerPersona = persons.find(p => p.name === newPerson.name)

    // Si tiene el mismo nombre
    if (buscarPorNombre) {
      // Si tiene distinto telefono
      if (window.confirm(`Quieres modificar el numero de ${newName}`)) {
        // Modificar el numero de una persona y actualizar su estado
        api.modifyPhone(obtenerPersona.id, newPerson)
          .then(updatedPerson => {
            setPersons(persons.map(p => p.id === obtenerPersona.id ? updatedPerson : p))
            setErrorMessage(`${newName} is modify succesfully`)
            setTypeMessage("succes")
            setTimeout(() => {
              setErrorMessage(null)
            }, seconds)
          })
          /*.catch(err => {
            // Mensaje que aparece en pantalla
            setErrorMessage(`${obtenerPersona.name} ha sido eliminado o no se encuentra`)
            setTypeMessage("error")
            
            // Espera tres segundos y lo setea a null para no mostrar nada
            setTimeout(() => {
              setErrorMessage(null)
            }, 3000)
          })
            */
      }

    } else {
      // Añadir una nueva persona a la db y lista
      api.addNew(newPerson)
        .then(p => {
          setPersons(persons.concat(p))
          setErrorMessage(`Added ${newPerson.name} to phonebook`)
          setTypeMessage("succes")
          setTimeout(() => { setErrorMessage(null) }, seconds)
        })
        /*.catch(err => {
          setErrorMessage('ERROR')
        })
          */
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
        .then(res => {
          console.log("Persona eliminada: ", res)
          // Eliminar del front (hook) - Con esto se actualiza el front sin refrescar
          setPersons(persons.filter(per => per.id !== p.id))
          setErrorMessage(`${p.name} was deleted succesfully`)
          setTypeMessage("succes")
          setTimeout(() => { setErrorMessage(null) }, seconds)
        })
        /*.catch(err => {
            setErrorMessage(`${p.name} ha sido eliminado o no se encuentra`)
            setTypeMessage("error")
            setTimeout(() => { setErrorMessage(null) }, seconds)
        })
            */
            
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} type={typeMessage} />
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