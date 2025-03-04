import React, { useEffect } from "react";
import Navbar from "../components/NavbarComponent";
import { Outlet, useLocation } from "react-router-dom";
import StickyBar from "../components/StickyBarComponent";
import Footer from "../components/FooterComponent";
import footerData from "./../json/layouts/footer.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useScrollToSection } from "../utils/useScrollToSection";


export default function MainLayout() {

  useScrollToTop();
  useScrollToSection();

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
      <main className="bg-white overflow-hidden">
        <section>
      
          <Outlet />
        </section>
      </main>
      <Footer data={footerData} />
    </>
  );
}

export const useScrollToTop = () => {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[location])
}
