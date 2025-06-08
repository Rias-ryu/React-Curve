import './App.css'
import { TodoProvider } from './contexts/TodoContext'
import TodoForms from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { useTodo } from './contexts/TodoContext'

function TodosList() {
  const { todos } = useTodo()

  return (
    <div className="flex flex-wrap gap-y-3">
      {todos.map((todo) => (
        <div key={todo.id} className="w-full">
          <TodoItem todo={todo} />
        </div>
      ))}
    </div>
  )
}

function App() {
  return (
    <TodoProvider>
      <div className="bg-gradient-to-br from-[#172842] to-[#0f1b31] min-h-screen py-8 px-4">
       <div className="w-full max-w-2xl mx-auto bg-[#1f2a40] shadow-xl rounded-2xl px-6 py-6 text-white">
         <h1 className="text-3xl font-bold text-center mb-6 tracking-wide">
  Manage Your Todos
</h1>

          <div className="mb-4">
            <TodoForms />
          </div>
          <TodosList />
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
