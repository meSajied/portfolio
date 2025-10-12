function Introduction({intro}) {

  if (!intro || intro.length === 0) {
    return (
      <div className="p-2 font-intro-body">
        No introduction available.
      </div>
    );
  }
  
  return (

      <div className="space-y-3">
      <div className='space-y-1'>
        <p className='font-intro-name text-xl'>Hi, I am</p>
        <p className='font-intro-name text-2xl'>Sajied Shah Yousuf</p>
      </div>
      <div className='space-y-1'>
        <p className='font-body text-sm'>{intro[0]}</p>
        <p className='font-body text-sm indent-5'>{intro[1]}</p>
      </div>
    </div>
  )
}

export { Introduction };
