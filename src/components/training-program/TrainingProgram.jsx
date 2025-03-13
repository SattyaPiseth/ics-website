import React from "react";
import Breadcrumb from "../about-us/Breadcrumbs";

const TrainingProgram = () => {
  return (
    <>
      <Breadcrumb />
      {/* <!-- Hero Section --> */}
      <section className="relative bg-green-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Training Services</h1>
        <p className="text-lg mt-2">
          Practical training for individuals, NGOs, and businesses.
        </p>
      </section>

      {/* <!-- Training List Section --> */}
      <section className="container mx-auto py-12 px-4">
        <div className="space-y-6">
          {/* <!-- Training Item --> */}
          <div className="bg-white shadow-md p-6 rounded-md flex items-center">
            <div className="flex-1">
              <h2 className="text-xl font-semibold">
                Parenting & Caregiver Training
              </h2>
              <p className="text-gray-600 mt-2">
                Enhancing parenting skills for a positive home environment.
              </p>
            </div>
            <a href="#" className="text-green-500 font-medium">
              Learn More →
            </a>
          </div>

          {/* <!-- Repeat for other training services --> */}
        </div>
      </section>

      {/* <!-- Request a Training Section --> */}
      <section className="bg-gray-100 py-10 text-center">
        <h2 className="text-2xl font-semibold">Need a Custom Training?</h2>
        <a
          href="/request-training"
          className="mt-4 inline-block bg-green-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-700"
        >
          Request a Training
        </a>
      </section>
    </>
  );
};

export default TrainingProgram;
