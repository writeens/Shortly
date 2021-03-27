import Link from 'next/link';
import React from 'react';

const GetStartedLayer = () => (
  <div className="flex flex-col sm:flex-row sm:pt-16 pb-32 sm:pb-28 pl-4 sm:pr-0 pr-4 md:pl-12 lg:pl-16 xl:pl-28 items-center">
    <div className="flex flex-col font-poppins w-full sm:w-1/2 lg:w-2/5 order-2 sm:order-1">
      <p id="gsHeader" className=" text-4xl lg:text-6xl leading-tight font-bold text-sVeryDarkBlue mb-3 text-center sm:text-left">More than just shorter links</p>
      <p id="gsBody" className="text-sGreyViolet mb-6 text-center sm:text-left text-base">
        Build your brands recognition and get detailed
        insights into how your links are performing
      </p>
      <Link href="/">
        <a id="gsLink" data-cy="getStartedButton" className="px-6 py-2 bg-sCyan text-white rounded-2xl cursor-pointer hover:bg-opacity-70 hover:text-opacity-80 text-center self-center sm:self-start">Get Started</a>
      </Link>
    </div>
    <div className="flex-1 w-full flex justify-center sm:justify-end order-1 sm:order-2 mb-6 sm:mb-0">
      <img id="gsImage" src="/illustration-working.svg" alt="illustration_working" className="max-h-96" />
    </div>
  </div>
);

export default GetStartedLayer;
