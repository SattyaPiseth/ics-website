import React, { useEffect, useRef, useState } from "react";
import khmer from "./../assets/khmer.png";
import english from "./../assets/english.png";

// Hook for handling outside clicks to close the dropdown
const useClickOutside = (handler) => {
  const domNode = useRef();

  useEffect(() => {
    const maybeHandler = (event) => {
      if (!domNode.current || !domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  }, [handler]);

  return domNode;
};

// Language data mapping
const languages = {
  EN: { label: "English", icon: english },
  KH: { label: "Khmer ", icon: khmer },
};

const TranslateButton = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  // Use the custom hook to handle outside clicks
  const domNode = useClickOutside(() => setDropdownOpen(false));

  // Handle language selection
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  // Toggle dropdown with keyboard accessibility
  const handleToggleDropdown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); // Prevent scrolling the page
      setDropdownOpen((prev) => !prev);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div ref={domNode} className="relative inline-block text-left">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          onKeyDown={handleToggleDropdown}
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
          className="flex items-center rounded-lg px-4 py-2 bg-primary text-white font-medium text-sm"
        >
          {languages[language].label} <span className="pl-2">&#9662;</span>{" "}
          {/* Down arrow */}
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div
            role="menu"
            className="absolute left-0 z-40 mt-1 w-full bg-white dark:bg-gray-800 rounded-md shadow-lg transition-all"
            aria-hidden={!dropdownOpen}
          >
            {Object.entries(languages).map(([langCode, { label, icon }]) => (
              <DropdownItem
                key={langCode}
                label={label}
                icon={icon}
                onClick={() => handleLanguageChange(langCode)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Dropdown item component
const DropdownItem = ({ label, icon, onClick }) => {
  return (
    <button
      role="menuitem"
      onClick={onClick}
      className="flex items-center justify-start w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
    >
      <img src={icon} alt={`${label} flag`} className="mr-2 w-6 h-6" />
      <span className="flex-grow text-center">{label}</span>
    </button>
  );
};

export default TranslateButton;