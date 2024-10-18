import React from "react";

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
                  Sed ut perspiciatis undmnis is iste natus error sit amet
                  voluptatem totam rem aperiam.
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
                  <span>+012 (345) 678 99</span>
                </address>
              </div>
            </div>

            {/* Resources Links */}
            <LinkGroup header="Resources">
              <NavLink link="/#" label="SaaS Development" />
              <NavLink link="/#" label="Our Products" />
              <NavLink link="/#" label="User Flow" />
              <NavLink link="/#" label="User Strategy" />
            </LinkGroup>

            {/* Company Links */}
            <LinkGroup header="Company">
              <NavLink link="/#" label="About TailGrids" />
              <NavLink link="/#" label="Contact & Support" />
              <NavLink link="/#" label="Success History" />
              <NavLink link="/#" label="Setting & Privacy" />
            </LinkGroup>

            {/* Quick Links */}
            <LinkGroup header="Quick Links" className="hidden sm:block">
              <NavLink link="/#" label="Premium Support" />
              <NavLink link="/#" label="Our Services" />
              <NavLink link="/#" label="Know Our Team" />
              <NavLink link="/#" label="Download App" />
            </LinkGroup>

            {/* Social Media Follow */}
            <div className="w-full px-4 sm:w-1/2 lg:w-3/12 mt-10 sm:mt-0">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white text-center sm:text-left flex justify-center sm:justify-center md:justify-center lg:justify-start overflow-x-auto">
                  Follow Us On
                </h4>
                <div className="mb-6 flex items-center overflow-x-auto justify-center sm:justify-center md:justify-center lg:justify-start">
                  <a
                    href="https://facebook.com"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="8"
                      height="16"
                      viewBox="0 0 8 16"
                      className="fill-current"
                    >
                      <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      className="fill-current"
                    >
                      <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      className="fill-current"
                    >
                      <path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C13.0065 12 14.2452 11.6406 14.9419 11.447C15.4839 10.8664 15.6645 10.1198 16 8.79263C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      className="fill-current"
                    >
                      <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.11678 4.43349C2.30549 4.43349 1.67461 3.81183 1.67461 3.00349C1.67461 2.1873 2.30549 1.57668 3.11678 1.57668C3.92786 1.57668 4.55855 2.1873 4.55855 3.00349C4.55855 3.81183 3.92786 4.43349 3.11678 4.43349ZM11.9 11.9H9.84365V8.56258C9.84365 7.94976 9.7778 6.8763 8.58343 6.8763C7.35403 6.8763 7.11 7.84614 7.11 8.75453V11.9H5.04984V5.23871H7.09177V6.30316H7.11678C7.39063 5.49023 8.287 4.43 9.96195 4.43C12.0307 4.43 11.9 6.60328 11.9 8.65864V11.9Z"></path>
                    </svg>
                  </a>
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
