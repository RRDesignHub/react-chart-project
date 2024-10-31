import { useLoaderData, useNavigate } from "react-router-dom"

export default function UDetails(){
  const details = useLoaderData();
  const navigate = useNavigate();
  const {name, address, phone} = details;
  const handleGoBack = ()=>{
    navigate('/users');
  }
  return(
    <>
      <div className="mx-auto mt-5 w-fit flex flex-col justify-center items-center border border-8 border-purple-500 p-6 rounded-xl">
        <h2 className="text-4xl font-extrabold">{name}</h2>
        <p className="text-2xl font-semibold">Address: {address.street}, {address.suite}, {address.city}.</p>
        <p className="text-2xl font-semibold">Phone: {phone}</p>
        <button className="px-4 py-3 bg-purple-800 rounded-xl" onClick={handleGoBack}>Go Back</button>
      </div>
    </>
  )
}