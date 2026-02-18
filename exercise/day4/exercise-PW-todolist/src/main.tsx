import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Todo from "./Todo";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="relative min-h-screen">
      <div className="h-[300px] z-0 overflow-hidden bg-cover bg-center bg-[linear-gradient(to_right,rgba(131,58,180,0.7),rgba(29,70,253,0.7)),url('../img/03b822a810f232874b021926bb904eafb394287f.png')]"></div>
      <div className="absolute w-[100vw] flex  justify-center top-20">
        <Todo />
      </div>
    </div>
  </StrictMode>,
);
