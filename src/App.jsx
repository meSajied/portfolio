import React, { useState } from 'react'
import './index.css'
import { FetchData } from './api/fetchData.jsx'

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
    <div class='text-xl'>
      {data.intro[0]}
    </div>
  )
}

export default App
