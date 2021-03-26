import React from 'react';

const ShortlyInput = () => {
  console.log('object');
  return (
    <div className="bg-sDarkViolet p-4 sm:p-10 flex flex-col sm:flex-row w-full sm:w-4/5 self-center font-poppins rounded-md relative -mt-16 sm:-mt-12 mb-20 sm:mb-24 shadow-md">
      <div className="absolute inset-0 z-0 rounded-md p-0.5">
        <img src="/bg-boost-desktop.svg" alt="design_element" className="w-full h-full" />
      </div>
      <label className="flex flex-1 z-10 h-14 sm:mb-0 mb-4 sm:mr-4" htmlFor="input">
        <input id="input" type="text" className=" flex-1 rounded-md" />
      </label>
      <button
        type="button"
        onClick={() => {}}
        className=" z-10 px-6 py-2 bg-sCyan text-white rounded-md cursor-pointer hover:bg-opacity-70 hover:text-opacity-80 text-center"
      >
        Shorten It

      </button>
    </div>
  );
};

export default ShortlyInput;
