import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import SocialMediaFollow from "./SocialMediaFollow";
import ics_logo from "./../assets/ics_logo.png";
import useFontClass from "../utils/useFontClass";

const Footer = () => {
  const { t } = useTranslation();
  const { fontClass } = useFontClass();

  const LinkGroup = memo(({ children, header }) => (
    <div className={`w-full px-4 sm:w-1/2 lg:w-2/12 mt-10 sm:mt-0 ${fontClass}`}>
      <div className="mb-10 w-full">
        <h4 className="mb-9 text-base sm:text-base font-semibold text-gray-700 dark:text-white text-center sm:text-left flex justify-center sm:justify-center md:justify-center lg:justify-start overflow-hidden">
          {header}
        </h4>
        <ul className="space-y-3 text-center sm:text-left">{children}</ul>
      </div>
    </div>
  ));

  const NavLink = memo(({ link, label }) => (
    <li>
      <a
        href={link}
        aria-label={`Learn more about ${label}`}
        className={`text-sm sm:text-base leading-loose text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary py-2 flex justify-center sm:justify-center md:justify-center lg:justify-start overflow-x-auto ${fontClass}`}
      >
        {label}
      </a>
    </li>
  ));

  return (
    <footer className={`relative z-10 bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px] font-poppins`}>
      <section className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          {/* Logo and Contact Details */}
          <LogoAndContact />

          {/* Resources Links */}
          <LinkGroup header={t("footer.resourcesHeader")}>
            {t("footer.resources", { returnObjects: true }).map((resource) => (
              <NavLink
                key={resource.id}
                link={resource.link}
                label={resource.label}
              />
            ))}
          </LinkGroup>

          {/* Company Links */}
          <LinkGroup header={t("footer.companyLinksHeader")}>
            {t("footer.companyLinks", { returnObjects: true }).map(
              (resource) => (
                <NavLink
                  key={resource.id}
                  link={resource.link}
                  label={resource.label}
                />
              )
            )}
          </LinkGroup>

          {/* Quick Links */}
          <LinkGroup
            header={t("footer.partnersLinksHeader")}
            className="hidden sm:block"
          >
            {t("footer.partnersLinks", { returnObjects: true }).map(
              (resource) => (
                <NavLink
                  key={resource.id}
                  link={resource.link}
                  label={resource.label}
                />
              )
            )}
          </LinkGroup>

          {/* Social Media Follow */}
          <SocialMediaFollow
            socialLinks={t("footer.socialLinks", { returnObjects: true })}
          />
        </div>
      </section>
    </footer>
  );
};

const LogoAndContact = memo(() => {
  const { t } = useTranslation();
  return (
    <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
      <div className="mb-10 w-full flex flex-wrap overflow-hidden sm:justify-center md:justify-center lg:justify-start xl:justify-start">
        <a href="/" className="mb-6 inline-block max-w-80 mx-auto sm:mx-0">
          <img
            src={ics_logo}
            alt={t("footer.altLogo")}
            className="max-w-full dark:hidden h-auto"
          />
          <img
            src={t("footer.logoDark")}
            alt={t("footer.altLogo")}
            className="max-w-full hidden dark:block h-auto"
          />
        </a>
        <p className="mb-7 text-base text-body-color dark:text-dark-6 text-center sm:text-left md:text-center lg:text-left">
          {t("footer.organizationName")}
        </p>
        <address className="flex items-center text-sm font-medium text-dark dark:text-white justify-center sm:justify-start not-italic mx-auto lg:mx-0">
          <span className="mr-3 text-primary">
            {/* Phone Icon SVG */}
            {/* ...SVG Code Here... */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG path */}
            </svg>
          </span>
          <span>{t("footer.phone")}</span>
        </address>
      </div>
    </div>
  );
});

export default Footer;
