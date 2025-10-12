function Done({achievements}) {

  if (!achievements || achievements.length === 0) {
    return (
      <div className="p-2 font-sections">
        No achievements available.
      </div>
    );
  }

  return (
    <div className="lg:pl-35 lg:pr-35">
      <div className="text-lg font-sections">
        Achievements
      </div>
      <div className="p-4 font-body">
        <ul className=" list-disc pl-8 space-y-2">
        {achievements.map((item, index) => (
          <li key={index} className="text-sm">
            {item}
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export {Done};
