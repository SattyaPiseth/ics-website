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
import BlogDetailsComponent from "./components/BlogDetailsComponent.jsx";
import blogData  from "./json/layouts/blog_details.json";
import AboutComponent from "./components/about-us/AboutComponent.jsx";
import ContactUsComponent from "./components/ContactUsComponent.jsx";
import OurProgram from "./components/our-programs/OurProgram.jsx";
import TrainingProgram from "./components/training-program/TrainingProgram.jsx";
import ImpactStories from "./components/impact-stories/ImpactStories.jsx";
import Breadcrumb from "./components/about-us/Breadcrumbs.jsx";


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
        element: <AboutComponent/>
      },
      {
        path: "/contact-us",
        element: <ContactUsComponent/>
      },
      {
        path: "/get-involved",
        element: <Breadcrumb/>
      },
      {
        path: "/our-programs",
        element: <OurProgram/>
      },
      {
        path: "/training-services",
        element: <TrainingProgram/>
      },
      {
        path: "/impact-stories",
        element: <ImpactStories/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </ThemeProvider>
  </React.StrictMode>
);
