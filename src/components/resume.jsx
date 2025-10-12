import { Link } from "react-router";
function Resume() {
  return (
    <div className="font-z text-base flex justify-center">
      <Link className="divider shadow-md rounded pl-2 pr-2" 
        target="_blank"
        rel="noopener noreferrer"
        to={import.meta.env.VITE_APP_RESUME}>Resume? Click Here</Link>
    </div>
  )
  
}
export {Resume};