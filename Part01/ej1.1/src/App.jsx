/**
 * 1.3: Información del Curso, paso 3
 * Avancemos para usar objetos en nuestra aplicación. 
 * Modifica las definiciones de las variables del componente App 
 * de la siguiente manera y también refactoriza la aplicación para que siga funcionando:
 */


const Header = (props) => {
  return (
      <h1>{props.course}</h1>
  );
};

const Content = (props) => {
  return (
    <>
      <Part part={props.part1.name} exercise={props.part1.exercises} />
      <Part part={props.part2.name} exercise={props.part2.exercises} />
      <Part part={props.part3.name} exercise={props.part3.exercises} />
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercise}</p>
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {props.ex1.exercises + props.ex2.exercises + props.ex3.exercises}
      </p>
    </>
  );
};

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercise1={part1} part2={part2} exercise2={part2} part3={part3} exercise3={part3} />
      <Total ex1={part1} ex2={part2} ex3={part3}/>
    </div>
  )
}

export default App;