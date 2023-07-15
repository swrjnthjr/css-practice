import React, { useState } from "react";
import { navLinks } from "../constants";
import { close, logo, menu } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="log" className="w-[124px] h-[32px]"></img>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((navLink, index) => {
          return (
            <li
              key={index}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a href={`#${navLink.id}`}></a>
              {navLink.title}
            </li>
          );
        })}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] g-[28px] object-contain"
          onClick={() => setToggle((prev: boolean) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((navLink, index) => {
              return (
                <li
                  key={index}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-4"
                  }`}
                >
                  <a href={`#${navLink.id}`}></a>
                  {navLink.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
