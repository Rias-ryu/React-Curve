import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , createRoutesFromElements, Route} from 'react-router'
import { RouterProvider } from 'react-router-dom'

// Routes
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github , {infoLoader} from './components/Github/Github.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}  />
       <Route path='about' element={<About/>} />
       <Route path='contact' element={<Contact/>} />
       <Route path='user/' element={<User />} >
       <Route path=':userid' element={<User />} />
       </Route>
       <Route loader={infoLoader} path='github' element={<Github />} />
       <Route path='*' element={<div>404 : Not Found</div>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
