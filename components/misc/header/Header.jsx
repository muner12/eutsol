"use client";
import React, { useState } from "react";
import { TbGridDots } from "react-icons/tb";
import { GoBell } from "react-icons/go";
import { FiInbox } from "react-icons/fi";
import { BiExtension } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineQuestionMark } from "react-icons/md";
import TopCards from "./TopCards";
import Image from "next/image";

// import { BsFillArrowLeftSquareFill } from "react-icons/bs";
const Header = () => {
  const [showCard, setShowCard] = useState(false);
  return (
    <div className="bg-[#E1EFF2] py-2 lg:h-[10vh]   md:[10vh] sm:[10vh] h-[7vh] fixed top-0 w-full z-40 ">
      <div className="flex items-center justify-between w-[95%] m-auto">
        <div className="flex items-center gap-3">
          <div
            className="relative"
            onClick={() => {
              setShowCard(!showCard);
            }}
          >
            <div className="p-2 cursor-pointer hover:bg-pink-100 transition-all duration-150 rounded-lg">
              <TbGridDots className="text-2xl font-bold" />
            </div>
            <div className={`${showCard ? "flex" : "hidden"}`}>
              <TopCards />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="rounded-full bg-[#00D2D2] w-[10] h-[10]"></div>
            <div className="rounded-full bg-[#00D2D2] w-[10] h-[10]"></div>
          </div>
          <div className="flex gap-2 items-center ">
            <h1 className="font-extrabold text-2xl ">EUT </h1>{" "}
            <p className="font-extralight ">Warehouse Management</p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          {/* logos */}
          <div className="flex items-center justify-between">
            <div className=" p-4 relative cursor-pointer hover:bg-[#DBDEEB] transition-all duration-150 rounded-lg text-xl font-bold">
              <GoBell />
              <span className="absolute inset-0 object-left-top left-[1.8rem]">
                <div className="inline-flex items-center px-1.5 py-0.5  rounded-full text-xs font-semibold leading-4 bg-red-500 text-white  top-2">
                  6
                </div>
              </span>
            </div>
            <div className=" p-4 relative cursor-pointer hover:bg-[#DBDEEB] transition-all duration-150 rounded-lg text-xl font-bold">
              <FiInbox />
              <span className="absolute inset-0 object-left-top left-[1.8rem]">
                <div className="inline-flex items-center px-1.5 py-0.5  rounded-full text-xs font-semibold leading-4 bg-white text-black  top-2">
                  6
                </div>
              </span>
            </div>
            <div className="p-2 cursor-pointer hover:bg-[#DBDEEB] transition-all duration-150 rounded-lg text-xl font-bold">
              <Image
                alt="invite"
                src="/icons/invite-member.png"
                width={20}
                height={20}
              />
            </div>
            <div className="p-2 cursor-pointer hover:bg-[#DBDEEB] transition-all duration-150 rounded-lg text-xl font-bold">
              <BiExtension />
            </div>
            <div className="h-[50px] w-[4px] m-1 bg-[#DBDEEB]" />

            <div className="p-2 cursor-pointer hover:bg-[#DBDEEB] transition-all duration-150 rounded-lg text-xl font-bold">
              <IoSearchSharp />
            </div>
            <div className="p-2 cursor-pointer hover:bg-[#DBDEEB] transition-all duration-150 rounded-lg text-xl font-bold">
              <MdOutlineQuestionMark />
            </div>
          </div>
          {/* profile */}
          <div>
            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg
                className="absolute w-12 h-12 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
