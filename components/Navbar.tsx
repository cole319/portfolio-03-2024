"use client";
import React from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Image from "next/image";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Skills",
    page: "skills",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="w-full mx-auto px-4 md:px-20 fixed top-0 z-50 shadow bg-neutral-50">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:block">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <div className="container flex items-center space-x-2">
                <Image
                  src="/glowbotTransparent.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="cursor-pointer rounded-full bg-slate-950 hover:animate-pulse"
                />

                <div
                  className="text-[25px] cursor-pointer text-slate-900"
                  style={{ fontFamily: "Ysabeau SC", fontWeight: 300 }}
                >
                  Sury
                  <span className="text-[#fa5252]">&#197;</span>rghya Saha
                </div>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-10 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "block lg:inline-block text-slate-900 text-lg hover:text-slate-800 cursor-pointer hover:bg-slate-200 duration-300 py-1 px-3 rounded-md"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
