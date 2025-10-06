function ProjectList({projects}) {  
  return (
    <div className="ml-4 lg:ml-10 pr-4">
      {projects && projects.map((project, index) => (
        <div className="mb-3" key={index}>
          <li className="font-sections text-lg">{project.name}</li>

          <div>
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

export { ProjectList };