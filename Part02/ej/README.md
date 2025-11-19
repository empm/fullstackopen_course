# 2.15*: La Agenda Telefónica paso 10

## Creamos en la API un nuevo endpoint con metodo `PUT`

```js
// 4. Modify person's phone
const modifyPhone = (id, obj) => {
    const req = axios.put(`${endpoint}/${id}`, obj)
    return req.then(res => res.data)
}
```

## Añadimos una variable

Donde guardaremos el resultado de si existe alguna persona con ese nombre

```jsx
const buscarPorNombre = persons.some(p => p.name === newPerson.name)
```

Añadimos otra donde nos devuelva el objeto de la persona, para así luego obtener el `id`

```jsx
const obtenerPersona = persons.find(p => p.name === newPerson.name)
```

Por último llamamos al metodo de la api para modificar y preguntamos al usuario si realmente quiere hacerlo

```jsx
if (window.confirm(`Quieres modificar el numero de ${newName}`)) {
          api.modifyPhone(obtenerPersona.id, newPerson)
            .then(updatedPerson => {
              setPersons(persons.map(p =>
                p.id === obtenerPersona.id ? updatedPerson : p)
              )
            })
}
```

---
## Funcion completa `addPerson()`

```jsx
// Funcion onSubmit add person
  const addPerson = (e) => {
    e.preventDefault()

    const newPerson = { name: newName, number: newPhone }

    const buscarPorNombre = persons.some(p => p.name === newPerson.name)
    const obtenerPersona = persons.find(p => p.name === newPerson.name)

    // Si tiene el mismo nombre
      if (buscarPorNombre) {
        // Si tiene distinto telefono
        if (window.confirm(`Quieres modificar el numero de ${newName}`)) {
          api.modifyPhone(obtenerPersona.id, newPerson)
          .then(updatedPerson => {
            // Actualizar el estado con la persona modificada
            setPersons(
              persons.map(p =>
                p.id === obtenerPersona.id ? updatedPerson : p
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
  ```