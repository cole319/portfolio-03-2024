import React from "react";
import SlideUp from "./SlideUp";
import Underline from "./Underline";
import skillList from "@/constants/skills.js";

const proficiencyCalculator = (proficiency: number) => {
  const width = Math.floor((proficiency / 10) * 100);
  return width.toString() + "%";
};

const Skills = () => {
  return (
    <section id="skills">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl text-slate-900">
          Skills
          <Underline />
        </h1>
        <br />
        <div className="flex flex-col justify-center z-10 text-center md:text-left space-y-2 md:mx-20">
          {skillList.map((skill, idx) => {
            return (
              <div
                key={idx}
                className="bg-transparent border-[1px] border-slate-900 rounded-md py-4 px-8 w-full shadow-md"
              >
                <h1 className="font-bold text-xl text-red-500 pb-4">
                  {skill.title}
                </h1>

                <div className="p-2 bg-slate-200 rounded-md">
                  {skill.contents.map((content, id) => {
                    return (
                      <div
                        key={id}
                        className="py-2 flex flex-col md:flex-row justify-between items-center"
                      >
                        <h1 className="mb-1 font-semibold md:w-2/6">
                          {content.name}
                        </h1>

                        <div className="bg-slate-100 mb-1 border-[1px] border-slate-400 rounded-sm w-full md:w-4/6 h-2">
                          <div
                            className="bg-gradient-to-r from-slate-400 to-slate-500 h-full rounded-sm "
                            style={{
                              width: proficiencyCalculator(content.proficiency),
                            }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
