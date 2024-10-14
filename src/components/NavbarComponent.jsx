import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "Components", href: "/components" },
  ];

  return (
    <nav className="flex w-full items-center bg-white dark:bg-dark" role="navigation">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-96 max-w-full px-4">
            <h1 className="block w-full py-5">
              <img
                loading="lazy"
                src="https://ics-skillfulparenting.org/wp-content/uploads/2023/04/cropped-Logo-for-web_black.png"
                alt="logo"
                className="w-80 sm:max-w-fit dark:hidden transition-all duration-300"
              />
            </h1>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-controls="navbarCollapse"
                id="navbarToggler"
                className={`${
                  open ? "navbarTogglerActive" : ""
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white transition-all duration-300"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white transition-all duration-300"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white transition-all duration-300"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent transition-all duration-300 ${
                  !open && "hidden"
                }`}
              >
                <ul className="block lg:flex">
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className={`flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex cursor-pointer items-center justify-between rounded-lg group ${
                          location.pathname === link.href ? 'text-primary' : ''
                        }`}
                      >
                        {link.title}
                        {link.title === "Components" && (
                          <span className="duration-200 lg:group-hover:-scale-y-100 ml-2">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              className="fill-current"
                            >
                              <path d="M12.0002 13.172L16.9502 8.22198L18.3642 9.63598L12.0002 16L5.63623 9.63598L7.05023 8.22198L12.0002 13.172Z"></path>
                            </svg>
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <Link
                to="/signin"
                aria-label="Sign in"
                className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                aria-label="Sign up"
                className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
