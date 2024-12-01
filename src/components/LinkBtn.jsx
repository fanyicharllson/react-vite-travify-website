import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";

const LinkBtn = ({message}) => {
  return (
    <Link
    to={message}
    className="border-2 border-purple-600 rounded-full py-3 px-10 text-[15px] flex justify-center items-center gap-4"
  >
    {message}
    <FaArrowRight className="text-purple-700" />
  </Link>
  )
}

export default LinkBtn