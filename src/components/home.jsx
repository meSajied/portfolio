import React from 'react';
import {IntroPart} from './intoduction-part';
import { FetchData } from '../api/fetch-data';
import { Skills } from './skills';
import { Resume } from './resume';
import { Footer } from './footer';
import { Contacts } from './contacts';
import { Done } from './done';

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
    <div className="p-8 space-y-15">
      <IntroPart data={data}/>
      <Skills skills={data?.skills}/>
      <Resume />
      <Done achievements={data.achievements} />
      <div className='md:hidden'><Contacts /></div>
      <Footer />

    </div>
  )
}

export {Home};