import React from "react";
import { ExperienceList } from "../utils/list-of-experience";

function Experience({experience}) {
  if(!experience || experience.length === 0) {
    return (
    <div className="p-8 text-center font-z">
      No experience are listed yet.
    </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="lg:w-[70%]">
          <div>
            <p className="text-xl font-z mb-5">Experience</p>

            <div>
              {ExperienceList({experience})}
            </div>
          </div>
        </div>
    </div>
  )
}

export {Experience}