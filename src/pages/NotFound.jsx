import { Link } from "react-router-dom"
const NotFound = () => {
  return (
   <>
    <div className="flex justify-center items-center text-center text-[20px] md:text-3xl text-blue-500 w-full mt-28">
        <p>404 - Page Not Available at the moment</p>
    </div>
       <div className="flex justify-center items-center mt-5">
       <Link to="/" className="border-2 border-customPurple p-1 rounded-md">Go back to Home</Link>
       </div>
   </>
  )
}

export default NotFound