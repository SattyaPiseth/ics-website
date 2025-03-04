import React from "react";

const WhoAreWe = () => {
  return (
    <section class="bg-white dark:bg-gray-900 py-10 mt-1" data-aos="fade-right" id="who-we-are">
      <div class="grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h2 class="max-w-2xl mb-4 text-3xl font-bold text-gray-900 tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Who We are
          </h2>
          <br />
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Improving Cambodia’s Society through Skilful Parenting (ICS-SP) is a
            national non-profit organisation, which was officially registered
            with the Cambodian Ministry of Interior in July 2015. ICS-SP aims to
            improve family lives in order to positively impact the well-being of
            children and women. At the core of ICS-SP approach is the Skilful
            Parenting program and Financial Literacy (Family Budgeting) which
            reduces and prevents violence against children and women.
            <br /> <br />
            We realise that many more model parents can be achieved if we work
            together with other organizations to achieve our mission and goals.
            We use a collaborative style in interacting both within our team as
            well as with our partners and participants.
            <br /> <br />
            We aim to end family violence, especially violence between spouses,
            violence against children and address the root causes.
          </p>
          {/* <a
          href="#"
          class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary-dark focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-dark"
        >
          Get started
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href="#"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Speak to Sales
        </a> */}
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex w-10/12">
          {/* <img src="./testimonial.png" alt="mockup" /> */}
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
  );
};

export default WhoAreWe;
