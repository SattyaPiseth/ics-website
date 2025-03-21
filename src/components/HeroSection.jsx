import React from "react";
import heroData from "./../json/layouts/hero_section.json";
const HeroSection = () => {
  return (
    <div className="relative bg-white pb-[110px] pt-[30px] dark:bg-dark lg:pt-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">
              <h1
                className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl"
                data-aos="fade-up"
              >
                {heroData.title}
              </h1>
              <p
                className="mb-8 w-full text-base lg:text-lg text-dark dark:text-gray-400"
                data-aos="fade-up"
              >
                {heroData.description}
              </p>
              <ul className="flex flex-wrap items-center" data-aos="fade-right">
                {heroData.ctaButtons.map((button, index) => (
                  <li key={index}>
                    <a
                      href={button.href}
                      className={`inline-flex items-center justify-center rounded-md px-4 py-3 text-center text-base font-medium ${button.style} sm:px-6 md:px-6 lg:px-7`}
                    >
                      {button.icon === "download" && (
                        <span className="mr-2">
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="12"
                              cy="12.6152"
                              r="12"
                              fill="#0070C0"
                            />
                            <rect
                              x="7.99893"
                              y="14.979"
                              width="8.18182"
                              height="1.63636"
                              fill="white"
                            />
                            <rect
                              x="11.2717"
                              y="7.61523"
                              width="1.63636"
                              height="4.09091"
                              fill="white"
                            />
                            <path
                              d="M12.0898 14.1606L14.9241 11.0925H9.25557L12.0898 14.1606Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      )}
                      {button.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="clients pt-16" data-aos="fade-up">
                {/* <h6 className="mb-6 flex items-center text-xs lg:text-base font-normal text-dark dark:text-gray-400">
                  Some Of Our Donors
                  <span className="ml-3 inline-block h-px w-8 bg-dark dark:bg-gray-400"></span>
                </h6>
                <div
                  className="flex items-center space-x-4"
                  data-aos="fade-left"
                >
                  {heroData.clients.map((client, index) => (
                    <SingleImage
                      key={index}
                      href={client.href}
                      imgSrc={client.imgSrc}
                      alt={client.alt}
                    />
                  ))}
                </div> */}
              </div>
            </div>
          </div>
          <div className="hidden px-4 lg:block lg:w-1/12"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block pt-11 lg:pt-0">
                <img
                  src={heroData.imageSrc}
                  alt="hero"
                  className="max-w-full lg:ml-auto rounded-lg"
                  data-aos="flip-left"
                  width="600"
                  height="400"
                  loading="lazy"
                  decoding="async"
                />
                {/* SVG Background */}
                <span className="absolute -bottom-8 -left-8 z-[-1]">
                  {/* SVG circles here */}
                  <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#0070C0" />
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#0070C0" />
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#0070C0" />
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#0070C0" />
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#0070C0" />
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#0070C0" />
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#0070C0" />
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#0070C0" />
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#0070C0" />
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#0070C0" />
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#0070C0" />
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#0070C0" />
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#0070C0" />
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#0070C0" />
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#0070C0" />
                    <circle cx="68.5" cy="2.5" r="2.5" fill="#0070C0" />
                    <circle cx="68.5" cy="24.5" r="2.5" fill="#0070C0" />
                    <circle cx="68.5" cy="46.5" r="2.5" fill="#0070C0" />
                    <circle cx="68.5" cy="68.5" r="2.5" fill="#0070C0" />
                    <circle cx="68.5" cy="90.5" r="2.5" fill="#0070C0" />
                    <circle cx="90.5" cy="2.5" r="2.5" fill="#0070C0" />
                    <circle cx="90.5" cy="24.5" r="2.5" fill="#0070C0" />
                    <circle cx="90.5" cy="46.5" r="2.5" fill="#0070C0" />
                    <circle cx="90.5" cy="68.5" r="2.5" fill="#0070C0" />
                    <circle cx="90.5" cy="90.5" r="2.5" fill="#0070C0" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
