const Course = ({ courseArray }) => {
  return (
    <>
      {courseArray.map(e => 
        <NewCourse key={e.id} all={e} />
      )}
    </>
  )
}

const NewCourse = ({ all }) => {
  const parts = all.parts
  const exercises = parts.map(e => e.exercises)
  console.log("ex: ", exercises);
  
  const total = exercises.reduce((sum, n) => sum + n)
  console.log("total: ", total);
  
  return (
    <>
      <Header courseHeader={all} />
      <Content courseText={all} /> 
      <h3>Total of {total} exercises</h3>
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
const Content = ({ courseText }) => {
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
const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courseArray={courses} />
}

export default App