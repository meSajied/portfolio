import React, { useEffect } from 'react'
import emailjs from '@emailjs/browser';
import './index.css'
import { Home } from './components/home'
import { Headers } from './components/headers'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Projects } from './components/projects'
import { NotFound } from './components/not-found';

function App() {
  // useEffect(() => {
  //   emailjs.send(
  //     import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  //     import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  //     { message: "New visitor on portfolio!" },
  //     import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
  //   )}, []);

  return (
    <div className="bg-page min-h-screen">
    <BrowserRouter>
    <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App
