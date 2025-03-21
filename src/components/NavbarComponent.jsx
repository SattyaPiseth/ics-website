import React, { useEffect, useState } from "react";
import DropdownComponent from "./DropdownComponent";
import ics_logo from "/ics_logo.avif";
import TranslateButton from "./TranslateButton";
import { useTranslation } from "react-i18next";
import useFontClass from "../utils/useFontClass";
import { NavLink, useLocation } from "react-router-dom";
export default function NavbarComponent() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const { fontClass } = useFontClass();
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50" role="banner">
      <div className="bg-white dark:bg-dark font-poppins">
        <div className="container mx-auto">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-96 px-4">
              <NavLink to="/" className="block w-full py-5" aria-label="Logo">
                <img
                  src={ics_logo}
                  alt="ICS Skillful Parenting Logo"
                  width="240"
                  height="80" // Set the actual dimensions of the logo
                  className="w-44 sm:w-52 md:w-60 xl:w-80 transition-all duration-300 dark:hidden"
                  loading="eager"
                />

                <img
                  src={ics_logo}
                  alt="ICS Skillful Parenting Logo"
                  width="240"
                  height="80" // Set the actual dimensions of the logo
                  className="hidden dark:block w-44 sm:w-52 md:w-60 xl:w-80 transition-all duration-300"
                  loading="eager"
                />
              </NavLink>
            </div>
            <div
              className={`flex w-full items-center justify-end px-4 ${fontClass}`}
            >
              <div>
                <button
                  onClick={() => setOpen(!open)}
                  aria-expanded={open}
                  aria-controls="navbarCollapse"
                  id="navbarToggler"
                  className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden transition-all duration-300`}
                  aria-label="Toggle navigation"
                >
                  {open ? (
                    <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 text-dark-6 duration-200 hover:text-dark dark:hover:text-white">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2386_67)">
                          <path
                            d="M1 1L7 7M7 7L13 13M7 7L13 1M7 7L1 13"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2386_67">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  ) : (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 xs:w-6 xs:h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true" // Hide this icon from assistive technologies
                    >
                      <path
                        fill="none"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="48"
                        d="M88 152h336M88 256h336M88 360h336"
                      ></path>
                    </svg>
                  )}
                </button>
                <nav
                  className={`absolute right-0 px-6 shadow lg:block lg:w-full header-navbar z-50 w-full max-w-full rounded bg-white py-3 shadow-features duration-300 dark:bg-dark-2 xs:max-w-full lg:static lg:mt-0 lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-none lg:dark:bg-transparent visible top-full opacity-100 lg:visible lg:opacity-100 ${
                    !open && "hidden"
                  }`}
                  id="navbarCollapse"
                >
                  <ul className="block lg:flex whitespace-nowrap border sm:border-transparent rounded-lg">
                    <li className="group relative hidden 2xl:block">
                      <NavLink
                        to={"about-us"}
                        className="flex py-2 justify-center text-base font-medium text-body-color hover:text-dark lg:ml-6 lg:inline-flex dark:text-dark-6 dark:hover:text-white uppercase group-hover:bg-primary/5 group-hover:text-primary dark:group-hover:bg-dark-2 dark:group-hover:text-white lg:px-1.5 xl:px-3 rounded-lg"
                      >
                        {/* {navbarData?.about?.title} */}
                        {`${t("about.title")}`}
                      </NavLink>
                    </li>

                    <ul className="lg:block 2xl:hidden">
                      <DropdownComponent
                        label={t("label.about&contact")}
                        dropDownSection={t("aboutUsSection", {
                          returnObjects: true,
                        })}
                      />
                    </ul>
                    <ul>
                      <DropdownComponent
                        label={t("label.partners&support")}
                        dropDownSection={t("partnersSection", {
                          returnObjects: true,
                        })}
                      />
                    </ul>
                    <ul>
                      <DropdownComponent
                        label={t("label.expertise&resources")}
                        dropDownSection={t("expertiseSection", {
                          returnObjects: true,
                        })}
                      />
                    </ul>

                    <li className="group relative hidden 2xl:block">
                      <NavLink
                        to={"contact-us"}
                        className="flex py-2 justify-center text-base font-medium text-body-color hover:text-dark lg:ml-6 lg:inline-flex dark:text-dark-6 dark:hover:text-white uppercase group-hover:bg-primary/5 group-hover:text-primary dark:group-hover:bg-dark-2 dark:group-hover:text-white lg:px-1.5 xl:px-3 rounded-lg"
                      >
                        {`${t("contact.title")}`}
                      </NavLink>
                    </li>
                    <li className="group relative hidden 2xl:block">
                      <NavLink
                        to={"get_involved"}
                        className="flex py-2 justify-center text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base font-medium text-body-color hover:text-dark lg:ml-6 lg:inline-flex lg:w-auto lg:justify-center dark:text-dark-6 dark:hover:text-white uppercase group-hover:bg-primary/5 group-hover:text-primary dark:group-hover:bg-dark-2 dark:group-hover:text-white lg:px-1.5 xl:px-3 rounded-lg"
                      >
                        {`${t("getInvolved.title")}`}
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="group relative right-14 lg:right-0 xxxs:hidden xxs:block">
                <TranslateButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
