import { Link } from "react-router";
function Resume() {
  return (
    <div className="font-z text-base flex justify-center">
      <p>Wanna know what I learned while pursuing my degree?</p>
      <Link className="pl-2 pr-2 italic underline" 
        target="_blank"
        rel="noopener noreferrer"
        to={import.meta.env.VITE_APP_NOTEBOOK}>Click Here</Link>
    </div>
  )
  
}
export {Resume};