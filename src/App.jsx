import './App.css'
import InputContainer from './InputContainer'
import TodoContainer from './TodoContainer'
import React,{useState} from 'react'
function App() {
const [inputVal,setInputVal]=useState('')
const [todos,setTodos]=useState([]);

function writeTodo(e){ 
    setInputVal(e.target.value)
}
function addTodo(){
  if(inputVal!=''){
    setTodos((prevTodos) => [...prevTodos , inputVal])
    setInputVal('')
  }
}
function delTodo(todoIndex){
  setTodos((prevTodos)=> prevTodos.filter((prevTodos,prevTodoIndex)=> {
    return prevTodoIndex!=todoIndex
  }))
}
  return (
    
      <main>
      <h1>To Do List</h1>
      <InputContainer inputVal={inputVal} writeTodo={writeTodo} addTodo= {addTodo}/>
      <TodoContainer todos={todos} delTodo={delTodo}/>
      
    </main>
    
  )
}

export default App
