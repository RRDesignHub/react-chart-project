import { Link } from "react-router-dom";

export default function SingleUser({user}) {
const {name, website, email, id} = user; 
  return(
    <>
      <div className="flex flex-col items-center gap-4 border duration-300 border-purple-500 p-4 text-center rounded-xl ">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p>Email: {email}</p>
        <p>Website: www.{website}</p>
        <Link to={`/${id}`} className="w-fit py-1  px-3 bg-purple-300 text-black rounded-md">User Details</Link>
      </div>
    </>
  )
}