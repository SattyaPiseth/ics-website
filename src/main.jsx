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
        path: "/get_involved",
        element: <h1>Get Involved Page</h1>
      },
      {
        path: "/our-programs",
        element: <OurProgram/>
      },
      {
        path: "/training-services",
        element: <h1>Training Services Page</h1>
      },
      {
        path: "/impact-stories",
        element: <h1>Impact Stories Page</h1>
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
