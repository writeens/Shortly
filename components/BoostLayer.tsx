import Link from 'next/link';
import React from 'react';

const BoostLayer = () => (
  <div className="bg-sDarkViolet boostBg px-4 md:px-12 lg:px-16 xl:px-28 font-poppins flex flex-col items-center justify-center h-60">
    <p id="boostText" className=" text-2xl sm:text-4xl mb-4 font-bold text-white">Boost your links today</p>
    <Link href="/">
      <a id="boostButton" className="px-6 py-2 bg-sCyan text-white rounded-2xl cursor-pointer hover:bg-opacity-70 hover:text-opacity-80 text-center">Get Started</a>
    </Link>
  </div>
);

export default BoostLayer;
