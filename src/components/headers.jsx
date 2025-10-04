import React from "react";
import { Link } from "react-router-dom";
import { EXPERIENCE, HOME, MIS_STEPS, PROJECTS } from "../paths";


function Headers() {
  return (
    <nav className="rounded-md divider-y-1 shadow-md mb-2 md:mb-10">
      <div className="p-4 flex flex-col md:flex-row 
        md:justify-around md:w-[90%] lg:w-[60%] font-header text-base color-header">
      <div>
        <Link to={HOME}>Home</Link>
      </div>
      <div>
        <Link to={PROJECTS}>Projects & Open-sources</Link>
      </div>
      <div>
        <Link to={EXPERIENCE}>Experience</Link>
      </div>
      <div>
        <Link to={MIS_STEPS}>Experiments & Missteps</Link>
      </div>
      </div>
      </nav>
  )
}

export {Headers}