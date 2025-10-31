En el map para mostrar a las personas, en vez del array de personas, creamos una variable que muestre todas las personas mientras el campo de la búsqueda este vacío.
al no ser igual, muestra todos los usuarios (significa que no estamos buscando nada)
Pero, al empezar a buscar, ahi filtramos:

1. Creamos un nuevo estado donde guardar lo que escribimos en search

```jsx
const [newSearch, setNewSearch] = useState('')
```

2. Creamos un nuevo `onChange` lo que ocurre al escribir

```jsx
const handleChangeSearch = (e) => setNewSearch(e.target.value)
```

3. Creamos una nueva variable que muestre las personas mientras `newSearch` esté vacío.
- Si está vacío, muestra todas las personas `? persons`
- Si escribes algo, filtra los contactos que coinciden en búsqueda en el campo search
`: persons.filter(p => p.name.toLowerCase().includes(newSearch))`

```jsx
const contactToShow = !newSearch 
? persons
: persons.filter(p => p.name.toLowerCase().includes(newSearch))
```

4. Mostramos `contactToShow` en vez del map de persons.
- Usamos `id` porque la lista de personas tiene clave id

```jsx
{contactToShow.map(e =>
    <MostrarPersona key={e.id} name={e.name} phone={e.number} />
)}
```

5. Al tener `id` el constructor de personas, usamos un 'sumador' de id al añadir un nuevo contacto.

```jsx
const newPerson = { name: newName, number: newPhone, id: persons.length + 1}
```

## Resuelto:

```jsx
import { useState } from 'react'

// Componente para visualizar lista de telefono
const MostrarPersona = ({ name, phone }) => <p>{name} - {phone}</p>

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
    // console.log("NewSearch: ", newSearch);
    // console.log("Filter: ", persons.filter(p => p.name.toLowerCase().includes(newSearch)));
  }

  // Funcion mostrar toda la lista de personas o las filtradas
  const contactToShow = !newSearch 
  ? persons
  : persons.filter(p => p.name.toLowerCase().includes(newSearch))

  // Funcion onSubmit
  const addPerson = (e) => {
    e.preventDefault()
    const newPerson = { name: newName, number: newPhone, id: persons.length + 1}

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
      <input value={newSearch} type="search" name="search" id="search" placeholder="Name..." onChange={handleChangeSearch} />
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleChangeName} /> <br />
          Phone: <input value={newPhone} onChange={handleChangePhone} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {contactToShow.map(e =>
        <MostrarPersona key={e.id} name={e.name} phone={e.number} />
      )}
    </div>
  )
}

export default App
```