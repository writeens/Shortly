import React from 'react';

const InfoCard = ({
  className, title, image, content, alt,
}:{className?:string, title:string, image:string, content:string, alt:string}) => (
  <div style={{ height: 'fit-content' }} className={` z-10 bg-white rounded-lg px-9 shadow-md font-poppins pb-9 flex-1 flex flex-col items-center sm:items-start ${className}`}>
    <div className="w-20 h-20 rounded-full p-5 bg-sDarkViolet -mt-10 mb-8">
      <img src={image} alt={alt} className=" w-full h-full" />
    </div>
    <p className="text-xl font-bold mb-3 text-sVeryDarkBlue">{title}</p>
    <p className=" text-sGreyViolet text-base mb-1">
      {content}
    </p>
  </div>
);

InfoCard.defaultProps = {
  className: '',
};

export default InfoCard;
