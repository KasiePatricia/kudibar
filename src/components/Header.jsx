import React, { useState } from "react";
import Logo from "../assets/icons/logo-kudibar.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-[999]">
      <div className="flex items-center h-[4.75rem] bg-white text-clrPrimary border-b px-4 md:px-16 py-5">
        <a className="min-w-max" href="/">
          <img
            src={Logo}
            alt="Kudibar Logo"
            loading="lazy"
            width="160"
            height="40"
            className="w-28 h-auto md:h-10 md:w-40 object-contain"
          />
        </a>
        <button
          className="ml-auto block md:hidden cursor-pointer"
          onClick={handleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-10 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        </button>
        <div
          className={`overflow-hidden md:overflow-visible z-[1000] fixed top-[4.75rem] left-0 bg-white w-full flex md:relative md:top-0 md:h-auto transition-all duration-75 md:p-0 p-0 ${
            isMenuOpen ? "h-screen" : "h-0"
          }`}
        >
          <div className="flex flex-col md:flex-row md:justify-end w-full items-center ">
            <nav className="flex flex-col gap-8 items-center md:flex-row mb-8 md:mb-0  md:ml-14 whitespace-nowrap md:mr-8">
              <a href="/explore">Explore</a>
              <a className="font-bold" href="/signin">
                Signin
              </a>
            </nav>
            <a href="/signup">
              <button
                className="flex items-center text-white  bg-clrPrimary hover:bg-clrBGNav whitespace-nowrap text-ellipsis overflow-hidden  md:focus:ring-4 md:focus:ring-clrBGNav font-medium rounded-full text-sm h-10 px-7 py-2.5 dark:clrPrimary dark:hover:bg-clrBGNav focus:outline-none dark:focus:ring-clrBGNav justify-center
        "
                type="button"
              >
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
