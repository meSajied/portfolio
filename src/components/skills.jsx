import { makeListOf } from '../utils/list-of-skills.jsx';
function Skills({skills}) {
  
  return (
    <div className="hidden md:flex justify-center items-center">
      <div className="flex flex-col p-4 rounded-md w-[50%] space-y-3">
        {makeListOf(skills?.lang)}
        {makeListOf(skills?.frameworks)}
        {makeListOf(skills?.lib)}
        {makeListOf(skills?.plateforms)}
      </div>
    </div>
  )
}

export {Skills}