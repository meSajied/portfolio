function ExperienceList({experience}) {  
  return (
    <div className="ml-4 lg:ml-10">
      {experience && experience.map((project, index) => (
        <div className="mb-5" key={index}>
          <div className="mb-1 flex flex-wrap justify-between items-baseline">
            <li className="font-sections text-lg">{project.name}</li>
            <div className="font-body text-sm italic">{project.time}</div>
          </div>

          <div className="pl-4 pr-4">
            <ul className="list-inside font-body text-base">
              {project.details.map((detail, idx) => (
                <li className="relative pl-4 before:content-['-'] 
                before:absolute before:left-0" 
                key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export { ExperienceList };