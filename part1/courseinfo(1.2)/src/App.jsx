const Header = (props)=> {
  return (
   <div>
    <h1>{props.course}</h1>
   </div>
  )
}

const Content = () => {
  const Part = (props) => {
    return (
      <div>
        <p>{props.part} {props.exercises}</p>
      </div>
    )
  }
  return (
    <div>
      <Part part="Fundamentals of React" exercises={10} />
      <Part part="Using props to pass data" exercises={7} />
      <Part part="State of a component" exercises={14} />
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
      <Content />
      <Total />
    </div>
  )
}

export default App