import React from 'react'
import Todo from './Todo'

function TodoContainer({todos, delTodo,editTodo}) {
  return (
  
          <ul className="container">
          
      {todos.map((todo, index) => (
          
        <li key={index} className="todo">
          {todo}
          <button onClick={() => editTodo(index)}>Edit</button>
          <button onClick={() => delTodo(index)}>Delete</button>
        </li>
        
      ))}
    </ul>
 
  )
}

export default TodoContainer 