import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoForms() {
  const [todo, setTodo] = useState("")
  const { addTodo } = useTodo()

  const add = (e) => {
    e.preventDefault()
    if (!todo.trim()) return
    addTodo({ title: todo.trim(), completed: false })
    setTodo("")
  }

  return (
    <form onSubmit={add} className="flex gap-2">
      <input
        type="text"
        placeholder="Write a todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition duration-200"
      >
        Add
      </button>
    </form>
  )
}

export default TodoForms
