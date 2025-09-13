"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const Navbar = () => {

  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  }

  return (
    <>
    <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] lg:translate-y-[-60%] ">
      <Image src={assets.header_bg_color} alt="header bg color" className="w-full" />
    </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ">
        <Link href="/" className=" ">
          <Image
            src="/logo2.png"
            alt="Logo"
            width={120}
            height={40}
            className='w-28 alt="" cursor-pointer mr-14'
          />
        </Link>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li>
            <Link href="/" className=" font-Ovo">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className=" font-Ovo">
              About
            </Link>
          </li>
          <li>
            <Link href="/classes" className=" font-Ovo">
              Classes
            </Link>
          </li>
          <li>
            <Link href="/contact" className=" font-Ovo">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          {/* <button >
            <Image src={assets.moon_icon} alt="Moon Icon" className="w-6" />
          </button> */}
          <Link
            href="/contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 hover:bg-gray-300 font-Ovo"
          >
            Get Started
          </Link>

           <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="Menu Icon" className="w-6" />
          </button>


        </div>
        {/* mobile menu */}
        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
         top-0 bottom-0 w-64 z-50  h-screen bg-rose-50 transition duration-500">
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image src={assets.close_black} alt="Close Icon" className="w-5  cursor-pointer" />
          </div>
          <li>
            <Link href="/" className=" font-Ovo" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className=" font-Ovo" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/classes" className=" font-Ovo" onClick={closeMenu}>
              Classes
            </Link>
          </li>
          <li>
            <Link href="/contact" className=" font-Ovo" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
        
      </nav>
    </>
  );
};

export default Navbar;
