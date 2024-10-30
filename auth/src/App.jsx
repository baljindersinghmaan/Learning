import { useState } from 'react'

import Register from './Register'
import Login from './Login'
import {Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import Admin from './Admin'
import Editor from './Editor'
import Missing from './Missing'
import Home from './Home'
import RequiredAuth from './RequiredAuth'
import LinkPage from './LinkPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
      
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="links" element={<LinkPage />} />
      

      <Route element={<RequiredAuth />} >
      <Route path="admin" element={<Admin />} />
      <Route path="editor" element={<Editor />} />
      <Route path="/" element={<Home />} />
      </Route>
      
      
      <Route path="*" element={<Missing />} />

    

      
      </Route>
      
    </Routes>
  )
}

export default App
