"use client";
import React from "react";
import Sidebar from "../sidebar";
import Header from "../header";

const CommonLayout = ({ children }) => {
  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <div className=" xl:ml-[323px]">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default CommonLayout;
