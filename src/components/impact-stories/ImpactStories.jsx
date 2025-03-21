import React from "react";
import Breadcrumb from '../about-us/Breadcrumbs';
import data from './../../json/layouts/impact_stories.json'; // Direct import

const ImpactStories = () => {
  return (
    <>
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r text-center text-white from-blue-600 py-32 relative to-blue-400">
        <img
          src={data.heroImage || "https://ics-skillfulparenting.org/wp-content/uploads/2023/04/International-womens-day-1-copy-e1681269386306.png"}
          alt="Hero Image"
          className="h-full w-full absolute inset-0 object-cover opacity-40"
        />
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold leading-tight mb-4 tracking-wide">Impact & Stories</h1>
          <p className="text-lg font-medium opacity-90">Our journey of positive change and success stories.</p>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl text-center text-gray-800 font-semibold mb-8">Current Projects</h2>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {data.currentProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition duration-300 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl text-gray-800 font-semibold">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <p className="text-gray-600 mt-4">Funding Partner: {project.fundingPartner}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Projects Section */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center text-gray-800 font-semibold mb-8">Past Projects & Achievements</h2>
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {data.pastProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition duration-300 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl text-gray-800 font-semibold">{project.title}</h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports & Publications Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl text-center text-gray-800 font-semibold mb-8">Reports & Publications</h2>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {data.reports.map((report, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition duration-300 overflow-hidden">
              <img
                src={report.image}
                alt={report.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl text-gray-800 font-semibold">{report.title}</h3>
                <p className="text-gray-600 mt-2">{report.description}</p>
                <a href={report.link} className="text-blue-600 font-medium mt-4 inline-block hover:underline transform transition duration-300">
                  Download Report →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ImpactStories;
