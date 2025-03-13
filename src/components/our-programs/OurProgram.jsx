import React from "react";
import Breadcrumb from "../about-us/Breadcrumbs";
import { NavLink } from "react-router-dom";

const OurProgram = () => {
  return (
    <section>
      <Breadcrumb />
      {/* <!-- Hero Section --> */}
      <section className="relative bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Our Programs</h1>
        <p className="text-lg mt-2">
          Empowering communities through education and support
        </p>
      </section>

      {/* <!-- Programs Grid Section --> */}
      <section className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Program Card --> */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold">Supportive Parenting</h2>
            <p className="text-gray-600 mt-2">
              Helping parents create a nurturing environment for children.
            </p>
            <a href="#" className="text-blue-500 mt-4 inline-block">
              Read More →
            </a>
          </div>

          {/* <!-- Repeat for other programs --> */}
        </div>
      </section>

      {/* <!-- Call to Action --> */}
      <section className="bg-gray-100 py-10 text-center">
        <h2 className="text-2xl font-semibold">Want to Get Involved?</h2>
        <NavLink
          to={"/contact-us"}
          className="mt-4 inline-block bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700"
        >
          Contact Us
        </NavLink>
      </section>
    </section>
  );
};

export default OurProgram;
