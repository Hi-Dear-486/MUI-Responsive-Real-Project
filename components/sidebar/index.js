"use client";
import { UseContext } from "@/context";
import { routes } from "@/utils";
import Link from "next/link";
import React, { useState } from "react";
import { HiX } from "react-icons/hi";

// const comps = [<h1>first</h1>, <h1>second</h1>];
const Sidebar = () => {
  const { openSidebar, setOpenSidebar } = UseContext();
  // const [first, setFirst] = useState(0);
  return (
    <div
      className={`sm:none duration-200 fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        openSidebar ? "translate-x-0" : "translate-x-96 xl:translate-x-0"
      }`}
    >
      <span
        onClick={() => setOpenSidebar(false)}
        className="absolute right-4 top-4 block cursor-pointer xl:hidden"
      >
        <HiX />
      </span>

      <div className="mx-[56px] m-[50px] flex items-center">
        <div className="ml-1 mt-1 h-2.5 text-[20px] font-bold text-navy-700 dark:text-white">
          ADMIN DASHBOARD
        </div>
      </div>

      <ul className="mb-auto pt-1">
        {routes.map((items, index) => (
          <Link href={items.layout} key={index}>
            <div
              className="relative mb-3 flex hover:cursor-pointer"
              // onClick={() => setFirst(index)}
            >
              <li className="my-[3px] flex cursor-pointer items-center px-8">
                <span className="text-gray-600 font-[24px]">{items.icon}</span>
                <p className="leading-1 text-[20px] ml-4 flex font-medium text-gray-700">
                  {items.name}
                </p>
              </li>
            </div>
          </Link>
        ))}
      </ul>
      {/* <div>{comps[first] ?? "not defined"}</div> */}
    </div>
  );
};

export default Sidebar;
