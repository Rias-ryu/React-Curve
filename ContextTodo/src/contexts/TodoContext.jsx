// contexts/TodoContext.js
import { createContext, useContext, useEffect, useState } from 'react'

const TodoContext = createContext()

export const useTodo = () => useContext(TodoContext)

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? updatedTodo : todo))
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const todoStatus = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  // load todos from localStorage on start
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos) {
      setTodos(storedTodos)
    }
  }, [])

  // save todos to localStorage on change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, deleteTodo, todoStatus }}
    >
      {children}
    </TodoContext.Provider>
  )
}
