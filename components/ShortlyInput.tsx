import React, { useEffect, useState } from 'react';
import isURL from 'validator/lib/isURL';
import { shortenURL, Result, getLinksFromLocalStorage } from '../api/handlers';
import ResultCard from './ResultCard';

const initialValueForAllLinks:Result[] = [];

const ShortlyInput = () => {
  const [allLinks, setAllLinks] = useState(initialValueForAllLinks);
  const [link, setLink] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  /** HANDLE LINK SHORTENING PROCESS AND UPDATE LOADING STATES ACCORDINGLY */
  const handleLinkShortening = async () => {
    setIsLoading(true);
    if (link === '') {
      setIsLoading(false);
      setErrorMessage('Please add a link');
      return;
    }
    if (isURL(link) === false) {
      setIsLoading(false);
      setErrorMessage('Please enter a valid link');
      return;
    }
    const { data, message, status } = await shortenURL(link);
    setIsLoading(false);
    if (status === 'OK') {
      setLink('');
      setAllLinks((initialLinks) => [
        {
          originalLink: data.originalLink,
          fullShortLink: data.fullShortLink,
          isCopied: data.isCopied,
        },
        ...initialLinks,
      ]);
      return;
    }
    setErrorMessage(message);
  };

  /** CLEAR ERROR AND UPDATE TEXT AS USER TYPES */
  const handleChangeLinkText = (e) => {
    setErrorMessage('');
    const { value } = e.target;
    setLink(value);
  };

  /** COPY TO USER'S CLIPBOARD */
  const handleCopyLink = (copiedLink) => {
    const newLinks = allLinks.map((item) => (
      item.fullShortLink === copiedLink
        ? { ...item, isCopied: true } : item));
    setAllLinks(newLinks);
  };

  useEffect(() => {
    const linksFromStorage = getLinksFromLocalStorage();
    setAllLinks(linksFromStorage.map((aLink) => ({ ...aLink, isCopied: false })));
  }, []);

  return (
    <div className="flex flex-col -mt-16 sm:-mt-12 mb-10 w-full sm:w-11/12 lg:w-4/5 self-center font-poppins relative">

      <div id="inputBg" className="bg-sDarkViolet inputBg p-4 sm:p-10 flex flex-col sm:flex-row rounded-md shadow-md mb-10">
        <label className="flex flex-col flex-1 z-10 h-14 sm:mb-0 mb-7 sm:mr-4 relative" htmlFor="input">
          <input
            id="input"
            type="text"
            className={`flex-1 rounded-md pl-4 ${errorMessage ? 'ring-2 ring-sRed placeholder-sRed' : ''}`}
            value={link}
            onChange={handleChangeLinkText}
            placeholder="Shorten a link here..."
          />
          {errorMessage && <p id="inputErrorMessage" className=" text-sRed text-sm absolute ml-2 -bottom-6">{errorMessage}</p>}
        </label>
        <button
          id="inputButton"
          type="button"
          onClick={handleLinkShortening}
          disabled={isLoading}
          className={`z-10 px-6 py-2 bg-sCyan text-white rounded-md ${isLoading ? 'cursor-wait' : 'cursor-pointer'} hover:bg-opacity-70 hover:text-opacity-80 text-center`}
        >
          {isLoading ? 'Please Wait' : 'Shorten It'}

        </button>
      </div>
      <div className="flex-col flex">
        {allLinks.length > 0 && (allLinks.map((oneLink) => (
          <ResultCard
            key={oneLink.fullShortLink}
            initialLink={oneLink.originalLink}
            finalLink={oneLink.fullShortLink}
            isCopied={oneLink.isCopied}
            handleCopyLink={handleCopyLink}
          />
        )))}
      </div>
    </div>
  );
};

export default ShortlyInput;
