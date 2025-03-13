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
import { lazy } from "react";

const BlogDetailsComponent = lazy(() =>
  import("./components/BlogDetailsComponent.jsx")
);
const AboutComponent = lazy(() =>
  import("./components/about-us/AboutComponent.jsx")
);
const ContactUsComponent = lazy(() =>
  import("./components/ContactUsComponent.jsx")
);
const OurProgram = lazy(() =>
  import("./components/our-programs/OurProgram.jsx")
);
const TrainingProgram = lazy(() =>
  import("./components/training-program/TrainingProgram.jsx")
);
const ImpactStories = lazy(() =>
  import("./components/impact-stories/ImpactStories.jsx")
);
const Breadcrumb = lazy(() => import("./components/about-us/Breadcrumbs.jsx"));

// Lazy-load about-us children pages
const Mission = lazy(() => import("./components/about-us/Mission.jsx"));
const OurHistory = lazy(() => import("./components/about-us/OurHistory.jsx"));
const WhoAreWe = lazy(() => import("./components/about-us/WhoAreWe.jsx"));
const Tab = lazy(() => import("./components/about-us/TabsComponent.jsx"));
const TeamComponent = lazy(() =>
  import("./components/about-us/TeamComponent.jsx")
);
const BrandLogo = lazy(() => import("./components/about-us/BrandLogo.jsx"));

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
        element: <Breadcrumb />,
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
