/**
 * 1.10: unicafe paso 5
 * Continuemos refactorizando la aplicación. Extrae los siguiente dos componentes:
 * Button para definir los botones utilizados para enviar comentarios
 * StatisticLine para mostrar una única estadística, por ejemplo, la puntuación media.
 * 
 * Para ser claros: el componente StatisticLine siempre muestra una única estadística, lo que significa que la aplicación utiliza varios componentes para representar todas las estadísticas:
 */

import { use, useState } from "react"

/* Componente Boton, funcion onClick + texto mostrado dentro del boton. Independiente de la app */
const Boton = ({ handleClick, text }) => {
  return (<button onClick={handleClick}>{text}</button>)
}
/* Componente BotonContador, recibe funciones dependiendo los comentarios y pinta botones */
const BotonContador = ({contadorGood, contadorNeutral, contadorBad}) => {
  return (
    <div>
      <Boton handleClick={contadorGood} text="good" />
      <Boton handleClick={contadorNeutral} text="neutral" />
      <Boton handleClick={contadorBad} text="bad" />
    </div>
  )
}

/* Muestra un texto y un valor. Si el texto es 'positive' muestra un caracter de % */
const StatisticLine = ({ text, valor }) => {
  if (text === 'positive') {
    return (<p>{text}: {valor} %</p>)
  } else {
    return (<p>{text}: {valor}</p>)
  }
}

/* Componente estadisticas, gestiona los valores llama a staticline */
/* De esta forma, App solo llama una vez a estatistics y le pasa todos los valores */
const Statistics = ({ valorGood, valorNeutral, valorBad }) => {
  const all = valorGood + valorNeutral + valorBad
  const average = (valorGood - valorBad) / all
  const positive = ((valorGood * 100) / all)

  /* Si hay comentarios que se muestren */
  if (all != 0) {
    return (
      <div>
        <StatisticLine text='good' valor={valorGood} />
        <StatisticLine text='neutral' valor={valorNeutral} />
        <StatisticLine text='bad' valor={valorBad} />
        <StatisticLine text='all' valor={all} />
        <StatisticLine text='average' valor={average.toFixed(2)} />
        <StatisticLine text='positive' valor={positive.toFixed(2)} />
      </div>
    )
    /* Si no hay comentarios, que indique que no hay feedback */
  } else {
    return (<p>No feedback given</p>)
  }
}

/* Componente main - logica de negocio */
const App = () => {
  const [contadorComentarioGood, setContadorGood] = useState(0)
  const [contadorComentarioNeutral, setContadorNeutral] = useState(0)
  const [contadorComentarioBad, setContadorBad] = useState(0)

  const handleClickGood = () => setContadorGood(contadorComentarioGood + 1)
  const handleClickNeutral = () => setContadorNeutral(contadorComentarioNeutral + 1)
  const handleClickBad = () => setContadorBad(contadorComentarioBad + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <BotonContador contadorGood={handleClickGood} contadorNeutral={handleClickNeutral} contadorBad={handleClickBad}/>

      <h1>Statistics</h1>
      <Statistics valorGood={contadorComentarioGood} valorNeutral={contadorComentarioNeutral} valorBad={contadorComentarioBad} />

    </div>
  )
}

export default App