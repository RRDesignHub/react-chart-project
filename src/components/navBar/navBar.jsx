import Link from "../Links/link";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { FaWindowClose } from "react-icons/fa";
export default function Nav() {
  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/services", name: "Services" },
    { path: "/portfolio", name: "Portfolio" },
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
          {navLinks.map((item, index)=> <Link key={index} link={item}></Link>)}
        </ul>
      </div>
    </>
  )
}