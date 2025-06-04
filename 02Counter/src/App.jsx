import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(0)

  //let counter = 24

  const AddVal = () => {
    setCounter((prevCounter) => {return prevCounter + 1})
    setCounter((prevCounter) => {return prevCounter + 1})
    setCounter((prevCounter) => {return prevCounter + 1})
    
  }

  const RemoveVal = () => {
    setCounter((prevCounter) => {return prevCounter - 1})
    setCounter((prevCounter) => {return prevCounter - 1})
  }

  return (
    <>
     <h1>A new React Project</h1>
     <h2>Counter Value: {counter}</h2>
     <button
     onClick={AddVal}
     >Add Value</button> {" "}
     <button
     onClick={RemoveVal}
     >Remove Value</button>
     <p>Footer : {counter}</p>
    </>
  )
}

export default App
