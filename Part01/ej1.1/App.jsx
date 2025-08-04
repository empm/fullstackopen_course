/*
Ej 1.1
Desafortunadamente, toda la aplicación está en el mismo componente. 
Refactoriza el código para que conste de tres componentes nuevos: Header, Content y Total. 
*/
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};
const Content = (props) => {
  return (
    <>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </>
  );
};
/* 
 Ej 1.2
 Refactoriza el componente Content para que no muestre ningún nombre de partes o su número de ejercicios por sí mismo. 
 En su lugar, solo representa tres componentes Part de los cuales cada uno representa el nombre y el número de ejercicios de una parte.
*/
const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercise}
      </p>
    </>
  );
};
const ContentRefactor = (props) => {
  return (
    <>
      <Part part={props.part1} exercise={props.exercises1} />
      <Part part={props.part2} exercise={props.exercises2} />
      <Part part={props.part3} exercise={props.exercises3} />
    </>
  );
};
const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </>
  );
};
/*
Ej 1.2
const App = () => {
  // const-definitions
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
      <ContentRefactor part1={part1} exercises1={part1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total exercises3={exercises3} exercises1={exercises1} exercises2={exercises2} />
    </div>
  )
}
*/


/**
 * Ej 1.3
 * Información del Curso, paso 3
 * Avancemos para usar objetos en nuestra aplicación. 
 * Modifica las definiciones de las variables del componente App de la siguiente manera 
 * y también refactoriza la aplicación para que siga funcionando:


const App = () => {
  // const-definitions
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };
  return (
    <div>
      <Header course={course} />
      <ContentRefactor
        part1={part1.name}
        exercises1={part1.exercises}
        part2={part2.name}
        exercises2={part2.exercises}
        part3={part3.name}
        exercises3={part3.exercises}
      />
      <Total
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />
    </div>
  );
};
*/


/*
 * 1.4: Información del Curso paso 4
Coloca los objetos en un array. 
Modifica las definiciones de las variables de App de la siguiente forma 
y modifica las otras partes de la aplicación que sean necesarias 
para que continue funcionando:
*/

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <ContentRefactor
        part1={parts[0].name}
        exercises1={parts[0].exercises}
        part2={parts[1].name}
        exercises2={parts[1].exercises}
        part3={parts[2].name}
        exercises3={parts[2].exercises}
      />
      <Total
        exercises1={parts[0].exercises}
        exercises2={parts[1].exercises}
        exercises3={parts[2].exercises}
    />
    </div>
  )
}
export default App;
