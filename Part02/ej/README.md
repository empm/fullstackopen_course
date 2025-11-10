Creamos un nuevo hook para almacenar el objeto de personas. 
```jsx
  const [persons, setPersons] = useState([]) /
```

Antes de la condicion de busqueda usamos useEffect y llamamos con axios
al server de la db

```jsx
  const hook = () => {
    axios
      .get('http://localhost:3002/persons')
      .then(res => {
        setPersons(res.data)
      })
  }
  useEffect(hook, [])
  ```
  