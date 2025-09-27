function SetbackList({setbacks}) {
  
  return (
    <div className="ml-4 lg:ml-10">
      {setbacks && setbacks.map((setback, index) => (
        <div className="mb-7" key={index}>
          <p className="font-sections text-xl">{setback.name}</p>

          <div className="pl-4 pr-4 pt-2 pb-2">
            <div className="list-disc font-body text-lg ml-2 sace-y-6">
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