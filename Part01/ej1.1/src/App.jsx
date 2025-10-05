/**
 * 1.6: unicafe, paso 1
 * Como la mayoría de las empresas, Unicafe recopila comentarios de sus clientes. 
 * Tu tarea es implementar una aplicación web para recopilar comentarios de los clientes. 
 * 
 * Solo hay tres opciones para los comentarios: good (bueno), neutral y bad(malo).
 * La aplicación debe mostrar el número total de comentarios recopilados para cada categoría. 
 * Ten en cuenta que tu aplicación debe funcionar solo durante una única sesión del navegador. 
 * Una vez que se actualice la página, los comentarios recopilados pueden desaparecer.
 */

import { use, useState } from "react"

// Empresa unicafe
// Descomposicion
const Boton = (props) => {
  const handleClick = () => props.funcion(props.valor+1)

  return (
    <button onClick={handleClick}>{props.name}</button>
  )
}
const Estadisticas = (props) => {
  return (
    <div>
      <p>{props.nombreEstadistica}: {props.valor}</p>
    </div>
  )
}

const App = () => {
  const [contadorComentarioGood, setContadorGood] = useState(0)
  const [contadorComentarioNeutral, setContadorNeutral] = useState(0)
  const [contadorComentarioBad, setContadorBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Boton name='good' funcion={setContadorGood} valor={contadorComentarioGood}/>
      <Boton name='neutral' funcion={setContadorNeutral} valor={contadorComentarioNeutral}/>
      <Boton name='bad' funcion={setContadorBad} valor={contadorComentarioBad}/>
      <h1>Statistics</h1>
      <Estadisticas nombreEstadistica='good' valor={contadorComentarioGood} />
      <Estadisticas nombreEstadistica='neutral' valor={contadorComentarioNeutral} />
      <Estadisticas nombreEstadistica='bad' valor={contadorComentarioBad} />
    </div>
  )
}

export default App