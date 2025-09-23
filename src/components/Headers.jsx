import React from "react";
import { Link } from "react-router-dom";


function Headers() {
  return (
    <nav className="bg-page rounded-md divider-y-2 shadow-md mb-2">
      <div className="p-4 flex justify-around w-[40%] font-header
       color-header">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/projects">Projects</Link>
      </div>
      </div>
      </nav>
  )
}

export {Headers}