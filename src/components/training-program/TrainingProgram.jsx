import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import featuresData from "./../../json/layouts/training_service.json";

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

const TrainingProgram = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    setFeatures(featuresData?.features);
  }, []);

  return (
    <>
      <section className="py-24">
        <div className="lg:px-8 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:mb-16 mb-10">
            <div className="text-center w-full lg:text-left relative">
              <h2 className="text-5xl text-gray-900 font-bold leading-[3.25rem] lg:mb-6">
                {featuresData?.title}
              </h2>
              <p className="text-gray-500 text-justify text-lg font-normal mb-5 py-5 xl:text-xl">
                {featuresData?.description}
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          {/* <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            {features.map((feature) => {
              const IconComponent = iconMap[feature.icon] || FaHandsHelping; // Use mapped icon or fallback

              return (
                <div
                  key={feature.id}
                  className="flex flex-col bg-gray-100 h-[340px] p-6 rounded-2xl duration-500 group hover:bg-primary-light items-center relative transition-all"
                >
                  
                  <div className="flex bg-white h-14 justify-center rounded-full w-14 items-center mb-5">
                    <IconContext.Provider
                      value={{ size: "30", color: "#0080C0" }}
                    >
                      <IconComponent />
                    </IconContext.Provider>
                  </div>

                  
                  <h4 className="text-center text-gray-900 text-lg capitalize duration-500 font-semibold group-hover:text-white mb-3 transition-all">
                    {feature.title}
                  </h4>

                
                  <p className="p-1 text-gray-500 text-left text-sm text-wrap duration-500 font-normal group-hover:text-white leading-5 max-h-40 overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent transition-all">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div> */}
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 py-10" id="mission">
        <div className="grid lg:gap-8 lg:grid-cols-12 lg:py-16 max-w-screen-2xl mx-auto px-4 py-8 xl:gap-0">
          <div className="lg:col-span-7 mr-auto place-self-center">
            <h2 className="text-3xl text-gray-900 dark:text-white font-bold leading-none max-w-2xl mb-4 md:text-4xl tracking-tight xl:text-5xl">
              Skillful Parenting Training
            </h2>
            <br />
            <p className="text-gray-500 dark:text-gray-400 font-normal lg:mb-8 lg:text-xl max-w-2xl mb-6 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              odit dolor perferendis veritatis aspernatur repellat, voluptatibus
              recusandae vitae aperiam aliquid repellendus alias nihil vero quia
              ipsa quo aut officia. Magni? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Et reprehenderit pariatur fuga,
              nostrum cum, ab quis adipisci deserunt numquam modi quisquam
              dignissimos maxime eos nesciunt aliquam ipsa, nobis laboriosam
              nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus autem ducimus quasi impedit minima iure, obcaecati
              consequatur eaque delectus repellendus laboriosam! Libero
              explicabo veritatis molestiae eveniet eaque corrupti? Enim,
              officia?
            </p>
          </div>
          <div className="w-10/12 hidden lg:col-span-5 lg:flex lg:mt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="text-gray-500 w-10/12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 py-10" id="mission">
        <div className="grid lg:gap-8 lg:grid-cols-12 lg:py-16 max-w-screen-2xl mx-auto px-4 py-8 xl:gap-0">
          <div className="w-10/12 hidden lg:col-span-5 lg:flex lg:mt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="text-gray-500 w-10/12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              ></path>
            </svg>
          </div>
          <div className="lg:col-span-7 mr-auto place-self-center">
            <h2 className="text-3xl text-gray-900 dark:text-white font-bold leading-none max-w-2xl mb-4 md:text-4xl tracking-tight xl:text-5xl">
              Financial Literacy and Economic Empowerment Training
            </h2>
            <br />
            <p className="text-gray-500 dark:text-gray-400 font-normal lg:mb-8 lg:text-xl max-w-2xl mb-6 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              odit dolor perferendis veritatis aspernatur repellat, voluptatibus
              recusandae vitae aperiam aliquid repellendus alias nihil vero quia
              ipsa quo aut officia. Magni? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Et reprehenderit pariatur fuga,
              nostrum cum, ab quis adipisci deserunt numquam modi quisquam
              dignissimos maxime eos nesciunt aliquam ipsa, nobis laboriosam
              nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus autem ducimus quasi impedit minima iure, obcaecati
              consequatur eaque delectus repellendus laboriosam! Libero
              explicabo veritatis molestiae eveniet eaque corrupti? Enim,
              officia?
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 py-10" id="mission">
        <div className="grid lg:gap-8 lg:grid-cols-12 lg:py-16 max-w-screen-2xl mx-auto px-4 py-8 xl:gap-0">
          <div className="lg:col-span-7 mr-auto place-self-center">
            <h2 className="text-3xl text-gray-900 dark:text-white font-bold leading-none max-w-2xl mb-4 md:text-4xl tracking-tight xl:text-5xl">
              Youth Empowerment Training
            </h2>
            <br />
            <p className="text-gray-500 dark:text-gray-400 font-normal lg:mb-8 lg:text-xl max-w-2xl mb-6 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              odit dolor perferendis veritatis aspernatur repellat, voluptatibus
              recusandae vitae aperiam aliquid repellendus alias nihil vero quia
              ipsa quo aut officia. Magni? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Et reprehenderit pariatur fuga,
              nostrum cum, ab quis adipisci deserunt numquam modi quisquam
              dignissimos maxime eos nesciunt aliquam ipsa, nobis laboriosam
              nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus autem ducimus quasi impedit minima iure, obcaecati
              consequatur eaque delectus repellendus laboriosam! Libero
              explicabo veritatis molestiae eveniet eaque corrupti? Enim,
              officia?
            </p>
          </div>
          <div className="w-10/12 hidden lg:col-span-5 lg:flex lg:mt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="text-gray-500 w-10/12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 py-10" id="mission">
        <div className="grid lg:gap-8 lg:grid-cols-12 lg:py-16 max-w-screen-2xl mx-auto px-4 py-8 xl:gap-0">
          <div className="w-10/12 hidden lg:col-span-5 lg:flex lg:mt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="text-gray-500 w-10/12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              ></path>
            </svg>
          </div>
          <div className="lg:col-span-7 mr-auto place-self-center">
            <h2 className="text-3xl text-gray-900 dark:text-white font-bold leading-none max-w-2xl mb-4 md:text-4xl tracking-tight xl:text-5xl">
              Ending Violence against women & girl (VAWG) Training
            </h2>
            <br />
            <p className="text-gray-500 dark:text-gray-400 font-normal lg:mb-8 lg:text-xl max-w-2xl mb-6 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              odit dolor perferendis veritatis aspernatur repellat, voluptatibus
              recusandae vitae aperiam aliquid repellendus alias nihil vero quia
              ipsa quo aut officia. Magni? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Et reprehenderit pariatur fuga,
              nostrum cum, ab quis adipisci deserunt numquam modi quisquam
              dignissimos maxime eos nesciunt aliquam ipsa, nobis laboriosam
              nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus autem ducimus quasi impedit minima iure, obcaecati
              consequatur eaque delectus repellendus laboriosam! Libero
              explicabo veritatis molestiae eveniet eaque corrupti? Enim,
              officia?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrainingProgram;
