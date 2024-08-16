"use client";
import { UseContext } from "@/context";
import { useTheme } from "next-themes";
import { RiSunFill, RiMoonFill } from "react-icons/ri";
// import FiAlignJustify from "react-icons/fi";
const Header = () => {
  const { theme, setTheme } = useTheme();
  const { openSidebar, setOpenSidebar } = UseContext();
  return (
    <>
      <div
        className="cursor-pointer"
        onClick={() => setOpenSidebar(!openSidebar)}
      >
     🗒
      </div>
      <div
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="cursor-pointer"
      >
        {theme === "dark" ? (
          <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
        ) : (
          <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
        )}
      </div>
    </>
  );
};

export default Header;
