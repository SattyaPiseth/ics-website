import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import featuresData from "./../../json/layouts/features.json";

// Import only the required icons
import { IoIosPeople } from "react-icons/io";
import { MdFamilyRestroom } from "react-icons/md";
import { TfiHandStop } from "react-icons/tfi";
import { FaSackDollar } from "react-icons/fa6";

// Icon mapping based on JSON file
const iconMap = {
  MdFamilyRestroom: MdFamilyRestroom,
  FaSackDollar: FaSackDollar,
  IoIosPeople: IoIosPeople,
  TfiHandStop: TfiHandStop,
};

const FeaturesSection = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    setFeatures(featuresData);
  }, []);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col lg:flex-row lg:justify-between">
          <div className="relative w-full text-center lg:text-left lg:w-2/4">
            <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6">
              Our Key Programs
            </h2>
          </div>
          <div className="relative w-full text-center lg:text-left lg:w-2/4">
            <p className="text-lg font-normal text-gray-500 mb-5">
              We develop impactful programs that create lasting change and
              improve lives.
            </p>
            <a
              href="#"
              className="flex flex-row items-center justify-center gap-2 text-base font-semibold text-primary-light lg:justify-start"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon] || FaHandsHelping; // Use mapped icon or fallback

            return (
              <div
                key={feature.id}
                className="group relative flex flex-col items-center bg-gray-100 rounded-2xl p-6 transition-all duration-500 hover:bg-primary-light h-[340px]"
              >
                {/* Icon Container */}
                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
                  <IconContext.Provider
                    value={{ size: "30", color: "#0080C0" }}
                  >
                    <IconComponent />
                  </IconContext.Provider>
                </div>

                {/* Title */}
                <h4 className="text-lg font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white text-center">
                  {feature.title}
                </h4>

                {/* Scrollable Description */}
                <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white text-wrap max-h-40 overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent scroll-smooth p-1 text-left">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
