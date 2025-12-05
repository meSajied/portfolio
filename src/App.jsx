import React, { useEffect, useState } from 'react'
import './index.css'
import { FetchData } from './api/fetch-data';
import { Home } from './pages/home'
import { Headers } from './components/headers'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Projects } from './pages/projects'
import { NotFound } from './pages/not-found';
import { Setbacks } from './pages/setbacks';
import { EXPERIENCE, HOME, MIS_STEPS, NOT_FOUND, PROJECTS } from './paths';
import { Experience } from './pages/experience';

function App() {
  const {data, loading, error} = FetchData();
  const [ipinfo, setIpinfo] = useState({});
  
  useEffect(() => {
  const sendVisitorInfo = async () => {
    try {
      const res = await fetch("https://ipwho.is/");
      const dat = await res.json();
      
      setIpinfo(dat);

      const emailResponse = await fetch(import.meta.env.VITE_APP_EMAIL_SENDER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dat),
      })
      .then(res => res.json());
      console.log(emailResponse);
        
    } catch (error) {
      console.error(error);
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
        <Route path={HOME} element={<Home data={data} loading={loading} error={error} ipinfo={ipinfo} />} />
        <Route path={EXPERIENCE} element={<Experience experience={data?.experience} />} />
        <Route path={PROJECTS} element={<Projects projects={data?.projects} opensource={data?.opensource}/>} />
        <Route path={MIS_STEPS} element={<Setbacks setbacks={data?.setbacks} />} />
        <Route path={NOT_FOUND} element={<NotFound />} />
      </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App
