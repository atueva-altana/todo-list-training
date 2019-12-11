import React from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todo: todosData
    }
  }
  
  handleChange = (id) => {
    console.log("test")
    this.setState( prevState => {
      const newToDos = prevState.todo.map(obj => {
        if (obj.id === id) {
          obj.completed = !obj.completed
        }
        return obj
      })
      return {
        todo: newToDos
      }
      
    })
  }

  render () {
    // const todoItems = todosData.map(item => <TodoItem key ={item.id} item = {item} />)
    
    return(
        <div className ="todo-list">
          {
            this.state.todo.map(obj => <TodoItem key = {obj.id} item={obj} handleChange = {this.handleChange} />) 
          }
        </div>
    )
  }
}




export default App
