import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import { ThemeProvider } from "@material-tailwind/react";
import Loader from "./components/LoaderComponent";
import "react-toastify/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import App from "./App";
import "./i18n.js";
import blogData from "./json/layouts/blog_details.json";
import { HelmetProvider } from "react-helmet-async";
import BlogDetailsComponent from "./components/BlogDetailsComponent.jsx";
import AboutComponent from "./components/about-us/AboutComponent.jsx";
import ContactUsComponent from "./components/ContactUsComponent.jsx";
import OurProgram from "./components/our-programs/OurProgram.jsx";
import TrainingProgram from "./components/training-program/TrainingProgram.jsx";
import ImpactStories from "./components/impact-stories/ImpactStories.jsx";
import Mission from "./components/about-us/Mission.jsx";
import OurHistory from "./components/about-us/OurHistory.jsx";
import WhoAreWe from "./components/about-us/WhoAreWe.jsx";
import Tab from "./components/about-us/TabsComponent.jsx";
import TeamComponent from "./components/about-us/TeamComponent.jsx";
import BrandLogo from "./components/about-us/BrandLogo.jsx";
import GetInvolved from "./components/get-involved/GetInvolved.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Loader />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/blog-details",
        element: <BlogDetailsComponent blogData={blogData} />,
      },
      {
        path: "/about-us",
        element: <AboutComponent />,
        children: [
          {
            path: "mission",
            element: <Mission />,
          },
          {
            path: "our-history",
            element: <OurHistory />,
          },
          {
            path: "who-we-are",
            element: <WhoAreWe />,
          },
          {
            path: "our-approach_&_missions",
            element: <Tab />,
          },
          {
            path: "teams",
            element: <TeamComponent />,
          },
          {
            path: "partners_&_supporters",
            element: <BrandLogo />,
          },
        ],
      },
      {
        path: "/contact-us",
        element: <ContactUsComponent />,
      },
      {
        path: "/get_involved",
        element: <GetInvolved />,
      },
      {
        path: "/our-programs",
        element: <OurProgram />,
      },
      {
        path: "/training-services",
        element: <TrainingProgram />,
      },
      {
        path: "/impact-stories",
        element: <ImpactStories />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
      <ToastContainer />
    </ThemeProvider>
  </React.StrictMode>
);
