import React, { useState } from "react";
import logo from "../images/logo.png";
import hamburger from "../images/icon-hamburger.svg";
import iconClose from "../images/icon-close.svg";
import useClickOutside from "./useClickOutside";

const links = [
  {
    name: "Halaman Utama",
    href: "#home",
  },
  {
    name: "Lokasi Praktek",
    href: "#location",
  },
  {
    name: "Kontak Kami",
    href: "#contact",
  },
  {
    name: "Artikel",
    href: "#article",
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const nav = useClickOutside(() => {
    setNavbar(false);
  }, navbar);

  const navbarHandler = () => {
    setNavbar(!navbar);
  };

  return (
    <>
      <div className="px-7 py-5 gap-5 z-30 sticky top-0 w-full bg-white shadow-lg flex items-center justify-between">
        <img className="w-[150px]" src={logo} alt="logo" />

        <button className="md:hidden block" onClick={navbarHandler}>
          <img src={navbar ? iconClose : hamburger} alt="hamburger icon" />
        </button>

        <div className="md:flex hidden items-center gap-5">
          {links.map((link, index) => (
            <a
              key={index}
              href={`${link.href}`}
              class="relative inline-flex items-center justify-center px-2 py-2 overflow-hidden font-semibold text-indigo-600 rounded-lg shadow-2xl text-center group"
            >
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
              </span>
              <span class="relative text-white">{link.name}</span>
            </a>
          ))}

          <button className="px-4 py-2 rounded-full bg-red-500 hover:bg-blue-500 transition-all active:scale-[1.05] text-white font-semibold text-center">
            Konsultasi Gratis
          </button>
        </div>
      </div>

      <div
        ref={nav}
        className={`${
          navbar ? "top-24 opacity-100" : "-top-[300px] opacity-0"
        } fixed md:hidden flex flex-col transition-all text-center gap-5 rounded-lg uppercase font-semibold bg-slate-200 px-5 py-3 w-[90%] left-[50%] shadow-lg z-20 -translate-x-[50%]`}
      >
        {links.map((link, index) => (
          <a key={index} className="hover:underline" href={link.href}>
            {link.name}
          </a>
        ))}

        <div className="w-full border-t-2 border-black">
          <button className="mt-5 px-5 py-3 rounded-full bg-red-500 hover:bg-blue-500 transition-all active:scale-[1.05] text-white font-semibold text-center">
            Konsultasi Gratis
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
