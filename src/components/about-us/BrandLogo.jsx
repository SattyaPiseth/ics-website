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
          {["mosvy.jpg", "mowa.jpg", "unicef.png", "save-the-children.jpg"].map((src, index) => (
            <a key={index} href="#" className="flex justify-center items-center border border-gray-200 shadow-sm rounded-xl overflow-hidden aspect-w-1 aspect-h-1 p-5">
              <img src={`/${src}`} alt={`${src.split('.')[0]} Logo`} className="object-contain h-full w-full" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogo;
