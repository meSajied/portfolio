import React from "react";
import { Link } from "react-router-dom";


function Headers() {
  return (
    <nav className="rounded-md divider-y-1 shadow-md mb-2">
      <div className="p-4 flex justify-around md:w-[50%] font-header text-xl color-header">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/projects">Projects & Open-sources</Link>
      </div>
      </div>
      </nav>
  )
}

export {Headers}