"use client"
import React, { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = () => {
  const [isopen,setopen] = useState(false)
  return (
    <main className="">
      <div className="flex justify-around items-center h-16">
        <ul className="flex gap-5 items-center">
          <li>
            <Image
            src={`/images/logo.png`}
            alt="logo"
            width={40}
            height={50}
            />
          </li>
          <li className="font-bold text-2xl">Nehal</li>
        </ul>
        <div>
        <ul className="hidden md:flex gap-10 items-center ">
          <li className="hover:text-purple-600 cursor-pointer">Home</li>
          <li className="hover:text-purple-600 cursor-pointer">Blog</li>
          <li className="hover:text-purple-600 cursor-pointer">About</li>
          <li className="bg-customPurple text-white px-10 py-3 rounded-md text-sm cursor-pointer hover:bg-purple-600">Contact</li>
        </ul>
        <ul onClick={()=>setopen(!isopen)} className="md:hidden cursor-pointer"><GiHamburgerMenu /></ul>
        </div>
        
      
        {/* mobile menu */}
      {isopen && (
        <ul className="md:hidden absolute top-16 left-0">
         <li className="hover:text-purple-600 cursor-pointer">Home</li>
          <li className="hover:text-purple-600 cursor-pointer">Blog</li>
          <li className="hover:text-purple-600 cursor-pointer">About</li>
          <li className="hover:text-purple-600 cursor-pointer">Contact</li>
          
        </ul>
      )}
      </div>
    </main>
  );
};

export default NavBar;
