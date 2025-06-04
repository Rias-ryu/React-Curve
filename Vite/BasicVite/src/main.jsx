import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

const reactElement = {
    type: 'a',
    props:{
        href : "https://example.com",
        target: '_blank'
    },
    children: 'Click me to visit the link' 
}

function MyApp(){
  return(
    <div>
      <h1>Custom Vite App</h1>
    </div>
  )
}

const AnotherElement = (
  <a href='Example.com' target='_blank'>Visit it</a>
)

const AreactElement = React.createElement(
  'a',
  {href: 'https://example.com' , target: '_blank'},
  'click the link'
)

createRoot(document.getElementById('root')).render(

  
  <App />

)
