import Image from "next/image";
import { useState } from "react";
import Logo from "@/images/build1.png";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const router = useRouter();
  const HandlePcBuilderRedirect = () => {
    router.push("/pc_builder");
  };

  const navItems = [
    {
      name: "Components",
      subMenu: [
        { name: "CPU / Processor", link: "#" },
        { name: "Motherboard", link: "#" },
        { name: "RAM", link: "#" },
        { name: "Power Supply Unit", link: "#" },
        { name: "Storage Device", link: "#" },
        { name: "Monitor", link: "#" },
        { name: "Others", link: "#" },
      ],
    }
  ];

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex justify-between p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image
            src={Logo}
            alt="next js alt"
            width={250}
            height={100}
            layout="responsive"
          />
          <span className="text-xl">BuildPc</span>
        </Link>

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
          <nav className="py-4 md:ml-auto md:flex flex-wrap items-center text-base justify-center">
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </nav>

          <button
            onClick={HandlePcBuilderRedirect}
            className="inline-flex items-center bg-[#6d90e9] text-white shadow-sm border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0 hover:text-[#6d90e9] transition-colors duration-300 ease-in-out"
          >
            PC Builder
          </button>
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ item }) => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const handleSubMenuToggle = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div className="relative group pb-2">
      <a
        className="mr-5 hover:text-gray-900 cursor-pointer"
        href={item.link}
        onClick={(e) => {
          e.preventDefault(); // Prevent the default link behavior
          handleSubMenuToggle();
        }}
      >
        {item.name}
      </a>

      {item.subMenu && isSubMenuOpen && (
        <ul className="z-10 bg-[#6d90e9] text-white p-2 border rounded-sm transform scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
          {item.subMenu.map((subItem, index) => (
            <NavItem key={index} item={subItem} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
