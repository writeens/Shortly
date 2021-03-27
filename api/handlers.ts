/* eslint-disable import/prefer-default-export */
import axios from 'axios';

/** RESULT TS INTERFACE */
export type Result = {
    originalLink:string,
    fullShortLink:string,
    isCopied:boolean
}

/** STORE NEW RESULTS IN LOCAL STORAGE */
const addToLocalStorage = (data:Result) => {
  const storage = window.localStorage.getItem('shortly');
  if (storage === null) {
    const newData = JSON.stringify([data]);
    window.localStorage.setItem('shortly', newData);
  } else {
    const parsedStorageItem = JSON.parse(storage);
    const newData = JSON.stringify([data, ...parsedStorageItem]);
    window.localStorage.setItem('shortly', newData);
  }
};

/** FETCH FROM LOCAL STORAGE */
const getLinksFromLocalStorage = ():Result[] => {
  const storage = window.localStorage.getItem('shortly');
  if (storage === null) {
    return [] as Result[];
  }
  const parsedStorageItem = JSON.parse(storage);
  return parsedStorageItem as Result[];
};

/** MAKE API CALL TO SHORTEN URL */
const shortenURL = async (url:string)
:Promise<{message:string, status:string, data?:Result, error?:{}}> => {
  try {
    const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`);

    const newData = {
      fullShortLink: response.data.result.full_short_link,
      originalLink: response.data.result.original_link,
      isCopied: false,
    };

    if (response.data.ok) {
      addToLocalStorage(newData);
    }

    return {
      message: 'success',
      status: 'OK',
      data: newData,
    };
  } catch (e) {
    console.log(e);
    return { message: 'an_error_occured', status: 'ERROR', error: e };
  }
};

export {
  shortenURL,
  getLinksFromLocalStorage,
  addToLocalStorage,
};
