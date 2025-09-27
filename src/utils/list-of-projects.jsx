function ProjectList({projects}) {  
  return (
    <div className="ml-4 lg:ml-10">
      {projects && projects.map((project, index) => (
        <div key={index}>
          <p className="font-sections text-xl">{project.name}</p>

          <div className="pl-4 pr-4 pt-2 pb-2">
            <div className="list-disc font-body text-lg ml-2">
              {project.details.map((detail, idx) => (
                <div key={idx}>{detail}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export { ProjectList };