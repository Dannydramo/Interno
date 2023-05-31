import React, { Fragment, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import OpenMenu from "../../assets/icon-menu.svg";
import Close from "../../assets/icon-close.svg";
import Logo from "../../assets/Logo.svg";

interface MobileNav {
  open: boolean;
  setOpen: any;
}

const Navbar: React.FC<MobileNav> = ({ open, setOpen }) => {
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const [navShadow, setNavShadow] = useState("");

  // Change Nav Background OnScroll
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      setNavbarBackground("rgb(250, 248, 248)");
      setNavShadow(
        "0px -2px 2px rgba(30, 30, 30, 0.07),0px 2px 2px rgba(30, 30, 30, 0.1)"
      );
    } else {
      setNavbarBackground("transparent");
      setNavShadow("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <nav
        className="fixed top-0 w-full z-[40]"
        style={{ backgroundColor: navbarBackground, boxShadow: navShadow }}
      >
        <div className="flex justify-between items-center w-[95%] md:w-[90%] mx-auto h-16 md:h-20">
          <div className="z-[100]">
            <Link to="/" className="font-bold text-2xl">
              <img src={Logo} alt="" />
            </Link>
          </div>

          <img
            src={open ? Close : OpenMenu}
            className="lg:hidden z-[42]"
            onClick={() => setOpen(!open)}
          />
          <div
            className={`flex flex-col lg:justify-between w-[85%] lg:w-auto items-start lg:items-center  lg:flex-row lg:space-x-8 lg:bg-transparent space-y-5 lg:space-y-0 lg:static fixed top-0 z-[32] lg:h-auto  px-11 py-12 lg:py-0 lg:px-0 `}
          >
            <ul
              className={`flex flex-col rounded-3xl lg:flex-row text-base justify-between lg:items-center space-y-6 lg:space-y-0  lg:space-x-12 absolute top-20 left-4 lg:relative duration-500 ease-linear lg:block w-full lg:top-0 ${
                !open
                  ? "top-[-250%]  py-4 text-center"
                  : "top-0 bg-white lg:bg-transparent w-[100%] py-4 text-center"
              }`}
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/properties/for-sale">For Sale</NavLink>
              <NavLink to="/properties/for-rent">For Rent</NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
