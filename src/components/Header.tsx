import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Menu and Close icons from lucide-react

type HeaderProps = {
  logo: string;
  menuItems: string[];
};

const Header: React.FC<HeaderProps> = ({ logo, menuItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center py-2 md:py-4 px-6 md:px-16 lg:px-32 w-full bg-white shadow-md transition-all duration-300  ">
      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl font-black text-zinc-800">
        <img
          loading="lazy"
          src={logo}
          alt="AeroVision Logo"
          className="object-contain w-[50px] h-auto"
        />
        <span>AeroVision</span>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-8">
        <ul className="flex gap-8 items-center text-lg text-zinc-800">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
        <button className="py-2 px-6 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300">
          Let's chat
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center justify-center p-2 text-zinc-800"
        onClick={toggleMenu}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } absolute top-16 left-0 w-full bg-white shadow-md md:hidden transition-transform duration-300`}
      >
        <nav className="flex flex-col gap-6 items-center py-4 text-lg text-zinc-800">
          <ul className="flex flex-col gap-4 items-center">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
          <button className="py-3 px-8 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300">
            Let's chat
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
