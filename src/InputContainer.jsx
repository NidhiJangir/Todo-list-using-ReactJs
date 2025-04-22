import React from 'react'

function InputContainer({inputVal, writeTodo, addTodo,isEditing}) {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter your task"
        value={inputVal}
        onChange={writeTodo}
      />
      <button onClick={addTodo}>
        {isEditing ? 'Update Todo' : 'Add Todo'}
      </button>
    </div>
  )
}

export default InputContainer