import React, { useEffect } from 'react'
import emailjs from '@emailjs/browser';
import './index.css'
import { FetchData } from './api/fetch-data';
import { Home } from './pages/home'
import { Headers } from './components/headers'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Projects } from './pages/projects'
import { NotFound } from './pages/not-found';
import { Setbacks } from './pages/setbacks';

function App() {
  const {data, loading, error} = FetchData();
  useEffect(() => {
  const sendVisitorInfo = async () => {
    try {
      const res = await fetch("https://api.ipify.org?format=json");
      const data = await res.json();
      const ip = data.ip;

      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        { message: "New visitor on portfolio! " + ip },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
    } catch (error) {
      console.error("Error sending visitor info:", error);
    }
  };

  sendVisitorInfo();
  }, []);

  return (
    <div className="bg-page min-h-screen">
    <BrowserRouter>
      <Headers />
      <div className='p-8'>
      <Routes>
        <Route path="/" element={<Home data={data} loading={loading} error={error} />} />
        <Route path="/projects" element={<Projects projects={data?.projects} opensource={data?.opensource}/>} />
        <Route path="/failed" element={<Setbacks setbacks={data?.setbacks} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App
