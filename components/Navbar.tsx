import React, { useState } from 'react';
import Link from 'next/link';
import LogoSVG from './LogoSVG';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggleNavbar = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav id="navbar" className="w-full min-w-full flex flex-row items-center justify-between py-3 font-poppins font-bold px-4 md:px-12 lg:px-16 xl:px-28 relative z-50 mb-4 sm:mb-0">
      {/** TOGGLE */}
      <button id="navbarToggle" type="button" onClick={handleToggleNavbar} className="w-8 h-8 absolute right-3 sm:hidden focus:ring-1 focus:ring-opacity-60 focus:ring-sDarkViolet focus:outline-none">
        <i className="fa fa-bars fa-lg text-sGreyViolet" />
      </button>
      <div className="flex items-center w-full">
        <Link href="/">
          <a className="mr-6 sm:mr-12">
            <LogoSVG />
          </a>
        </Link>
        <div id="navbarMenu" className={`flex-1 absolute sm:relative flex-col sm:flex-row sm:items-center sm:justify-between ${showMenu ? '' : 'hidden'} sm:flex top-16 sm:top-0 right-0 left-0 mx-4 sm:mx-0 rounded-lg sm:rounded-none bg-sDarkViolet sm:bg-transparent pb-3 sm:pb-0 px-8 sm:px-0`}>
          <div id="navbarLeftMenu" className=" text-white sm:text-sGreyViolet flex-col flex sm:flex-row border-b border-sGreyViolet sm:border-b-0 sm:border-none pb-3 sm:pb-0">
            <Link href="/">
              <a className="sm:mr-4 text-sm make-white hover:text-sVeryDarkBlue my-2 sm:my-0 text-center">Features</a>
            </Link>
            <Link href="/">
              <a className="sm:mr-4 text-sm make-white hover:text-sVeryDarkBlue my-2 sm:my-0 text-center">Pricing</a>
            </Link>
            <Link href="/">
              <a className="sm:mr-4 text-sm make-white hover:text-sVeryDarkBlue my-2 sm:my-0 text-center">Resources</a>
            </Link>
          </div>
          <div id="navbarRightMenu" className="text-sm flex-col flex sm:flex-row">
            <Link href="/">
              <a className="px-6 py-2 sm:mr-3 make-white sm:text-sGreyViolet hover:text-sVeryDarkBlue my-2 sm:my-0 text-center">Login</a>
            </Link>
            <Link href="/">
              <a className="px-6 py-2 bg-sCyan text-white rounded-2xl cursor-pointer hover:bg-opacity-70 hover:text-opacity-80 text-center">Sign Up</a>
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
