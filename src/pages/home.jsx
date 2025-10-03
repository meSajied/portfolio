import React from 'react';
import {IntroPart} from '../components/intoduction-part';
import { Skills } from '../components/skills';
import { Resume } from '../components/resume';
import { Footer } from '../components/footer';
import { Contacts } from '../components/contacts';
import { Done } from '../components/done';

function Home({data, loading, error}) {
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
    <div className="space-y-15">
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
