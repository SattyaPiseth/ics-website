import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import featuresData from "./../../json/layouts/features.json";

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

const FeaturesSection = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    setFeatures(featuresData);
  }, []);

  return (
    <>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col lg:flex-row lg:justify-between">
            <div className="relative w-full text-center lg:text-left">
              <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6">
                Key Programs
              </h2>
              <p className="text-lg font-normal text-gray-500 mb-5 py-5 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                natus tenetur pariatur ad recusandae illum est eos! Vero, modi
                consequatur? Facilis, doloremque. Facere nobis nostrum debitis
                atque corporis blanditiis cum. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Reiciendis reprehenderit debitis
                corporis sunt at quia ut quas, placeat cumque id ea optio animi
                earum cupiditate provident. Deserunt, nam maiores. Qui?Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Natus, dolor
                molestias rem aperiam fugiat distinctio deserunt id, repellat
                repudiandae tempore laborum. Ex, sint quibusdam iusto libero
                accusantium esse eveniet hic. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </div>
            {/* <div className="relative w-full text-center lg:text-left lg:w-2/4">
          <p className="text-lg font-normal text-gray-500 mb-5">
            We develop impactful programs that create lasting change and
            improve lives.
          </p>
          <a
            href="#"
            className="flex flex-row items-center justify-center gap-2 text-base font-semibold text-primary-light lg:justify-start"
          >
            Learn More
          </a>
        </div> */}
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const IconComponent = iconMap[feature.icon] || FaHandsHelping; // Use mapped icon or fallback

              return (
                <div
                  key={feature.id}
                  className="group relative flex flex-col items-center bg-gray-100 rounded-2xl p-6 transition-all duration-500 hover:bg-primary-light h-[340px]"
                >
                  {/* Icon Container */}
                  <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
                    <IconContext.Provider
                      value={{ size: "30", color: "#0080C0" }}
                    >
                      <IconComponent />
                    </IconContext.Provider>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white text-center">
                    {feature.title}
                  </h4>

                  {/* Scrollable Description */}
                  <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white text-wrap max-h-40 overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent scroll-smooth p-1 text-left">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section
        class="bg-white dark:bg-gray-900 py-10"
       
        id="mission"
      >
        <div class="grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h2 class="max-w-2xl mb-4 text-3xl font-bold text-gray-900 tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
              Skillful Parenting
            </h2>
            <br />
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
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
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex w-10/12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-10/12 text-gray-500"
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
      <section
        class="bg-white dark:bg-gray-900 py-10"
   
        id="mission"
      >
        <div class="grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex w-10/12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-10/12 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              ></path>
            </svg>
          </div>
          <div class="mr-auto place-self-center lg:col-span-7">
            <h2 class="max-w-2xl mb-4 text-3xl font-bold text-gray-900 tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
              Financial Literacy and Economic Empowerment
            </h2>
            <br />
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
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
      <section
        class="bg-white dark:bg-gray-900 py-10"
    
        id="mission"
      >
        <div class="grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h2 class="max-w-2xl mb-4 text-3xl font-bold text-gray-900 tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
              Youth Empowerment
            </h2>
            <br />
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
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
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex w-10/12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-10/12 text-gray-500"
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
      <section
        class="bg-white dark:bg-gray-900 py-10"
 
        id="mission"
      >
        <div class="grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex w-10/12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-10/12 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              ></path>
            </svg>
          </div>
          <div class="mr-auto place-self-center lg:col-span-7">
            <h2 class="max-w-2xl mb-4 text-3xl font-bold text-gray-900 tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
              Ending Violence against women & girl (VAWG)
            </h2>
            <br />
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
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

export default FeaturesSection;
