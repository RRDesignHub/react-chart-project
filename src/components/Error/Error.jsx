import { useRouteError } from "react-router-dom"

export default function Error(){
  const errorState = useRouteError();
  console.log(errorState)
  return(
    
    
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl font-extrabold">Oopss!!!</h1>
        <p className="mt-5"><i>{errorState.data}</i></p>
      </div>
    </>
  )
}