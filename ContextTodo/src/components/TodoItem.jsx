import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.title)

  const { updateTodo, deleteTodo, todoStatus } = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, title: todoMsg })
    setIsTodoEditable(false)
  }

  const handleStatusChange = () => {
    todoStatus(todo.id)
  }

  return (
    <div className={`flex items-center gap-3 bg-[#1e3358] rounded-lg px-4 py-3 transition-all shadow-sm ${todo.completed ? 'opacity-60' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleStatusChange}
        className="form-checkbox h-5 w-5 text-blue-500"
      />
      <input
        type="text"
        className={`flex-1 bg-transparent outline-none text-white border-b border-gray-500 py-1 px-2 transition-all ${
          isTodoEditable ? 'bg-white text-black border-blue-500 rounded' : ''
        }`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        onClick={() => {
          if (todo.completed) return
          if (isTodoEditable) {
            editTodo()
          } else {
            setIsTodoEditable(true)
          }
        }}
        disabled={todo.completed}
        className="text-sm text-blue-400 hover:text-blue-300 font-medium"
      >
        {isTodoEditable ? 'Save' : 'Edit'}
      </button>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-sm text-red-400 hover:text-red-300 font-medium"
      >
        Delete
      </button>
    </div>
  )
}

export default TodoItem
