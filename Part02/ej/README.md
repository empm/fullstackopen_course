# 2.14: La Agenda Telefónica paso 9

Metodo en `api`:

```jsx
const deletePerson = (id) => {
    const req = axios.delete(`${endpoint}/${id}`)
    return req.then(res => res.data)
}
```

En Mostrar persona, añadimos un boton para eliminar cada una de las personas.
Cada persona tendra un boton para ser eliminada

```jsx
const MostrarPersona = ({ name, phone, handleDelete }) => <p>{name} - {phone} <button onClick={handleDelete}>delete</button></p>
```

Este boton recibe una función por parametro

```jsx
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
```

> [!TIP]
> Eliminamos tambien a la persona dentro del hook asi se refresque y ya no aparezca

Y por ultimo le pasamos a la funcion el objeto personas para eliminar por id
