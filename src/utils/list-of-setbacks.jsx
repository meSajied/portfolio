function SetbackList({setbacks}) {
  
  return (
    <div className="ml-4 lg:ml-10">
      {setbacks && setbacks.map((setback, index) => (
        <div className="mb-5" key={index}>
          <p className="font-sections text-base">{setback.name}</p>

          <div className="pl-2 pr-6 pb-2">
            <div className="list-disc font-body text-sm ml-2 sace-y-6">
              {setback.details.map((detail, idx) => (
                <div key={idx}>{detail}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export { SetbackList };