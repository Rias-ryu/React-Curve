import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState('#808000')
  // console.log("Current background color:", color)
  // console.log();
  

  // function changeColor(newColor) {
  //   setcolor(newColor)
  // }

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-violet-400 px-4 py-3 rounded-3xl">
          <button 
            onClick={() => setcolor('red')}
            className="bg-white text-violet-600 font-semibold px-5 py-2 rounded-full shadow-md hover:bg-violet-100 hover:scale-105 transition duration-200 ease-in-out"
          >
            Red
          </button>
          <button 
            onClick={() => setcolor('green')}
            className="bg-white text-violet-600 font-semibold px-5 py-2 rounded-full shadow-md hover:bg-violet-100 hover:scale-105 transition duration-200 ease-in-out"
          >
            Green
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
