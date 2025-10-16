/**
 * ## 📣 Ejercicios 1.12 a 1.14 — Anécdotas (más allá de Unicafe)
 * A continuación, una breve visión general:
 * - **1.12**: Muestra una anécdota aleatoria al presionar un botón.  
 * - **1.13**: Permite votar por la anécdota actual (gestionar array de votos).  
 * - **1.14**: Muestra la anécdota con más votos.
 * 
 * **Lo esencial a aprender:**
 * 
 * - Uso de arrays y objetos como parte del estado.  
 * - Actualización inmutable del estado (clonar arrays/objetos antes de modificar).  
 * - Encontrar el índice con el voto máximo.  
 * - Lógica para selección aleatoria y conteo máximo.
 */

import { use, useState } from "react"

/* Componente Boton reutilizado */
const Boton = ({ handleClick, text }) => {
  return (<button onClick={handleClick}>{text}</button>)
}

const App = () => {
  const [selected, setSelected] = useState(0)

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const siguiente = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  };

  const puntuar = () => {
    const copy = [...votes]
    copy[selected] += 1;
    setVotes(copy)
    console.log("id ", selected, " voto: ", copy[selected]);
    console.log(copy);

  }

  return (
    <div>
      {anecdotes[selected]}<br />
      <p>Has {votes[selected]} votes</p>
      <Boton handleClick={puntuar} text="votar" />
      <Boton handleClick={siguiente} text="Siguiente" />
    </div>
  )

}

export default App