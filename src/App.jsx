import { useState } from 'react'
import reactLogo from './assets/react.svg'
import FullStackDevelopment from './components/FullStackDevelopment'
import CyberSecurity from './components/CyberSecurity'
import DataScience from './components/DataScience'
import Career from './components/Career'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AllCourses from './components/AllCourses'

function App() {
  

  return (
    <>
     {/* Creating Routing */}
     <BrowserRouter>
       <div>
        <Navbar />
       </div>
       <Routes>
        <Route path='/' exact element={<AllCourses />} />
        <Route path='/fullstack' element={<FullStackDevelopment />} />
        <Route path='/cybersecurity' element={<CyberSecurity />} />
        <Route path='/datascience' element={<DataScience />} />
        <Route path='/career' element={<Career />} />
       </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
