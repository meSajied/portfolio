import React from 'react';
import {Headers} from './Headers.jsx';
import { FetchData } from '../api/FetchData.jsx';
import { makeListOf } from '../utils/ListOfSkills.jsx';

function Home() {
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
  
  return (
    <div className="p-2 space-y-6 h-screen bg-page">
      <div className="p-2 font-intro-body">
        {data.intro[0]}
      </div>

      <div className="flex justify-center items-center">
        <div className="flex flex-col p-4 rounded-md w-[50%] space-y-3">
          {makeListOf(data?.skills?.lang)}
          {makeListOf(data?.skills?.frameworks)}
          {makeListOf(data?.skills?.lib)}
          {makeListOf(data?.skills?.plateforms)}
        </div>
      </div>
    </div>
  )
}

export {Home};