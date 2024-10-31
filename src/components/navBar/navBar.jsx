import SingleLink from "../Links/link";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { FaWindowClose } from "react-icons/fa";
import { Outlet, Link  } from "react-router-dom";
export default function Nav() {
  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/services", name: "Services" },
    { path: "/contact", name: "Contact" }
  ];

  const [openCloseMenu, setOpenCloseMenu] = useState(true);
  const handleOpenCloseMenu = (status)=>{
    setOpenCloseMenu(!status);
   
  }

  return (
    <>
      <div className="flex md:block mx-2 mt-2">
        <div className="py-2 px-3 rounded-lg bg-slate-100 text-slate-900 md:hidden">
          {
            openCloseMenu ? 
            <TiThMenu onClick={()=>handleOpenCloseMenu(true)} className="text-2xl flex  " /> : <FaWindowClose onClick={()=>handleOpenCloseMenu(false)} className="text-2xl flex  "></FaWindowClose>
          }
        </div>
        
        <ul className={`md:flex gap-5 justify-center duration-1000 rounded-lg bg-slate-100 drop-shadow-md p-6 absolute top-14  md:static ${openCloseMenu ? '-left-52' : 'left-4'}`}>
          {navLinks.map((item, index)=> <SingleLink key={index} link={item}></SingleLink>)}
        </ul>
      </div>
      <div>
        <div className="flex justify-center gap-5 mt-5">
          <Link to={`lChart`}  className="btn bg-pu">List Chart</Link>
          <Link to={`bChart`} className="btn">Bar Chart</Link>
          <Link to={`users`} className="btn">Users</Link>
        </div>
          <Outlet></Outlet>
      </div>
    </>
  )
}