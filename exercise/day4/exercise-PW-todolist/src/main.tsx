import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Signin from "./Signin";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./Home";



const router = createBrowserRouter([
  {
    path: "/todo",
    element: <Home/>
  },
  {
    path: "/",
    element: <Signin/>
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <RouterProvider router={router} />,
  </StrictMode>,
);
