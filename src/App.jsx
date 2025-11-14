import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import img from './img.svg';
import './App.css'
import './Nav.css'
import Home from './Home'
import Logo from './Logo'
import Heading from './Heading'
import Login from './Login'
import Nav from './Nav'

function App() {

  return (
    <>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <img src={img} alt="img" /> */}
        <Route path='/Logo' element={<Logo/>} />
        <Route path='/img' element={<img />} />
        <Route path='/Heading' element={<Heading/>} />
        <Route path='/Login' element={<Login/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
