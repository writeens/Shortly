import Link from 'next/link';
import React from 'react';
import LogoSVG from './LogoSVG';

const FooterStack = ({ links, title }
    :{links?:{title:string, index:number, link:string}[], title:string}) => (
      <div id={`footer${title}`} className="font-poppins flex-col flex text-white w-full sm:w-auto mb-4 sm:mb-0 sm:text-left text-center">
        <p id={`footerTitle${title}`} className=" font-bold text-base mb-3">{title}</p>
        {links.length > 0 && links.map((item) => (
          <Link href={item.link} key={item.index}>
            <a id={`footer${title}${item.index}`} className="text-sm cursor-pointer font-medium mb-2 text-sGreyViolet hover:text-white">{item.title}</a>
          </Link>
        ))}
      </div>
);

FooterStack.defaultProps = {
  links: [],
};

const Footer = () => (
  <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between bg-sVeryDarkBlue py-10 sm:py-16 px-4 md:px-12 lg:px-16 xl:px-28">
    <div className=" mr-0 md:mr-20 xl:mr-40 mb-8 sm:mb-0">
      <LogoSVG color="#FFF" />
    </div>
    <div className="flex flex-col sm:flex-row w-auto sm:w-108 sm:justify-between items-center sm:items-start">
      <FooterStack
        links={[
          { index: 0, title: 'Link Shortening', link: '/' },
          { index: 1, title: 'Branded Links', link: '/' },
          { index: 2, title: 'Analytics', link: '/' },
        ]}
        title="Features"
      />
      <FooterStack
        links={[
          { index: 0, title: 'Blog', link: '/' },
          { index: 1, title: 'Developers', link: '/' },
          { index: 2, title: 'Support', link: '/' },
        ]}
        title="Resources"
      />
      <FooterStack
        links={[
          { index: 0, title: 'About', link: '/' },
          { index: 1, title: 'Our Team', link: '/' },
          { index: 2, title: 'Careers', link: '/' },
          { index: 3, title: 'Contact', link: '/' },
        ]}
        title="Company"
      />
    </div>
    <div className="flex w-36 justify-between">
      <Link href="">
        <img src="/icon-facebook.svg" alt="icon-facebook" className="w-4 h-4 cursor-pointer" />
      </Link>
      <Link href="">
        <img src="/icon-twitter.svg" alt="icon-twitter" className="w-4 h-4 cursor-pointer" />
      </Link>
      <Link href="">
        <img src="/icon-pinterest.svg" alt="icon-pinterest" className="w-4 h-4 cursor-pointer" />
      </Link>
      <Link href="">
        <img src="/icon-instagram.svg" alt="icon-instagram" className="w-4 h-4 cursor-pointer" />
      </Link>
    </div>
  </div>
);

export default Footer;
