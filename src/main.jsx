import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Auth from "./pages/Auth";
import Home from "./pages/Home";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "login",
      element: <Auth />,
    },
  ],
  {
    basename: "/notes-app/",
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
