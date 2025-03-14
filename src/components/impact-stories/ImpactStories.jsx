import React from "react";
import Breadcrumb from '../about-us/Breadcrumbs'

const ImpactStories = () => {
  return (
    <>
      <Breadcrumb />
      {/* <!-- Hero Section --> */}
      <section className="relative bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Impact & Stories</h1>
        <p className="text-lg mt-2">Our journey of positive change and success stories.</p>
      </section>

      {/* <!-- Current Projects Section --> */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-semibold text-center">Current Projects</h2>
        <div className="space-y-6 mt-6">
          <div className="bg-white shadow-md p-6 rounded-md">
            <h3 className="text-xl font-semibold">Project Name 1</h3>
            <p className="text-gray-600 mt-2">
              Description of the project and its objectives.
            </p>
            <p className="text-gray-600 mt-1">Funding Partner: Partner Name</p>
          </div>
          {/* Add more projects dynamically */}
        </div>
      </section>

      {/* <!-- Past Projects & Achievements Section --> */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center">Past Projects & Achievements</h2>
          <div className="space-y-6 mt-6">
            <div className="bg-white shadow-md p-6 rounded-md">
              <h3 className="text-xl font-semibold">Past Project Name</h3>
              <p className="text-gray-600 mt-2">
                Summary of the project's impact and key achievements.
              </p>
            </div>
            {/* Add more past projects dynamically */}
          </div>
        </div>
      </section>

      {/* <!-- Reports & Publications Section --> */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-semibold text-center">Reports & Publications</h2>
        <div className="space-y-6 mt-6">
          <div className="bg-white shadow-md p-6 rounded-md">
            <h3 className="text-xl font-semibold">Report Title</h3>
            <p className="text-gray-600 mt-2">Brief description of the report.</p>
            <a href="#" className="text-blue-500 font-medium">Download Report →</a>
          </div>
          {/* Add more reports dynamically */}
        </div>
      </section>
    </>
  );
};

export default ImpactStories;
