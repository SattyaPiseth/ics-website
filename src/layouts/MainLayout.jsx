import React from "react";
import Navbar from "../components/NavbarComponent";
import { Outlet } from "react-router-dom";
import StickyBar from "../components/StickyBarComponent";
import Footer from "../components/FooterComponent";
import footerData from "./../json/layouts/footer.json";

export default function MainLayout() {
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
