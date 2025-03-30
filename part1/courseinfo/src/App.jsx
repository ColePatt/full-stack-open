const Header = (props)=> {
  return (
   <div>
    <h1>{props.course}</h1>
   </div>
  )
}

const Content = () => {
  const content = [
    { name: 'Fundamentals of React', number: 10 },
    { name: 'Using props to pass data', number: 7 },
    { name: 'State of a component', number: 14 }
  ]

  return (
    <div>
      <p>{content[0].name} {content[0].number}</p>
      <p>{content[1].name} {content[1].number}</p>
      <p>{content[2].name} {content[2].number}</p>
    </div>
  )

}

const Total = ()=> {
  return (
    <div>
      <p>Number of exercises {10 + 7 + 14}</p>
    </div>
  )

}

const App = () => { 

  return (
    <div>
      <Header course="Half Stack application development" />
      <Content content />
      <Total />
    </div>
  )
}

export default App