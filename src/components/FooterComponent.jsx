import React from "react";
import { toast } from "react-toastify";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px] font-poppins">
        <section className="container mx-auto">
          <div className="-mx-4 flex flex-wrap justify-center">
            {/* Logo and Contact Details */}
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full flex flex-wrap overflow-hidden sm:justify-center md:justify-center lg:justify-start xl:justify-start">
                <a
                  href="/#"
                  className="mb-6 inline-block max-w-80 mx-auto sm:mx-0"
                >
                  <img
                    src="https://ics-skillfulparenting.org/wp-content/uploads/2023/04/cropped-Logo-for-web_black.png"
                    alt="logo"
                    className="max-w-full dark:hidden h-auto"
                  />
                  <img
                    src="https://ics-skillfulparenting.org/wp-content/uploads/2023/04/cropped-Logo-for-web_black.png"
                    alt="logo"
                    className="max-w-full hidden dark:block h-auto"
                  />
                </a>
                <p className="mb-7 text-base text-body-color dark:text-dark-6 text-center sm:text-left md:text-center lg:text-left">
                  Improving Cambodia’s Society through Skilful Parenting
                  (ICS-SP)
                </p>
                <address className="flex items-center text-sm font-medium text-dark dark:text-white justify-center sm:justify-start not-italic mx-auto lg:mx-0">
                  <span className="mr-3 text-primary">
                    {/* Phone Icon SVG */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_941_15626)">
                        <path
                          d="M15.1875 19.4688C14.3438 19.4688 13.375 19.25 12.3125 18.8438C10.1875 18 7.84377 16.375 5.75002 14.2813C3.65627 12.1875 2.03127 9.84377 1.18752 7.68752C0.250019 5.37502 0.343769 3.46877 1.43752 2.40627C1.46877 2.37502 1.53127 2.34377 1.56252 2.31252L4.18752 0.750025C4.84377 0.375025 5.68752 0.562525 6.12502 1.18752L7.96877 3.93753C8.40627 4.59378 8.21877 5.46877 7.59377 5.90627L6.46877 6.68752C7.28127 8.00002 9.59377 11.2188 13.2813 13.5313L13.9688 12.5313C14.5 11.7813 15.3438 11.5625 16.0313 12.0313L18.7813 13.875C19.4063 14.3125 19.5938 15.1563 19.2188 15.8125L17.6563 18.4375C17.625 18.5 17.5938 18.5313 17.5625 18.5625C17 19.1563 16.1875 19.4688 15.1875 19.4688ZM2.37502 3.46878C1.78127 4.12503 1.81252 5.46877 2.50002 7.18752C3.28127 9.15627 4.78127 11.3125 6.75002 13.2813C8.68752 15.2188 10.875 16.7188 12.8125 17.5C14.5 18.1875 15.8438 18.2188 16.5313 17.625L18.0313 15.0625C18.0313 15.0313 18.0313 15.0313 18.0313 15L15.2813 13.1563C15.2813 13.1563 15.2188 13.1875 15.1563 13.2813L14.4688 14.2813C14.0313 14.9063 13.1875 15.0938 12.5625 14.6875C8.62502 12.25 6.18752 8.84377 5.31252 7.46877C4.90627 6.81252 5.06252 5.96878 5.68752 5.53128L6.81252 4.75002V4.71878L4.96877 1.96877C4.96877 1.93752 4.93752 1.93752 4.90627 1.96877L2.37502 3.46878Z"
                          fill="currentColor"
                        />
                        <path
                          d="M18.3125 8.90633C17.9375 8.90633 17.6563 8.62508 17.625 8.25008C17.375 5.09383 14.7813 2.56258 11.5938 2.34383C11.2188 2.31258 10.9063 2.00008 10.9375 1.59383C10.9688 1.21883 11.2813 0.906333 11.6875 0.937583C15.5625 1.18758 18.7188 4.25008 19.0313 8.12508C19.0625 8.50008 18.7813 8.84383 18.375 8.87508C18.375 8.90633 18.3438 8.90633 18.3125 8.90633Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15.2187 9.18755C14.875 9.18755 14.5625 8.93755 14.5312 8.56255C14.3437 6.87505 13.0312 5.56255 11.3437 5.3438C10.9687 5.31255 10.6875 4.93755 10.7187 4.56255C10.75 4.18755 11.125 3.9063 11.5 3.93755C13.8437 4.2188 15.6562 6.0313 15.9375 8.37505C15.9687 8.75005 15.7187 9.0938 15.3125 9.1563C15.25 9.18755 15.2187 9.18755 15.2187 9.18755Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_941_15626">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span>(+855) 12 520 663</span>
                </address>
              </div>
            </div>

            {/* Resources Links */}
            <LinkGroup header="Resources">
              <NavLink link="/#" label="All Resources" />
              <NavLink link="/#" label="Positive Parenting Tips" />
              <NavLink link="/#" label="MoWA-Led Positive Parenting Toolkits" />

              {/* <NavLink link="/#" label="User Strategy" /> */}
            </LinkGroup>

            {/* Company Links */}
            <LinkGroup header="About & Contact">
              <NavLink link="/#" label="About ICS-SP" />
              <NavLink link="/#" label="Our Mission" />
              <NavLink link="/#" label="Our Vision" />
              <NavLink link="/#" label="Contact & Support" />
            </LinkGroup>

            {/* Quick Links */}
            <LinkGroup header="Partners & Support" className="hidden sm:block">
              <NavLink link="/#" label="Partners & Donors" />
              <NavLink link="/#" label="Donate" />
              <NavLink link="/#" label="Know Our Team" />
              <NavLink link="/#" label="Download App" />
            </LinkGroup>

            {/* Social Media Follow */}
            <div className="w-full px-4 sm:w-1/2 lg:w-3/12 mt-10 sm:mt-0">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white text-center sm:text-left flex justify-center overflow-hidden">
                  Follow Us On
                </h4>
                <div className="flex items-center justify-center space-x-4 overflow-hidden">
                  <a
                    href="https://www.facebook.com/profile.php?id=100064926750645"
                    className="flex items-center justify-center h-12 w-12 rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary transition-all duration-300 ease-in-out transform scale-100 hover:scale-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="h-6 w-6"
                    >
                      <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                    </svg>
                  </a>
                  <button
                    onClick={() => {
                      navigator.clipboard
                        .writeText("info@ics-skillfulparenting.org")
                        .then(() => {
                          toast.success("Link copied to clipboard!", {
                            autoClose: 3000,
                          });
                        });
                    }}
                    className="flex items-center justify-center h-12 w-12 rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary transition-all duration-300 ease-in-out transform scale-100 hover:scale-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="h-6 w-6"
                    >
                      <path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32l0 80 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
                    </svg>
                  </button>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("012520663").then(() => {
                        toast.success("Link copied to clipboard!", {
                          autoClose: 3000,
                        });
                      });
                    }}
                    className="flex items-center justify-center h-12 w-12 rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary transition-all duration-300 ease-in-out transform scale-100 hover:scale-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                      className="h-6 w-6"
                    >
                      <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;

// Helper Components

const LinkGroup = ({ children, header }) => {
  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-2/12 mt-10 sm:mt-0">
      <div className="mb-10 w-full">
        <h4 className="mb-9 text-lg sm:text-base font-semibold text-dark dark:text-white text-center sm:text-left flex justify-center sm:justify-center md:justify-center lg:justify-start overflow-x-auto">
          {header}
        </h4>
        <ul className="space-y-3 text-center sm:text-left">{children}</ul>
      </div>
    </div>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="text-base leading-loose text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary py-2 flex justify-center sm:justify-center md:justify-center lg:justify-start overflow-x-auto"
      >
        {label}
      </a>
    </li>
  );
};
