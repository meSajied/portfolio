function Done({achievements}) {

  if (!achievements || achievements.length === 0) {
    return (
      <div className="p-2 font-sections">
        No achievements available.
      </div>
    );
  }

  return (
    <div className="md:pl-35 md:pr-35">
      <div className="text-2xl font-sections">
        Achievement
      </div>
      <div className="p-4 font-body">
        <ul className=" list-disc pl-8 space-y-2">
        {achievements.map((item, index) => (
          <li key={index} className="text-lg">
            {item}
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export {Done};