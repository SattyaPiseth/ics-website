import React, { useEffect } from "react";
import Navbar from "../components/NavbarComponent";
import { Outlet, useLocation } from "react-router-dom";
import StickyBar from "../components/StickyBarComponent";
import Footer from "../components/FooterComponent";
import footerData from "./../json/layouts/footer.json";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MainLayout() {
  const location = useLocation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, [location]);
  return (
    <>
      <StickyBar />
      <Navbar />
      <main className="bg-gray-50">
        <section>
          <Outlet />
        </section>
      </main>
      <Footer data={footerData} />
    </>
  );
}
