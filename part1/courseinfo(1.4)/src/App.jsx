const App = () => {
  
  const Header = () => {
    return (
      <h1>{course}</h1>
    )
  }

  const Content = () => {
    return (
      <><p>{parts[0].name} {parts[0].exercises}</p><p>{parts[1].name} {parts[1].exercises}</p><p>{parts[2].name} {parts[2].exercises}</p></>
    )
  }

  const Total = () => {
    const a = parts[0].exercises

    return (
      <p>{Total}</p>
    )
  }

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
      <Header />
      <Content />
      <Total />
    </div>
  )
}

export default App