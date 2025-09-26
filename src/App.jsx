import React, { useState } from 'react'
import './index.css'
import { Home } from './components/home'
import { Headers } from './components/headers'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Projects } from './components/projects'

function App() {
  return (
    <div className='bg-page h-screen'>
    <BrowserRouter>
    <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App
