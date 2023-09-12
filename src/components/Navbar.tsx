import { useState } from "react";
import { close, logo, menu } from "../assets";
import { Fade } from "react-awesome-reveal";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <Fade direction="down">
      <nav className="w-full flex py-6 justify-between items-center navbar">
        <img src={logo} alt="hoobank" className=" h-[32px] w-[124px]" />
        <Fade direction={"down"} cascade delay={1e3} damping={1e-2}>
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mr-10"
                } text-white`}
              >
                <a
                  href={`#${nav.id}`}
                  className={`font-poppins hover:text-secondary`}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </Fade>
        <div className="sm:hidden flex flex-1 justify-end items-center z-40">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className=" h-[28px] w-[28px] object-contain"
            onClick={() => settoggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-10"
                  } text-white`}
                >
                  <a href={`#${nav.id}`} className={`font-poppins`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </Fade>
  );
};

export default Navbar;
