
const Course = ({ courseArray }) => {
  console.log("Parametro: ", courseArray);

  return (
    <>
      <Header courseHeader={courseArray} />
      <Content courseText={courseArray}/>
    </>
  )
}
const Header = ({ courseHeader }) => {
  console.log("Desde header: ", courseHeader);
  
  return (
    <>
      <h1>{courseHeader.name}</h1>
    </>
  )
}
const Content = ({courseText}) => {
  console.log("Desde Content: ", courseText);
  const valoresPart = courseText.parts

  return (
    <>
      {valoresPart.map(e => 
          <Part key={e.id} coursePart={e}/>
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
      }
    ]
  }

  return <Course courseArray={course} />
}

export default App