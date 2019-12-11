import React from 'react'

const TodoItem = (props) => {
  const style = {
    fontStyle: 'italic',
    textDecoration: 'line-through',
    color: '#cdcdcd'
  }
  return(
  <div className="todo-item">
    <p style={props.item.completed ? style : null}>{props.item.text}</p>
    <input
      type="checkbox" 
      checked={props.item.completed}
      onChange={() => props.handleChange(props.item.id)}
    />
  </div>
  )
}
  
  export default TodoItem





  // class App extends React.Component {
  //   myownmethod() {

  //   }
  //   render() {
  //     const style = this.myownmethod()
  //     return (
  //       <div>
  //         <h1>{this.props.whatever}</h1>
  //       </div>
  //     )
  //   }
  // }