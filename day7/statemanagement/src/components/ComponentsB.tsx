interface ComponentsBProps {
  orang: string;
}

import { useContext } from "react";
import { UserContext } from "../context/UserContext";
export default function ComponentsB() {
  const context = useContext(UserContext);
  return (
    <div style={{ backgroundColor: "red" }}>
      <h1>ComponentsB</h1>
      <p>{context?.name}</p>
    </div>
  );
}
