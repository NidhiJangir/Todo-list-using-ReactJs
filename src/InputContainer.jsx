import React from 'react'

function InputContainer({inputVal, writeTodo, addTodo}) {
  return (
    <div className="input-container">
        <input type='text' placeholder='Add a task' value={inputVal} onChange={writeTodo}></input>
        <button onClick={addTodo}>+</button>
      </div>
  )
}

export default InputContainer