import React, { useState } from 'react'
import './index.css'
import { FetchData } from './api/FetchData.jsx'
import { makeListOf } from './utils/ListOfSkills.jsx';

function App() {
  const {data, loading, error} = FetchData();


  if(loading) {
    return (
      <>
        Loading...
      </>
    )
  }

  if(error) {
    return (
      <>
        Something is wrong...
      </>
    )
  }

  console.log(data);
  
  return (
    <div class='p-2 space-y-1 h-screen border'>
      <div className='border p-2'>
        {data.intro[0]}
      </div>

      <div className='border flex flex-col'>
        {makeListOf(data?.skills?.lang)}
        {makeListOf(data?.skills?.frameworks)}
        {makeListOf(data?.skills?.lib)}
        {makeListOf(data?.skills?.plateforms)}
      </div>
    
    </div>
  )
}

export default App
