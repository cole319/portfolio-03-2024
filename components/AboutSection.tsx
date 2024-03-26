import React from "react";
import Image from "next/image";
import Underline from "./Underline";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-20">
        <h1 className="text-center font-bold text-4xl text-slate-900">
          About Me
          <Underline />
        </h1>
        <br />
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-y-0  md:flex-row md:text-left border-2 border-slate-200 rounded-md">
          <div className="w-full md:w-3/5 px-10 pb-10 md:p-10 bg-slate-200 pt-10 ">
            <div className="flex flex-col space-y-2">
              <div className="bg-slate-100 space-y-2 space-x-0 rounded-md shadow-sm py-2 px-4 ">
                <h1 className="font-semibold text-red-500">Education: </h1>
                <div className="p-1">
                  <div className="flex">
                    <h1 className="w-2/5 font-semibold">Degree:</h1>
                    <p className="w-3/5">Bachelor of Technology (B.Tech)</p>
                  </div>
                  <div className="flex">
                    <h1 className="w-2/5 font-semibold">Major:</h1>
                    <p className="w-3/5">Computer Science and Engineering</p>
                  </div>
                  <div className="flex">
                    <h1 className="w-2/5 font-semibold">Alma Mater:</h1>
                    <p className="w-3/5">
                      Indian Institute of Technology (ISM) Dhanbad
                    </p>
                  </div>
                  <div className="flex">
                    <h1 className="w-2/5 font-semibold">Year:</h1>
                    <p className="w-3/5">Nov, 2020 - May, 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <br />
              <p className="text-xl text-center md:text-left">Hi !</p>
              <p className="text-lg text-center md:text-left">
                I am a passionate blockchain and frontend developer, creating
                innovative and user friendly web applications. I have a strong
                background in Solidity, Ethereum, Web3.js, ReactJS, NextJS, and
                JavaScript, as well as a keen interest in emerging technologies
                and trends in the decentralized space. I am excited to see where
                my career takes me and am always open to new opportunities.
              </p>
            </div>
          </div>
          <div className="text-center hidden md:w-2/5 md:text-left pr-10 md:flex md:flex-col md:justify-center pb-10 md:pb-0 hover:animate-pulse">
            <Image
              src="/blingbot.svg"
              alt=""
              width={400}
              height={325}
              className="p-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
