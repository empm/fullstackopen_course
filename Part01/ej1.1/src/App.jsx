/**
 * 1.9: unicafe paso 4
 * Cambia tu aplicación para mostrar estadísticas solo una vez que se hayan recopilado los comentarios.
 */

import { use, useState } from "react"

/* Componente Boton, funcion onClick + texto mostrado dentro del boton */
const Boton = ({ handleClick, name }) => {
  return (
    <button onClick={handleClick}>{name}</button>
  )
}

/* Componente estadisticas, muestra un texto y un valor */
const Statistics = ({ estadistica, valor }) => {
  return (<p>{estadistica}: {valor}</p>)
}

/* Componente de uso explusivo cuando no hay estadisticas */
const SinStatistics = ({ estadistica, valor }) => {
  return (<p>No feedback given</p>)
}

/* Componente main - logica de negocio */
const App = () => {
  const [contadorComentarioGood, setContadorGood] = useState(0)
  const [contadorComentarioNeutral, setContadorNeutral] = useState(0)
  const [contadorComentarioBad, setContadorBad] = useState(0)
  const [todosLosComentarios, setTodos] = useState(0)
  const [average, setAverage] = useState(0)

  const handleClickGood = () => {
    setContadorGood(contadorComentarioGood + 1)
    setTodos(todosLosComentarios + 1)
    setAverage(average + 1)
  }
  const handleClickNeutral = () => {
    setContadorNeutral(contadorComentarioNeutral + 1)
    setTodos(todosLosComentarios + 1)
    setAverage(average + 0)
  }
  const handleClickBad = () => {
    setContadorBad(contadorComentarioBad + 1)
    setTodos(todosLosComentarios + 1)
    setAverage(average - 1)
  }

  const media = average / todosLosComentarios
  const positive = ((contadorComentarioGood * 100) / todosLosComentarios)

  /* Si hay comentarios, que muestre todo, si no, mostrar SinStatics */
  if (todosLosComentarios != 0) {
    return (
      <div>
        <h1>Give feedback</h1>
        <Boton name='good' handleClick={handleClickGood} />
        <Boton name='neutral' handleClick={handleClickNeutral} />
        <Boton name='bad' handleClick={handleClickBad} />

        <h1>Statistics</h1>
        <Statistics estadistica='good' valor={contadorComentarioGood} />
        <Statistics estadistica='neutral' valor={contadorComentarioNeutral} />
        <Statistics estadistica='bad' valor={contadorComentarioBad} />
        <Statistics estadistica='all' valor={todosLosComentarios} />
        <Statistics estadistica='average' valor={media.toFixed(1)} />
        <Statistics estadistica='positive' valor={positive.toFixed(1) + '%'} />
      </div>
    )
  } else {
    return (
      <div>
        <h1>Give feedback</h1>
        <Boton name='good' handleClick={handleClickGood} />
        <Boton name='neutral' handleClick={handleClickNeutral} />
        <Boton name='bad' handleClick={handleClickBad} />

        <h1>Statistics</h1>
        <SinStatistics />
      </div>
    )
  }
}

export default App