import React, { useEffect, useRef, useState } from "react";
import i18n from "i18next"; // Import your i18n instance
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
  EN: { label: "language.english", icon: english, i18nKey: "en" },
  KH: { label: "language.khmer", icon: khmer, i18nKey: "kh" },
};

const TranslateButton = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem("i18nextLng") === "en" ? "EN" : "KH"
  );

  // Use the custom hook to handle outside clicks
  const domNode = useClickOutside(() => setDropdownOpen(false));

  // Handle language selection
  const handleLanguageChange = (lang) => {
    const i18nLanguageKey = languages[lang].i18nKey;
    i18n.changeLanguage(i18nLanguageKey); // Change language using i18n
    setLanguage(lang);
    localStorage.setItem("i18nextLng", i18nLanguageKey); // Update local storage
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
    <nav aria-label="Language switcher" className="flex items-center gap-2">
      <section ref={domNode} className="relative inline-block text-left">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          onKeyDown={handleToggleDropdown}
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
          className="flex items-center rounded-lg px-3 py-1 sm:px-3 sm:py-1.5 bg-primary text-white font-medium text-xs sm:text-sm"
        >
          {i18n.t(languages[language].label)} <span className="pl-2">&#9662;</span>{" "}
          {/* Down arrow */}
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <ul
            role="menu"
            className={`absolute transition-opacity duration-300 ease-in-out ${dropdownOpen ? "opacity-100" : "opacity-0"} left-0 lg:right-0 z-50 mt-1 w-28 sm:w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg`}
            aria-hidden={!dropdownOpen}
            style={{ display: dropdownOpen ? 'block' : 'none' }} // Prevents display issues
          >
            {Object.entries(languages).map(([langCode, { label, icon }]) => (
              <DropdownItem
                key={langCode}
                label={i18n.t(label)} // Get the label using i18n.t
                icon={icon}
                onClick={() => handleLanguageChange(langCode)}
              />
            ))}
          </ul>
        )}
      </section>
    </nav>
  );
};

// Dropdown item component
const DropdownItem = ({ label, icon, onClick }) => {
  return (
    <li role="none">
      <button
        role="menuitem"
        onClick={onClick}
        className="flex items-center justify-start w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
      >
        <img src={icon} alt={`${label} flag`} className="mr-2 w-6 h-6" />
        <span className="flex-grow text-center">{label}</span>
      </button>
    </li>
  );
};

export default TranslateButton;
