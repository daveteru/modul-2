import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import UseState from "./pages/UseState";
import UseEffect from "./pages/UseEffect";
import UseRef from "./pages/UseRef";
import UseMemo from "./pages/UseMemo";
import UseReducer from "./pages/UseReducer";
import UseCallback from "./pages/UseCallback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/Use-State",
    element: <UseState />,
  },
  {
    path: "/Use-Effect",
    element: <UseEffect/>
  },
  {
    path: "/Use-ref",
    element: <UseRef/>
  },
  {
    path: "/Use-memo",
    element: <UseMemo/>
  },
  {
    path: "/Use-reducer",
    element: <UseReducer/>
  },
  {
    path: "/Use-callback",
    element: <UseCallback/>
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
