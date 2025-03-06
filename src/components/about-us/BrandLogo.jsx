import React from "react";

const BrandLogo = () => {
  return (
    <section className="py-24" id="partners_&_supporters">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <span className="text-primary font-medium mb-4 block">
            OUR PARTNERS
          </span>
          <h1 className="text-4xl text-gray-900 font-bold">
            We work with the best partners
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          <a
            href="#"
            className="flex justify-center items-center border border-solid border-gray-200 shadow-sm rounded-2xl h-56"
          >
            <img className="max-h-full max-w-full p-4" src="/mosvy.jpg" alt="Ministry of Social Affairs Logo" />
          </a>
          <a
            href="#"
            className="flex justify-center items-center border border-solid border-gray-200 shadow-sm rounded-2xl h-56"
          >
            <img className="max-h-full max-w-full p-4" src="/mowa.jpg" alt="Ministry of Women's Affairs Logo" />
          </a>
          <a
            href="#"
            className="flex justify-center items-center border border-solid border-gray-200 shadow-sm rounded-2xl h-56"
          >
            <img className="max-h-full max-w-full p-4" src="/unicef.png" alt="UNICEF Logo" />
          </a>
          <a
            href="#"
            className="flex justify-center items-center border border-solid border-gray-200 shadow-sm rounded-2xl h-56"
          >
            <img className="max-h-full max-w-full p-4" src="/save-the-children.jpg" alt="Save the Children Logo" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandLogo;
