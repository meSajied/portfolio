import React, {useEffect, useState} from 'react';
import {IntroPart} from '../components/intoduction-part';
import { Skills } from '../components/skills';
import { Resume } from '../components/resume';
import { Footer } from '../components/footer';
import { Contacts } from '../components/contacts';
import { Done } from '../components/done';
import { Screenshot } from '../components/screenshot';

function Home({data, loading, error, ipinfo}) {
  const [micro, setMicro] = useState(false);
  const allowedIP = /^(9\.|72\.|135\.)/;

  useEffect(() => {
    const changeState = () => {
      if(ipinfo?.connection?.isp == "Microsoft Corporation" && 
          allowedIP.test(ipinfo?.ip)) {
        setMicro(true)
      }
    }

    changeState();

  }, [ipinfo])

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
      {micro && message()}
      <IntroPart data={data}/>
      <Skills skills={data?.skills}/>
      <Resume />
      <Done achievements={data.achievements} />
      <Screenshot />
      <div className='md:hidden'><Contacts /></div>
      <Footer />

    </div>
  )

  function message() {
    return (
      <div className='lg:flex lg:justify-center'>
        <div className="lg:w-[60%] flex p-4 border border-green-600 bg-green-100 rounded-md text-green-800 items-start">
        <p className="flex-1 text-sm">
          Who are you? You visit my portfolio often. Can you connect with me via LinkedIn or email? Any feedback from you would be helpful.
        </p>

        <button
          onClick={() => setMicro(false)}
          className="ml-4 text-green-700 hover:text-green-900 font-bold text-xl leading-none"
        >
          ×
        </button>
      </div>
      </div>
    );
  }
}

export {Home};
