import React from 'react';
import ResultCard from './ResultCard';

const ShortlyInput = () => {
  console.log('object');
  return (
    <div className="flex flex-col -mt-16 sm:-mt-12 mb-10 w-full sm:w-11/12 lg:w-4/5 self-center font-poppins relative">
      <div className="bg-sDarkViolet inputBg p-4 sm:p-10 flex flex-col sm:flex-row rounded-md shadow-md mb-10">
        <label className="flex flex-1 z-10 h-14 sm:mb-0 mb-4 sm:mr-4" htmlFor="input">
          <input id="input" type="text" className=" flex-1 rounded-md pl-4" placeholder="Shorten a link here..." />
        </label>
        <button
          type="button"
          onClick={() => {}}
          className=" z-10 px-6 py-2 bg-sCyan text-white rounded-md cursor-pointer hover:bg-opacity-70 hover:text-opacity-80 text-center"
        >
          Shorten It

        </button>
      </div>
      <div className="flex-col flex">
        <ResultCard
          initialLink="https://www.frontendmentor.io"
          finalLink="https://rel.ink/k4IKyk"
          isCopied={false}
        />
      </div>
    </div>
  );
};

export default ShortlyInput;
