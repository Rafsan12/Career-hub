import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppliedJob from "./components/AppliedJob/AppliedJob";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import JobDetails from "./components/FeaturedJobs/JobDetails";
import Home from "./components/Home/Home";
import Root from "./components/Root/Root";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/applied",
        element: <AppliedJob />,
        loader: () => fetch("/data/jobs.json"),
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: () => fetch("/data/jobs.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
