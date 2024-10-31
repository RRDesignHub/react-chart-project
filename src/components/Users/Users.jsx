import { useLoaderData } from "react-router-dom";
import SingleUser from "../SingleUser/SingleUser";
export default function Users(){
  const usersData = useLoaderData();
  
  return(
    <>
      <h1 className="text-center text-3xl font-bold py-6">Our Users: {usersData.length}</h1>
      <div className="grid grid-cols-4 gap-3">
        {
          usersData.map((user)=> <SingleUser key={user.id} user={user}></SingleUser>)
        }
      </div>
    </>
  )
}