import React from "react";
import Breadcrumb from "../about-us/Breadcrumbs";

const GetInvolved = () => {
  return (
    <>
      <Breadcrumb />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-32 relative text-center rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://media.istockphoto.com/id/475352876/photo/man-applying-for-a-job-on-the-internet.jpg?s=612x612&w=0&k=20&c=SQeciz8vqdGWu_KJoGC7yK8xmpBl69UewPtZSyWSrOI="
          alt="Get Involved"
          className="h-full w-full absolute inset-0 object-cover opacity-50"
        />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl font-extrabold leading-tight mb-4 tracking-wide text-shadow-lg">
            Get Involved
          </h1>
          <p className="text-lg font-medium opacity-90">
            Join us in making a difference.
          </p>
        </div>
      </section>

      {/* Volunteer & Internship Opportunities Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl text-center text-gray-800 font-semibold mb-12">
          Volunteer & Internship Opportunities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Volunteer Card */}
          <div className="bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/475352876/photo/man-applying-for-a-job-on-the-internet.jpg?s=612x612&w=0&k=20&c=SQeciz8vqdGWu_KJoGC7yK8xmpBl69UewPtZSyWSrOI="
              alt="Volunteer"
              className="h-56 w-full object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h3 className="text-2xl text-gray-800 font-semibold mb-3">
                Become a Volunteer
              </h3>
              <p className="text-gray-600 mb-4">
                Contribute your time and skills to support our mission.
              </p>
              <a
                href="/volunteer"
                className="text-primary font-medium mt-4 inline-block hover:underline transform transition duration-300"
              >
                Learn More →
              </a>
            </div>
          </div>

          {/* Internship Card */}
          <div className="bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/475352876/photo/man-applying-for-a-job-on-the-internet.jpg?s=612x612&w=0&k=20&c=SQeciz8vqdGWu_KJoGC7yK8xmpBl69UewPtZSyWSrOI="
              alt="Internship"
              className="h-56 w-full object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h3 className="text-2xl text-gray-800 font-semibold mb-3">
                Internship Programs
              </h3>
              <p className="text-gray-600 mb-4">
                Gain hands-on experience while making a positive impact.
              </p>
              <a
                href="/internship"
                className="text-primary font-medium mt-4 inline-block hover:underline transform transition duration-300"
              >
                Apply Now →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partner with Us Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center text-gray-800 font-semibold mb-12">
            Partner with Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Partner Card 1 */}
            <div className="bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/475352876/photo/man-applying-for-a-job-on-the-internet.jpg?s=612x612&w=0&k=20&c=SQeciz8vqdGWu_KJoGC7yK8xmpBl69UewPtZSyWSrOI="
                alt="Partner with Us"
                className="h-56 w-full object-cover rounded-t-xl"
              />
              <div className="p-6">
                <h3 className="text-2xl text-gray-800 font-semibold mb-3">
                  Become a Partner
                </h3>
                <p className="text-gray-600 mb-4">
                  Collaborate with us to create lasting social impact.
                </p>
                <a
                  href="/partner"
                  className="text-primary font-medium mt-4 inline-block hover:underline transform transition duration-300"
                >
                  Learn More →
                </a>
              </div>
            </div>

            {/* Partner Card 2 */}
            <div className="bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/475352876/photo/man-applying-for-a-job-on-the-internet.jpg?s=612x612&w=0&k=20&c=SQeciz8vqdGWu_KJoGC7yK8xmpBl69UewPtZSyWSrOI="
                alt="Partner with Us"
                className="h-56 w-full object-cover rounded-t-xl"
              />
              <div className="p-6">
                <h3 className="text-2xl text-gray-800 font-semibold mb-3">
                  Corporate Partnerships
                </h3>
                <p className="text-gray-600 mb-4">
                  Your organization can help drive real change in communities.
                </p>
                <a
                  href="/partner"
                  className="text-primary font-medium mt-4 inline-block hover:underline transform transition duration-300"
                >
                  Get Involved →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

   
    </>
  );
};

export default GetInvolved;
