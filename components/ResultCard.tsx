import React from 'react';

const ResultCard = ({
  initialLink, finalLink, isCopied, handleCopyLink,
}
    :{initialLink:string, finalLink:string, isCopied:boolean, handleCopyLink:Function}) => (
      <div className="rounded-md py-3 font-poppins bg-white shadow flex flex-col sm:flex-row items-stretch sm:items-center w-full mb-4">
        <p className="text-sVeryDarkBlue px-3 pb-2 sm:pb-0 border-b sm:border-none border-sGreyViolet mb-2 sm:mb-0 flex-1">{initialLink}</p>
        <p className="text-sCyan px-3 mb-2 sm:mb-0">{finalLink}</p>
        <button
          type="button"
          onClick={() => handleCopyLink(finalLink)}
          className={`px-6 py-2 mx-3 text-white rounded-md cursor-pointer hover:bg-opacity-70 hover:text-opacity-80 text-center outline-none focus:outline-none ${isCopied ? 'bg-sDarkViolet' : 'bg-sCyan'}`}
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>
);

export default ResultCard;
