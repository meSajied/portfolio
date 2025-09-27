import { makeListOf } from '../utils/list-of-skills.jsx';
function Skills({skills}) {
  
  return (
    <div className=" md:flex flex-col justify-center items-center">
      <div className='font-z text-lg text-center'>Skills & Tech Stacks</div>
      <div className="flex flex-col p-4 rounded-md w-full space-y-3 overflow-x-auto">
        {makeListOf(skills?.lang)}
        {makeListOf(skills?.frameworks)}
        {makeListOf(skills?.lib)}
        {makeListOf(skills?.plateforms)}
      </div>
    </div>
  )
}

export {Skills}