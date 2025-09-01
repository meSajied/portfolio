function makeListOf(data) {
  return (
    <div className="flex justify-center space-x-16 space-y-2 p-3">
  {Object.entries(data).map(([name, url]) => (
    <div key={name} className="flex flex-col items-center">
      <img
        src={url}
        alt={name}
        className="w-18 h-18"
      />
    
    </div>
  ))}
</div>
  )
}

export {makeListOf}