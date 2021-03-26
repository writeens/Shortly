import React from 'react';
import InfoCard from './InfoCard';
import ShortlyInput from './ShortlyInput';

const AdvancedStatsLayer = () => (
  <div className=" bg-sOffWhite flex-col flex px-4 md:px-12 lg:px-16 xl:px-28">
    <ShortlyInput />
    <div className="flex flex-col font-poppins w-full sm:w-96 self-center mb-20">
      <p className="text-3xl mb-3 font-bold text-center text-sVeryDarkBlue">Advanced Statistics</p>
      <p className="text-sGreyViolet mb-6 text-center text-lg">
        Track how your links are performing across
        the web with our advanced statistics dashboard.
      </p>
    </div>
    <div className=" grid grid-cols-1 gap-y-20 sm:gap-y-0 sm:grid-cols-3 md:gap-x-8 lg:gap-x-10 sm:gap-x-4 mb-28 relative items-center">
      <div className="absolute inset-0 flex sm:flex-row flex-col items-center">
        <hr className="sm:w-full w-2 h-full sm:h-2 z-0 rounded-full bg-sCyan" />
      </div>
      <InfoCard
        title="Brand Recognition"
        content="Boost your brand recognition with each click. Generic links don&apos;t mean a thing.
      Branded links help instill confidence in your content"
        image="/icon-brand-recognition.svg"
        alt="icon-brand-recognition"
      />
      <InfoCard
        className=" sm:mt-16"
        title="Detailed Records"
        content="Gain insights into who is clicking your links. knowing when and where people engage with your content helps inform better decisions."
        image="/icon-detailed-records.svg"
        alt="icon-detailed-records"
      />
      <InfoCard
        className=" sm:mt-32"
        title="Fully Customizable"
        content="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        image="/icon-fully-customizable.svg"
        alt="icon-detailed-records"
      />
    </div>
  </div>
);

export default AdvancedStatsLayer;
