"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineMail,
} from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 pt-16 sm:pt-32 md:pt-40 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-xl border-[2px] border-slate-900 p-2"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl text-slate-900 font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Suryarghya!
          </h1>
          <br />
          <h1 className="text-3xl ">
            <span>I&#39;m a </span>
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Web Developer",
                2000,
                "Blockchain Developer",
                2000,
              ]}
              speed={50}
              className="font-semibold text-red-500"
              wrapper="span"
              repeat={Infinity}
            />
          </h1>

          <p className="text-lg mt-4 mb-6 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            praesentium aliquam aperiam aliquid sapiente accusamus.
          </p>
          <br />
          <div className="flex flex-col md:flex-row space-x-0 space-y-2 md:space-x-2 md:space-y-0 ">
            <Link
              to="projects"
              className="text-slate-50 font-semibold px-6 py-2 bg-slate-900 rounded shadow hover:bg-slate-800 border-2 border-slate-900 cursor-pointer"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
            <Link
              to="contact"
              className="text-slate-900 font-semibold px-6 py-2 bg-transparent rounded shadow hover:bg-slate-900 hover:text-slate-50 duration-300 border-2 border-slate-900 cursor-pointer"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row items-center justify-center space-x-10 mb-1 py-20 ">
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

          {/* <a
            href="https://www.youtube.com/channel/UCQBMkSDgbxDb8usMeXmOZyA"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineYoutube
              className="hover:-translate-y-1 transition-transform cursor-pointer text-slate-900 "
              size={30}
            />
          </a> */}
        </div>
      </div>
      {/* <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div> */}
    </section>
  );
};

export default HeroSection;
