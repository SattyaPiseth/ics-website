import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const useScrollToSection = () => {
  const location = useLocation();
  
  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean); // filter(Boolean) removes empty strings from the array
    const sectionId = pathSegments[pathSegments.length - 1]; // gets the last segment of the path

    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    } else {
      window.scrollTo(0, 0); // scroll to the top if no specific section is targeted
    }
  }, [location]);
};
