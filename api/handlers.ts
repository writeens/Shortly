/* eslint-disable import/prefer-default-export */
import axios from 'axios';

interface Result {
    originalLink:string,
    fullShortLink:string,
    isCopied:boolean
}

/** MAKE API CALL TO SHORTEN URL */
const shortenURL = async (url:string)
:Promise<{message:string, status:string, data?:Result, error?:{}}> => {
  try {
    const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`);

    console.log(response.data);

    return {
      message: 'success',
      status: 'OK',
      data: {
        fullShortLink: response.data.result.full_short_link,
        originalLink: response.data.result.original_link,
        isCopied: false,
      },
    };
  } catch (e) {
    console.log(e);
    return { message: 'an_error_occured', status: 'ERROR', error: e };
  }
};

export {
  shortenURL,
  Result,
};
