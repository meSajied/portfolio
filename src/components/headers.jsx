import React from "react";
import { Link } from "react-router-dom";


function Headers() {
  return (
    <nav className="rounded-md divider-y-1 shadow-md mb-2 md:mb-10">
      <div className="p-4 flex flex-col md:flex-row 
        md:justify-around md:w-[80%] lg:w-[60%] font-header text-base color-header">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/projects">Projects & Open-sources</Link>
      </div>
      <div>
        <Link to="/failed">Experiments & Missteps</Link>
      </div>
      </div>
      </nav>
  )
}

export {Headers}