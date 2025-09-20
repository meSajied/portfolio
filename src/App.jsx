import React, { useState } from 'react'
import './index.css'
import { Home } from './components/Home'
import { Headers } from './components/Headers'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Projects } from './components/Projects'

function App() {
  return (
    <BrowserRouter>
    <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
