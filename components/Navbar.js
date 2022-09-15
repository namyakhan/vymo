  import React, { useState } from "react";
  import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
  import { Link } from "react-scroll";
  import { Links } from "../pages/contextProvider";
  const Navbar = () => {
  
    let [open, setOpen] = useState(false);

    return (
      <nav className=" gradient container mx-auto hover:drop-shadow-sm w-full left-0   md:gradient pt-2 lg:pt-5 ">
        <div className="md:flex items-center justify-between py-[10px] lg:px-[50px] px-[10px]">
          {/* Logo */}
          <div className=" cursor-pointer flex items-center space-x-2">
            <img
              src="images/vymo.svg"
              alt="hero"
              loading="lazy"
              className="h-6 md:h-8"
            />
            <h6>Vymo</h6>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-white absolute right-3 top-4 cursor-pointer md:hidden"
          >
            {!open ? (
              <Bars3Icon className="h-7" />
            ) : (
              <XMarkIcon className="h-7" />
            )}
          </div>

          <ul
            className={`md:flex md:items-center md:justify-between space-x-5 lg:space-x-4 md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 mr-20 ${
              open ? "top-10 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.link}
                  to={link.link}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={900}
                >
                  <a>{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>

          <button className=" hidden md:block">Book Demo</button>
        </div>
      </nav>
    );
  };

  export default Navbar;
