import React, { useState } from "react";

const Tab = () => {
  const [open, setOpen] = useState("approach");

  const handleTabOpen = (tabCategory) => {
    setOpen(tabCategory);
  };

  // Enhanced loaderHTML function with dynamic min and max width parameters
  const loaderHTML = (count, minWidth = 1200, maxWidth = 1480) => {
    let loaders = "";
    for (let i = 0; i < count; i++) {
      const width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
      loaders += `<div class="block h-3 mb-4 font-sans text-base antialiased font-light animate-pulse leading-relaxed bg-gray-300 rounded-full text-inherit w-[${width}px]">&nbsp;</div>`;
    }
    return loaders;
  };

  // Using dynamic ranges for approach and mission tabs
  const approachContent = loaderHTML(15, 1200, 1480); // Standard range for 'Our Approaches'
  const missionContent = loaderHTML(15, 1000, 1300); // Shorter range for 'Mission & Goals'

  return (
    <>
      <section className="py-14 dark:bg-dark" data-aos="flip-up">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mb-14 w-full">
                <div className="flex flex-col justify-between flex-wrap rounded-lg border border-[#E4E4E4] px-4 py-3 dark:border-dark-3 sm:flex-row">
                  <a
                    onClick={() => handleTabOpen("approach")}
                    className={`flex-grow text-center cursor-pointer rounded-md px-4 py-3 text-sm font-medium md:text-base lg:px-6 my-2 mx-2 hover:shadow-md ${
                      open === "approach"
                        ? "bg-primary text-white shadow"
                        : "text-body-color hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white transition-all"
                    }`}
                  >
                    Our Approaches
                  </a>
                  <a
                    onClick={() => handleTabOpen("mission")}
                    className={`flex-grow text-center cursor-pointer rounded-md px-4 py-3 text-sm font-medium md:text-base lg:px-6 my-2 mx-2 hover:shadow-md ${
                      open === "mission"
                        ? "bg-primary text-white shadow"
                        : "text-body-color hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white transition-all"
                    }`}
                  >
                    Mission & Goals
                  </a>
                </div>
                <div className={`p-6 text-base leading-relaxed text-body-color dark:text-dark-6 ${
                  open === "approach" ? "block" : "hidden"
                }`}
                dangerouslySetInnerHTML={{ __html: approachContent }}>
                </div>
                <div className={`p-6 text-base leading-relaxed text-body-color dark:text-dark-6 ${
                  open === "mission" ? "block" : "hidden"
                }`}
                dangerouslySetInnerHTML={{ __html: missionContent }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tab;
