import React from "react";
import ReactDOM from "react-dom/client";
import { RootRoute } from "@/routes/root";
import { AboutRoute } from "@/routes/about";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",

    element: <RootRoute />,
  },
  {
    path: "/about",

    element: <AboutRoute />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
