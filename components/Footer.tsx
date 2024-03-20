import React from "react";

import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-slate-200 border-0"></hr>
      <div className="mx-auto px-4 py-10 flex flex-col text-center text-slate-900 md:flex-row md:justify-between space-y-4 md:space-y-0">
        <div className="flex flex-row items-center justify-center space-x-1 text-slate-900 ">
          © 2023 Suryarghya Saha<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-8 mb-1">
          <a href="https://github.com/cole319" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-slate-900"
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/suryarghya-saha-286ab4147/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-slate-900 "
              size={30}
            />
          </a>
          <a
            href="https://twitter.com/dem_e_god"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-slate-900 "
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
