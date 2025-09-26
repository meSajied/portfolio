import { Link } from "react-router";
function Resume() {
  return (
    <div className="font-z text-lg flex justify-center">
      <Link className="divider shadow-md rounded pl-2 pr-2" to={import.meta.env.VITE_APP_RESUME}>Resume? Click Here</Link>
    </div>
  )
  
}
export {Resume};