import React from 'react'
import { CgFormatSlash } from "react-icons/cg";
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  console.log(location)
  return (
    <div className='bg-white'>
      <ul className='flex items-center border p-2 gap-2 text-xl text-[#2E4053]'>
        <Link to={"home"} className={`cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md ${
            location.pathname === "/home" && "bg-[#b572d6] text-white"
          }`}>
            Home
        </Link>
        <CgFormatSlash fontSize={24}/>
        <Link to={"products"} className={`cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md ${
            location.pathname === "/products" && "bg-[#b572d6] text-white"
          }`}>
            Products
        </Link>
        <CgFormatSlash fontSize={24}/>
        <Link to={"about"} className={`cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md ${
            location.pathname === "/about" && "bg-[#b572d6] text-white"
          }`}>
            About
        </Link>
        <CgFormatSlash fontSize={24}/>
        <Link to={"faq"} className={`cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md ${
            location.pathname === "/faq" && "bg-[#b572d6] text-white"
          }`}>
            FAQ
        </Link>
      </ul>
    </div>
  )
}

export default Breadcrumb
