import React from 'react';
import {IntroPart} from './intoduction-part';
import { FetchData } from '../api/fetch-data';
import { Skills } from './skills';

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
    <div className="p-2 md:pt-10 space-y-30 p-8">
      <IntroPart data={data} loading={loading} error={error}/>
      <Skills skills={data?.skills}/>

    </div>
  )
}

export {Home};