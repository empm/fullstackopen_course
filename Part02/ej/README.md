# 2.13: La Agenda Telefónica paso 8
> Extrae el código que maneja la comunicación con el backend en su propio módulo siguiendo el ejemplo mostrado anteriormente en esta parte del material del curso.

1. Creamos el archivo `src/services/api.js`, se puede llamar `persons.js` 
2. Creamos las dos funcions `GET` y `POST`

```jsx
import axios from "axios";

const endpoint = 'http://localhost:3002/persons'

const getAll = () => {
    const req = axios.get(endpoint)
    return req.then(res => res.data)
}

const addNew = obj => {
    const req = axios.post(endpoint, obj)
    return req.then(res => res.data)
}
export default {getAll, addNew}
```

3. En el componente `App` modificamos las funciones

> GET

```jsx
  const hook = () => {
    api.getAll()
    .then(data => setPersons(data))
  }
  useEffect(hook, [])
```

> [!TIP]
> Cuando usaba el `then` estaba intentando usar data.data en vez solo data.

Si no tuviera la función en otro archivo la función sería:

```jsx
axios
    .get(baseURL)
    .then(res => res.data)
```

Pero como res ya está devolviendo el valor, no hace falta la notación punto.

---
> POST

```jsx
axios
    .post(endpoint, newPerson)
    .then(res => {
        setPersons(persons.concat(newPerson))
    })
```
