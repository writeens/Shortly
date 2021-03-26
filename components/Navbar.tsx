/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  console.log('object');
  return (
    <nav className="w-full min-w-full flex flex-row items-center justify-between border-red-500 py-3 border font-poppins font-bold px-4 md:px-12 lg:px-28">
      <div className="flex items-center">
        <Link href="/">
          <a className=" text-3xl text-sVeryDarkBlue mr-12">Shortly</a>
        </Link>
        <div className=" text-sGreyViolet">
          <Link href="/">
            <a className="mr-4 text-sm hover:text-sVeryDarkBlue">Features</a>
          </Link>
          <Link href="/">
            <a className="mr-4 text-sm hover:text-sVeryDarkBlue">Pricing</a>
          </Link>
          <Link href="/">
            <a className="mr-4 text-sm hover:text-sVeryDarkBlue">Resources</a>
          </Link>
        </div>
      </div>
      <div className="text-sm">
        <Link href="/">
          <a className="px-6 py-2 mr-3 text-sGreyViolet hover:text-sVeryDarkBlue">Login</a>
        </Link>
        <Link href="/">
          <a className="px-6 py-2 bg-sCyan text-white rounded-2xl cursor-pointer hover:opacity-70">Sign Up</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
