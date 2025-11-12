Creo una nueva variable
```jsx
const endpoint = 'http://localhost:3002/persons'
```

Al get, le cambio la url por el valor de `endpoint`

Creo un post para añadir a una nueva persona
```jsx
   axios
        .post(endpoint, newPerson)
        .then(res => {
          setPersons(persons.concat(newPerson))
          console.log("Add person + info: ", res.data);
        })
```

Funcion completa:
```jsx
const addPerson = (e) => {
    e.preventDefault()
    const newPerson = { name: newName, number: newPhone, id: persons.length + 1}
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
  ```
