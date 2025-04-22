import './App.css'
import InputContainer from './InputContainer'
import TodoContainer from './TodoContainer'
import React,{useState} from 'react'
function App() {
const [inputVal,setInputVal]=useState('')
const [todos,setTodos]=useState([]);
const [isEditing, setIsEditing] = useState(false)
  const [currentEditIndex, setCurrentEditIndex] = useState(null)

function writeTodo(e){ 
    setInputVal(e.target.value)
}
function addTodo(){
  if (inputVal !== '') {
    if (isEditing) {
      // Update existing todo
      const updatedTodos = [...todos]
      updatedTodos[currentEditIndex] = inputVal
      setTodos(updatedTodos)
      setIsEditing(false)
      setCurrentEditIndex(null)
    } else {
      setTodos((prevTodos) => [...prevTodos, inputVal])
    }
    setInputVal('')
  }
}
function delTodo(todoIndex){
  setTodos((prevTodos)=> prevTodos.filter((prevTodos,prevTodoIndex)=> {
    return prevTodoIndex!=todoIndex
  }))
}
function editTodo(index) {
  setInputVal(todos[index])
  setIsEditing(true)
  setCurrentEditIndex(index)
}
  return (
    
      <main>
      <h1>To Do List</h1>
      <InputContainer inputVal={inputVal} writeTodo={writeTodo} addTodo= {addTodo} isEditing={isEditing}/>
      <TodoContainer todos={todos} delTodo={delTodo} editTodo={editTodo}/>
      
    </main>
    
  )
}

export default App
