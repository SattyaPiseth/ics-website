import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const capitalize = (str) => {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }
  // Capitalize only the first letter of each segment for standard capitalization
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(); 
};

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <section className="py-2 bg-white dark:bg-dark" data-aos="fade-up">
      <div className="container">
        <div className="w-full">
          <div className="px-4 py-4 bg-white border rounded-lg border-light dark:bg-dark-2 dark:border-dark-3 shadow-1 dark:shadow-card sm:px-6 md:px-8 md:py-5">
            <ul className="flex items-center">
              <li>
                <NavLink
                  to="/"
                  className="text-3xs xxxs:text-2xs xxs:text-xs xs:text-sm sm:text-base font-medium hover:text-primary dark:hover:text-primary text-body-color dark:text-white"
                >
                  {capitalize("home")} {/* Ensuring "Home" is capitalized */}
                </NavLink>
              </li>
              {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                return (
                  <React.Fragment key={name}>
                    <span className="px-3 text-body-color dark:text-dark-6">
                      /
                    </span>
                    <li>
                      {isLast ? (
                        <span className={`text-primary font-medium dark:text-dark-6 ${"text-3xs xxxs:text-2xs xxs:text-xs xs:text-sm sm:text-base"}`}>
                          {capitalize(name)}
                        </span>
                      ) : (
                        <NavLink
                          to={routeTo}
                          className={`hover:text-primary dark:hover:text-primary text-body-color dark:text-white ${"text-3xs xxxs:text-2xs xxs:text-xs xs:text-sm sm:text-base"}`}
                        >
                          {capitalize(name)}
                        </NavLink>
                      )}
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
