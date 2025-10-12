import React from "react";
import { ProjectList } from "../utils/list-of-projects";

function Projects({projects, opensource}) {
  
  if(!projects || projects.length === 0) {
    return (
    <div className="p-8 text-center font-z">
      No projects are listed yet.
    </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="space-y-15 lg:w-[70%]">
          <div>
            <p className="text-lg font-z mb-5">Open-Sources</p>
            <div className="space-y-4">
              {ProjectList({projects: opensource})}
            </div>
          </div>
          
          <div>
            <p className="text-lg font-z mb-5">Projects</p>
            <div className="space-y-4">
              {ProjectList({projects})}
            </div>
          </div>
        </div>
    </div>
  )
}

export {Projects}