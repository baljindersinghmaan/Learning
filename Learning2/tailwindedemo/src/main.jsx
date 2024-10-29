import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Home from './component/Home/Home.jsx'
import Login from './component/Login/Login.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>

  </StrictMode>,
)
