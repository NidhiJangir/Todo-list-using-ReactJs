import React from 'react'

function InputContainer({inputVal, writeTodo, addTodo,isEditing}) {
  return (
    <div className="input-container">
        <input type='text' placeholder='Add a task' value={inputVal} onChange={writeTodo}></input>
        <button onClick={addTodo}>
        {isEditing ? 'Update Todo' : 'Add Todo'}
      </button>
      </div>
  )
}

export default InputContainer