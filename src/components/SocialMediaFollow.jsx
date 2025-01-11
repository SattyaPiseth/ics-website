import React from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify"; // Ensure you have toast notifications set up
import useFontClass from "../utils/useFontClass";

const SocialMediaFollow = ({ socialLinks }) => {
  const { t } = useTranslation();
  const { fontClass } = useFontClass();
  const handleLinkClick = (link, toastMessage) => {
    if (link.startsWith("http") || link.startsWith("mailto:")) {
      window.open(link, "_blank");
      // Extract the email address from the mailto link
      const email = link.replace("mailto:", "");
      // Copy the email address to the clipboard
      navigator.clipboard
        .writeText(email)
        .then(() => {
          toast.success(toastMessage, {
            autoClose: 1500,
          });
        })
        .catch(() => {
          toast.error(
            "Failed to copy email address to clipboard. Please try again!",
            { autoClose: 2000 }
          );
        });
    } else {
      navigator.clipboard.writeText(link).then(() => {
        toast.error("Failed to copy link to clipboard. Please try again!", {
          autoClose: 2000,
        });
      });
    }
  };

  return (
    <div className={`w-full px-4 sm:w-1/2 lg:w-3/12 mt-10 sm:mt-0 ${fontClass}`}>
      <div className="mb-10 w-full">
        <h4 className="mb-9 text-lg font-semibold text-gray-700 dark:text-white text-center sm:text-left flex justify-center overflow-hidden">
          {socialLinks?.header}
        </h4>
        <div className="flex items-center justify-center space-x-4 overflow-hidden">
          {socialLinks?.links.map(
            ({ id, link, svgViewBox, svgPath, toastify }) => (
              <button
                key={id}
                onClick={() => handleLinkClick(link, toastify)}
                className="flex items-center justify-center h-12 w-12 rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary transition-all duration-300 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={svgViewBox}
                  className="h-6 w-6"
                >
                  <path d={svgPath} className="fill-current transition-colors duration-300 ease-in-out" />
                </svg>
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaFollow;
