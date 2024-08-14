"use client";
import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
const GlobalState = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const statedata = {
    openSidebar,
    setOpenSidebar,
  };
  return (
    <GlobalContext.Provider value={statedata}>
      {children}
    </GlobalContext.Provider>
  );
};

export const UseContext = () => {
  return useContext(GlobalContext);
};
export default GlobalState;
