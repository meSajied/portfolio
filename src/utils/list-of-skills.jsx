function makeListOf(data) {
  return (
    <div className="flex justify-center space-x-20 space-between p-2">
  {Object.entries(data).map(([name, url]) => (
    <div key={name} className="flex flex-shrink-0 items-center space-between p-1">
      <img
        src={url}
        alt={name}
        className="md:w-15 md:h-15 lg:w-18 lg:h-18 w-10 h-10"
      />
    </div>
  ))}
</div>
  )
}

export {makeListOf}