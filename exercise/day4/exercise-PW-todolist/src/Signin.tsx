import { Link, Navigate, useNavigate } from "react-router";
import userContext from "./store/Context";
import { useState } from "react";

export default function Signin() {
  const { email, setEmail, login } = userContext();
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-[linear-gradient(to_right,rgba(50,120,220,1),rgba(0,120,103,1))]  flex items-center justify-center">
      <div className="w-[500px] h-[500px] gap-3 bg-white shadow-xl rounded-3xl flex flex-col items-center justify-center">
        <h2>Username / Email </h2>
        <input
          className="border-gray-400 border rounded-xl h-10 w-80 px-3"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h2>Password </h2>
        <input
          className="border-gray-400 border rounded-xl h-10 w-80 px-3"
          type="password"
          value={passwordInputValue}
          onChange={(e) => setPasswordInputValue(e.target.value)}
        />
        <button
          className="h-fit w-fit bg-black p-2 rounded-xl text-amber-50"
          onClick={() => {
            const success = login(passwordInputValue);
            if (success) navigate("/todo");
            else alert("wrong password");
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
