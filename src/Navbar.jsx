import React, { useState, useRef } from 'react';
import { BiMenu } from 'react-icons/bi';
import { CgShoppingCart } from 'react-icons/cg';


const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (index) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHovered(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setHovered(null), 150);
  };

  const navItems = [
    { name: 'Home' },
    {
      name: 'Instagram',
      submenu: ['Buy Followers', 'Buy Likes', 'Buy Views'],
    },
    {
      name: 'TikTok',
      submenu: ['Buy Followers', 'Buy Likes', 'Buy Views'],
    },
    {
      name: 'YouTube',
      submenu: ['Buy Subscribers', 'Buy Views', 'Buy Likes'],
    },
    {
      name: 'Facebook',
      submenu: ['Buy Followers', 'Buy Likes', 'Page Likes'],
    },
    { name: 'FAQS' },
    { name: 'Blogs' },
  ];

  return (
    <header className="text-gray-600 body-font shadow-sm sticky top-0 z-50 backdrop-blur-lg backdrop-filter bg-opacity-80">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <BiMenu className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Center: Logo */}
        <div className="flex-1 flex justify-center md:justify-center">
          <a className="flex title-font font-medium items-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-sky-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl hidden sm:inline">FollowerCart</span>
          </a>
        </div>

        {/* Right: Cart Icon */}
        <div className="flex items-center md:ml-auto">
          <CgShoppingCart className="w-6 h-6 text-gray-700 hover:text-sky-500 cursor-pointer" />
        </div>
      </div>

      <nav
        className={`${
          menuOpen ? 'block' : 'hidden'
        } md:flex items-center justify-center gap-4 py-2 transition-all duration-300`}
      >
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative group text-center"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="cursor-pointer relative px-3 py-1 transition-all duration-300 hover:text-black">
              <span className="relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-sky-500 before:transition-all before:duration-300 hover:before:w-full after:absolute after:top-0 after:left-0 after:w-0 after:h-[2px] after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full">
                {item.name}
              </span>
            </div>

            {item.submenu && hovered === index && (
              <div
                className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-md mt-2 w-44 z-10 transition-all duration-200"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item.submenu.map((subItem, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="block px-4 py-2 m-1 text-sm text-gray-700 rounded-lg bg-white hover:bg-sky-500 transition"
                  >
                    {subItem}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
