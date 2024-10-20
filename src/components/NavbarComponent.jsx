import React, { useState } from "react";
import DropdownComponent from "./DropdownComponent";
import { IoIosClose } from "react-icons/io";
import { FaChartLine, FaCode, FaDonate, FaFolderOpen } from "react-icons/fa";
import {
  FaBuildingNgo,
  FaHandshakeSimple,
  FaListCheck,
  FaRoadCircleCheck,
} from "react-icons/fa6";
import { BiSolidMessageDetail } from "react-icons/bi";
import { TbCopyCheckFilled } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";

export default function NavbarComponent() {
  const [open, setOpen] = useState(false);

  // Accessibility-enhanced sections
  const expertiseSection = [
    {
      title: "Expertise",
      items: [
        {
          href: "#",
          title: "Skillful Parenting Program",
          description:
            "A comprehensive program designed to empower parents and caregivers with positive parenting practices to enhance child development and family well-being.",
          Icon: TbCopyCheckFilled,
        },
        {
          href: "#",
          title: "Family Budgeting",
          description:
            "A module focused on money management, helping families reduce financial stress and improve their financial decision-making.",
          Icon: GrMoney,
        },
      ],
    },
    {
      title: "Projects",
      items: [
        {
          href: "#",
          title: "Tailored Training Services",
          description:
            "Customized training sessions for individuals and organizations to meet specific needs in parenting and family support.",
          Icon: FaChartLine,
        },
      ],
    },
    {
      title: "Resources",
      items: [
        {
          href: "#",
          title: "Skillful Parenting Guide",
          description:
            "Explore our guide that covers essential modules on parenting, family communication, positive discipline, and child protection.",
          Icon: FaFolderOpen,
        },
      ],
    },
  ];

  const partnersSection = [
    {
      title: "Partners & Donors",
      items: [
        {
          href: "#",
          title: "Collaborative Partnerships",
          description:
            "Discover how we work with organizations to end violence in families.",
          Icon: FaHandshakeSimple,
        },
      ],
    },
    {
      title: "Donate",
      items: [
        {
          href: "#",
          title: "Support Skilful Parenting",
          description:
            "Help us improve family lives and protect children and women from violence.",
          Icon: FaDonate,
        },
      ],
    },
  ];

  const aboutUsSection = [
    {
      title: "About us",
      items: [
        {
          href: "#",
          title: "Who We Are",
          description:
            "Improving Cambodia’s Society through Skilful Parenting (ICS-SP) is a national non-profit organization established in July 2015. We aim to enhance family lives to positively impact the well-being of children and women. Our collaborative approach enables us to work effectively with partners and participants in our mission.",
          Icon: FaBuildingNgo,
        },
        {
          href: "#",
          title: "Our Mission",
          description:
            "ICS-SP is dedicated to ending family violence and improving the well-being of children and women in Cambodia through collaborative efforts and skillful parenting programs.",
          Icon: FaListCheck,
        },
        {
          href: "#",
          title: "Our Vision",
          description:
            "We envision a society where every family thrives in a violence-free environment, fostering positive relationships and ensuring a safe and nurturing space for children and women.",
          Icon: FaRoadCircleCheck,
        },
      ],
    },
    {
      title: "Contact us",
      items: [
        {
          href: "#",
          title: "Get in Touch with Us",
          description:
            "Reach out to ICS-SP to collaborate or learn more about our initiatives to improve family lives and prevent violence through skillful parenting.",
          Icon: BiSolidMessageDetail,
        },
      ],
    },
  ];

  return (
    <header>
      <div className="bg-white dark:bg-dark font-poppins">
        <div className="container mx-auto">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-96 min-w-60 max-w-full px-4">
              <a href="#" className="block w-full py-5" aria-label="Logo">
                <img
                  src="https://ics-skillfulparenting.org/wp-content/uploads/2023/04/cropped-Logo-for-web_black.png"
                  alt="ICS Skillful Parenting Logo"
                  className="dark:hidden w-64 xs:w-52 sm:w-52 md:w-60 lg:w-60 xl:w-80 sm:min-w-52 md:min-w-60 xl:min-w-80 2xl:max-w-80 transition-all duration-300"
                />
                <img
                  src="https://ics-skillfulparenting.org/wp-content/uploads/2023/04/cropped-Logo-for-web_black.png"
                  alt="ICS Skillful Parenting Logo (Dark Mode)"
                  className="hidden dark:block w-64 xs:w-52 sm:w-52 md:w-60 lg:w-60 xl:w-80 sm:min-w-52 md:min-w-60 xl:min-w-80 2xl:max-w-80 transition-all duration-300"
                />
              </a>
            </div>
            <div className="flex w-full items-center justify-end px-4">
              <div>
                <button
                  onClick={() => setOpen(!open)}
                  aria-expanded={open}
                  aria-controls="navbarCollapse"
                  id="navbarToggler"
                  className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden transition-all duration-300`}
                  aria-label="Toggle navigation"
                >
                  {open ? (
                    <IoIosClose
                      className="w-5 h-5 xs:w-6 xs:h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform duration-300"
                      aria-hidden="true" // Hide this icon from assistive technologies
                    />
                  ) : (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 xs:w-6 xs:h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true" // Hide this icon from assistive technologies
                    >
                      <path
                        fill="none"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="48"
                        d="M88 152h336M88 256h336M88 360h336"
                      ></path>
                    </svg>
                  )}
                </button>
                <nav
                  className={`absolute right-0 px-6 shadow lg:block lg:w-full header-navbar z-40 w-full max-w-full rounded bg-white py-3 shadow-features duration-300 dark:bg-dark-2 xs:max-w-full lg:static lg:mt-0 lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-none lg:dark:bg-transparent visible top-full opacity-100 lg:visible lg:opacity-100 ${
                    !open && "hidden"
                  }`}
                  id="navbarCollapse"
                >
                  <ul className="block lg:flex whitespace-nowrap border sm:border-transparent rounded-lg">
                    <li className="group relative hidden xl:block">
                      <a
                        href="about-us"
                        className="flex py-2 justify-center text-base font-medium text-body-color hover:text-dark lg:ml-6 lg:inline-flex dark:text-dark-6 dark:hover:text-white uppercase group-hover:bg-primary/5 group-hover:text-primary dark:group-hover:bg-dark-2 dark:group-hover:text-white lg:px-1.5 xl:px-3 rounded-lg"
                      >
                        About Us
                      </a>
                    </li>
                    <ul className="lg:block xl:hidden">
                      <DropdownComponent
                        label={"about & contact"}
                        dropDownSection={aboutUsSection}
                      />
                    </ul>

                    <ul>
                      <DropdownComponent
                        label={"Partners & Support"}
                        dropDownSection={partnersSection}
                      />
                    </ul>
                    <ul>
                      <DropdownComponent
                        label={"Expertise & Resources"}
                        dropDownSection={expertiseSection}
                      />
                    </ul>
                    <li className="group relative hidden xl:block">
                      <a
                        href="contact-us"
                        className="flex py-2 justify-center text-base font-medium text-body-color hover:text-dark lg:ml-6 lg:inline-flex dark:text-dark-6 dark:hover:text-white uppercase group-hover:bg-primary/5 group-hover:text-primary dark:group-hover:bg-dark-2 dark:group-hover:text-white lg:px-1.5 xl:px-3 rounded-lg"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
