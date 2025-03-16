import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const KeyStatisticComponent = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="py-20 w-full container" data-aos="flip-down">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl py-10 px-10 xl:py-16 xl:px-20 bg-gray-50 flex items-center justify-between flex-col gap-16 lg:flex-row w-full">
          <div className="w-full lg:w-60">
            <h2 className="font-manrope text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left">
              Our Stats
            </h2>
            <p className="text-sm text-gray-500 leading-6 text-center lg:text-left">
              By 2022, Our Achievements
            </p>
          </div>
          <div className="w-full lg:w-4/5">
            <div className="flex flex-col flex-1 gap-10 lg:gap-0 lg:flex-row lg:justify-between">
              <div className="block">
                <div className="font-manrope font-bold text-4xl text-primary-light mb-3 text-center lg:text-left">
                  {inView && <CountUp start={0} end={7111} duration={2.5} separator="," />}
                </div>
                <span className="text-gray-900 text-center block lg:text-left">
                  Parents directly reached
                </span>
              </div>
              <div className="block">
                <div className="font-manrope font-bold text-4xl text-primary-light mb-3 text-center lg:text-left">
                  {inView && <CountUp start={0} end={24924} duration={3} separator="," />}
                </div>
                <span className="text-gray-900 text-center block lg:text-left">
                  Children benefited
                </span>
              </div>
              <div className="block">
                <div className="font-manrope font-bold text-4xl text-primary-light mb-3 text-center lg:text-left">
                  {inView && <CountUp start={0} end={30072} duration={3.5} separator="," />}
                </div>
                <span className="text-gray-900 text-center block lg:text-left">
                  Peer-to-Peer reached
                </span>
              </div>
              <div className="block">
                <div className="font-manrope font-bold text-4xl text-primary-light mb-3 text-center lg:text-left">
                  {inView && <CountUp start={0} end={239} duration={2} separator="," />}
                </div>
                <span className="text-gray-900 text-center block lg:text-left">
                  Facilitators trained
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyStatisticComponent;
