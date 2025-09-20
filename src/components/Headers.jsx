import React from "react";
import { Link } from "react-router-dom";
import '../fonts.css'

function Headers() {
  return (
    <nav className="shadow-lg rounded-md">
      <div className="p-4 flex justify-around w-[40%] font-header text-xl">
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