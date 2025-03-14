import React from "react";
import Breadcrumb from "../about-us/Breadcrumbs";

const GetInvolved = () => {
  return (
    <>
      <Breadcrumb />
      <section className="relative bg-yellow-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Get Involved</h1>
        <p className="text-lg mt-2">Join us in making a difference.</p>
      </section>

      {/* <!-- Volunteer & Internship Opportunities Section --> */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-semibold text-center">
          Volunteer & Internship Opportunities
        </h2>
        <div className="space-y-6 mt-6">
          <div className="bg-white shadow-md p-6 rounded-md">
            <h3 className="text-xl font-semibold">Become a Volunteer</h3>
            <p className="text-gray-600 mt-2">
              Contribute your time and skills to support our mission.
            </p>
            <a href="/volunteer" className="text-yellow-500 font-medium">
              Learn More →
            </a>
          </div>
          <div className="bg-white shadow-md p-6 rounded-md">
            <h3 className="text-xl font-semibold">Internship Programs</h3>
            <p className="text-gray-600 mt-2">
              Gain hands-on experience while making a positive impact.
            </p>
            <a href="/internship" className="text-yellow-500 font-medium">
              Apply Now →
            </a>
          </div>
        </div>
      </section>

      {/* <!-- Partner with Us Section --> */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center">
            Partner with Us
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Collaborate with us to create lasting social impact.
          </p>
          <div className="mt-6 text-center">
            <a
              href="/partner"
              className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-yellow-700"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </section>

      {/* <!-- Support Our Work Section --> */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-semibold text-center">Support Our Work</h2>
        <p className="text-gray-600 text-center mt-2">
          Help us continue our mission through donations and fundraising.
        </p>
        <div className="mt-6 flex flex-col items-center">
          <a
            href="/donate"
            className="mt-4 inline-block bg-yellow-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-yellow-700"
          >
            Donate Now
          </a>
          <a
            href="/fundraise"
            className="mt-4 inline-block bg-yellow-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-yellow-700"
          >
            Start a Fundraiser
          </a>
        </div>
      </section>
    </>
  );
};

export default GetInvolved;
