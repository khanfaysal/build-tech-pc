import Image from "next/image";
import { useState } from "react";

import Logo from "@/images/build1.png";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex justify-between p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Image src={Logo} alt="next js alt" width={250} height={100} layout="responsive"/>
          <span className=" text-xl">BuildPc</span>
        </a>

        <button
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 md:hidden"
          onClick={handleMobileMenuToggle}
        >
          {/* Hamburger Icon */}
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className={`w-6 h-6 ml-1 ${isMobileMenuOpen ? "hidden" : "block"}`}
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>

          {/* Close Icon */}
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className={`w-6 h-6 ml-1 ${isMobileMenuOpen ? "block" : "hidden"}`}
            viewBox="0 0 24 24"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div
          className={`md:flex flex-grow items-center ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <nav className="md:ml-auto md:flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <button className="inline-flex items-center bg-[#6d90e9] text-white shadow-sm border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0">Pc Build
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
