import React from "react";
import Breadcrumb from "./Breadcrumbs";
import Tab from "./TabsComponent";
import TeamComponent from "./TeamComponent";
import FAQComponent from "./FAQComponent";
import Mission from "./Mission";
import OurHistory from "./OurHistory";
import WhoAreWe from "./WhoAreWe";
import BrandLogo from "./BrandLogo";

const AboutComponent = () => {
  // Enhanced loaderHTML function with dynamic min and max width parameters
  const loaderHTML = (count, minWidth = 1200, maxWidth = 1480) => {
    let loaders = "";
    for (let i = 0; i < count; i++) {
      const width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
      loaders += `<div class="block h-3 mb-4 font-sans text-base antialiased font-light animate-pulse leading-relaxed bg-gray-300 rounded-full text-inherit w-[${width}px]">&nbsp;</div>`;
    }
    return loaders;
  };
    // Using dynamic ranges for our history contents
  const ourHistory = loaderHTML(15, 1200, 1480); 
  return (
    <>
      <Breadcrumb />
      <Mission/>
      <OurHistory ourHistory={ourHistory}/>
      <WhoAreWe/>
      <Tab />
      <TeamComponent/>
      <BrandLogo/>
    </>
  );
};

export default AboutComponent;
