import React, { useState, useRef, useEffect, useMemo } from "react";
import { FaChartLine, FaDonate, FaFolderOpen } from "react-icons/fa";
import {
  FaBuildingNgo,
  FaHandshakeSimple,
  FaListCheck,
  FaRoadCircleCheck,
} from "react-icons/fa6";
import { BiSolidMessageDetail } from "react-icons/bi";
import { TbCopyCheckFilled } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";

const iconMap = {
  TbCopyCheckFilled: TbCopyCheckFilled,
  GrMoney: GrMoney,
  FaChartLine: FaChartLine,
  FaFolderOpen: FaFolderOpen,
  FaHandshakeSimple: FaHandshakeSimple,
  FaDonate: FaDonate,
  FaBuildingNgo: FaBuildingNgo,
  FaListCheck: FaListCheck,
  FaRoadCircleCheck: FaRoadCircleCheck,
  BiSolidMessageDetail: BiSolidMessageDetail,
};

const DropdownItem = ({ href, title, description, IconName }) => {
  const Icon = iconMap[IconName] || FaChartLine; // Default to FaChartLine if icon is not found
  return (
    <a
      href={href}
      className="group flex flex-col gap-4 rounded-lg p-4 duration-200 hover:bg-gray-1 lg:flex-row dark:hover:bg-white/5"
      role="menuitem"
      tabIndex={0}
    >
      <div className="text-primary">
        <Icon size={24} aria-hidden="true" />
      </div>
      <div className="flex-1">
        <h5 className="text-sm xl:text-base font-semibold text-gray-700 tracking-wide leading-loose dark:text-white">
          {title}
        </h5>
        <p className="text-xs xl:text-sm text-body-color dark:text-body-color-dark text-wrap">
          {description}
        </p>
      </div>
    </a>
  );
};

const DropdownComponent = ({ label, dropDownSection }) => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowMegaMenu(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setShowMegaMenu(false);
      buttonRef.current.focus(); // Return focus to button when closing with Escape
    }
  };

  const memoizedSections = useMemo(() => {
    return Array.isArray(dropDownSection) && dropDownSection.length > 0 ? (
      dropDownSection.map((section, index) => (
        <div key={index}>
          <h4 className="mb-3 text-sm font-semibold text-gray-600 tracking-wide leading-loose dark:text-white">
            {section.title}
          </h4>
          <div className="space-y-2">
            {section.items.map((item, itemIndex) => (
              <DropdownItem
                key={itemIndex}
                href={item.href}
                title={item.title}
                description={item.description}
                IconName={item.Icon}
              />
            ))}
          </div>
        </div>
      ))
    ) : (
      <p className="text-gray-500">No items available.</p>
    );
  }, [dropDownSection]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <li className="group relative z-50" ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={() => setShowMegaMenu((prev) => !prev)}
        className="flex w-full items-center justify-center gap-2 py-2 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base font-medium text-body-color hover:text-dark lg:ml-6 lg:inline-flex lg:w-auto lg:justify-center dark:text-dark-6 dark:hover:text-white duration-300 group-hover:bg-primary/5 group-hover:text-primary dark:group-hover:bg-dark-2 dark:group-hover:text-white lg:px-1.5 xl:px-3 rounded-lg uppercase"
        aria-expanded={showMegaMenu}
        aria-controls="dropdown-menu"
        aria-haspopup="true"
      >
        {label}
        <span
          className={`transform transition-transform duration-200 ${showMegaMenu ? "-scale-y-100" : "lg:group-hover:-scale-y-100 scale-100 lg:scale-110"}`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </button>
      <div
        id="dropdown-menu"
        className={`w-full bg-white lg:left-0 lg:top-full lg:p-5 dark:bg-dark dropdown-menu left-0 top-full rounded-md border border-transparent p-4 lg:absolute lg:hidden lg:max-h-[450px] lg:w-96 lg:overflow-y-auto lg:rounded-xl lg:bg-white lg:shadow-[0px_10px_40px_rgba(0,0,0,0.05)] lg:duration-300 lg:group-hover:block dark:lg:border-[#272741] dark:lg:bg-dark-2 dark:lg:shadow-[0px_10px_50px_rgba(0,0,0,0.15)] ${showMegaMenu ? "block" : "hidden"}`}
        role="menu"
        aria-labelledby="dropdown-button"
      >
        <div className="grid border p-3 sm:border-transparent rounded-md gap-5 grid-cols-1 max-h-52 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 sm:max-h-56 md:max-h-80 lg:max-h-96 w-full overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent text-wrap">
          {memoizedSections}
        </div>
      </div>
    </li>
  );
};


export default DropdownComponent;
