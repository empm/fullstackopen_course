
const Course = ({ courseArray }) => {
  const parts = courseArray.parts // Creo un array solo de las partes
  const exercises = parts.map(e => e.exercises) // Creo un array solo del valor de los ejercicios
  console.log("Ex: ", exercises);
  const total = exercises.reduce((sum, n) => sum + n) // Devuelve sum y lo guarda en total
  // Creo una funcion reduce donde va guardando en sum el valor de cada indice n. 

  /* Esto es lo mismo aunque mas "pesado" que usando reduce
  let sum = 0
  const total2 = parts.map(e => sum += e.exercises)
  console.log("sum: ", sum)
  */

  return (
    <>
      <Header courseHeader={courseArray} />
      <Content courseText={courseArray} />
      <h3>Total of {total} exercises</h3>
    </>
  )
}
const Header = ({ courseHeader }) => {
  // console.log("Desde header: ", courseHeader);

  return (
    <>
      <h1>{courseHeader.name}</h1>
    </>
  )
}
const Content = ({ courseText }) => {
  //console.log("Desde Content: ", courseText);
  const valoresPart = courseText.parts

  return (
    <>
      {valoresPart.map(e =>
        <Part key={e.id} coursePart={e} />
      )
      }
    </>
  )
}
const Part = ({ coursePart }) => {
  return (
    <>
      <p>{coursePart.name} {coursePart.exercises}</p>
    </>
  )
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Rdux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course courseArray={course} />
}

export default App