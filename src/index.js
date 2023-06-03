import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Javascript from "./pages/javascript";
import Css from "./pages/css";
import Html from "./pages/html";
import { Helmet, HelmetProvider } from 'react-helmet-async';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
   
  },
  {
    path: "/javascript",
    element: <Javascript />,
    errorElement: (
      <h1 style={{ color: "black", textAlign: "center" }}>
        .....SORRY PAGE NOT FOUND.....
      </h1>
    ),
  },
  {
    path: "/css",
    element: <Css />,
    errorElement: (
      <h1 style={{ color: "black", textAlign: "center" }}>
        .....SORRY PAGE NOT FOUND.....
      </h1>
    ),
  },
  {
    path: "/html",
    element: <Html />,
    errorElement: (
      <h1 style={{ color: "black", textAlign: "center" }}>
        .....SORRY PAGE NOT FOUND.....
      </h1>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <HelmetProvider>
     <RouterProvider router={router} />
     </HelmetProvider>
    
  </React.StrictMode>
);
