import React from "react";
import Image from "next/image";
import Underline from "./Underline";
import { Tooltip } from "react-tooltip";

const skills = [
  { skill: "Solidity" },
  { skill: "Ethereum" },
  { skill: "ReactJs" },
  { skill: "BlockChain" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "NodeJs" },
  { skill: "NextJs" },
  { skill: "Web3.js" },
  { skill: "Ethers.js" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Git" },
  { skill: "C++" },
  { skill: "MongoDB" },
  { skill: "SQL" },
  { skill: "Python" },
  { skill: "Flask" },
  { skill: "Tensorflow" },
];

const AboutSection = () => {
  return (
    <section id="skills">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl text-slate-900">
          Skills
          <Underline />
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="text-center md:w-full">
            <div className="flex flex-wrap flex-row justify-center z-10">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-transparent px-4 py-2 mr-2 mt-2 text-slate-500 rounded font-semibold border-[2px] border-slate-900 hover:bg-red-600 hover:border-red-600 hover:text-slate-50 cursor-pointer"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
