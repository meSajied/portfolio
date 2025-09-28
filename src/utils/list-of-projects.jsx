function ProjectList({projects}) {  
  return (
    <div className="ml-4 lg:ml-10">
      {projects && projects.map((project, index) => (
        <div className="mb-2" key={index}>
          <li className="list-disc font-sections text-lg">{project.name}</li>

          <div className="pl-4 pr-4">
            <li className="list-none font-body text-base ml-2">
              {project.details.map((detail, idx) => (
                <div key={idx}>{detail}</div>
              ))}
            </li>
          </div>
        </div>
      ))}
    </div>
  );
}

export { ProjectList };