import React, { useContext, type ComponentProps } from "react";
import ComponentsB from "./ComponentsB";
import { UserContext } from "../context/UserContext";

interface componentAprops {
  name: string;
}

export default function ComponentsA() {
  const context = useContext(UserContext);
  return (
    <div style={{ backgroundColor: "blue", padding: "10px" }}>
      <h1>ComponentsA</h1>
      <p>{context?.job}</p>
      <ComponentsB />
    </div>
  );
}
