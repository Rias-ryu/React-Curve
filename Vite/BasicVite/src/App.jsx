import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Udemy from './Udemy'


const userName = "arman"
function App() {
  

  return (
    <>
    <h1> Classic vite app {2+2}</h1>
    <h1> Classic vite app {" "} {userName}</h1>

    <Udemy />
    </>
  )
} 

export default App
