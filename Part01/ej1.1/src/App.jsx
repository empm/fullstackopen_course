/**
 * 1.7: unicafe, paso 2
 * Amplía tu aplicación para que muestre más estadísticas sobre los comentarios recopilados: 
 * el número total de comentarios recopilados, 
 * la puntuación promedio (buena: 1, neutral: 0, mala: -1) 
 * y el porcentaje de comentarios positivos.
 */

import { use, useState } from "react"

const Boton = ({ handleClick, name }) => {
  return (
    <button onClick={handleClick}>{name}</button>
  )
}
const Estadisticas = ({estadistica, valor}) => {
  return (
    <p>{estadistica}: {valor}</p>
  )
}

const App = () => {
  const [contadorComentarioGood, setContadorGood] = useState(0)
  const [contadorComentarioNeutral, setContadorNeutral] = useState(0)
  const [contadorComentarioBad, setContadorBad] = useState(0)
  const [todosLosComentarios, setTodos] = useState(0)
  const [average, setAverage] = useState(0)

  const handleClickGood = () => { 
    setContadorGood(contadorComentarioGood + 1) 
    setTodos(todosLosComentarios + 1)
    setAverage(average+1)
  }
  const handleClickNeutral = () => { 
    setContadorNeutral(contadorComentarioNeutral + 1)
    setTodos(todosLosComentarios + 1)
    setAverage(average+0)
  }
  const handleClickBad = () => { 
    setContadorBad(contadorComentarioBad + 1) 
    setTodos(todosLosComentarios + 1)
    setAverage(average-1)
  }

  const media = average / todosLosComentarios
  const positive = ((contadorComentarioGood * 100) / todosLosComentarios)

  return (
    <div>
      <h1>Give feedback</h1>
      <Boton name='good' handleClick={handleClickGood} />
      <Boton name='neutral' handleClick={handleClickNeutral} />
      <Boton name='bad' handleClick={handleClickBad} />

      <h1>Statistics</h1>
      <Estadisticas estadistica='good' valor={contadorComentarioGood} />
      <Estadisticas estadistica='neutral' valor={contadorComentarioNeutral} />
      <Estadisticas estadistica='bad' valor={contadorComentarioBad} />
      <Estadisticas estadistica='all' valor={todosLosComentarios} />
      <Estadisticas estadistica='average' valor={media.toFixed(1)} />
      <Estadisticas estadistica='positive' valor={positive.toFixed(1) + '%'}/> 
    </div>
  )
}

export default App