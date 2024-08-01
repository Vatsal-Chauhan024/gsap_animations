import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element = {<Page1/>}/>
    <Route path='/2' element = {<Page2/>}/>
    <Route path='/3' element = {<Page3/>}/>
    <Route path='/4' element = {<Page4/>}/>
    <Route path='/5' element = {<Page5/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
