import { useState } from "react";
import { axiosInstance } from "../lib/axios";

export default function Register() {
  const [name, setName] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [isLoad, setIsload] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!name || !mail || !pass)
      return alert("Name , Mail or Password Cannot be Empty");

    try {
        setIsload(true)
      await axiosInstance.post("/users/register", {
        name: name,
        email: mail,
        password: pass,
      });
      alert("Register Success");
    } catch (error) {
      console.log(error);
      alert("Register Failed");
    }
    finally{
        setIsload(false)
    }
  };

  return (
    <div className="wrap">
      <div className="">
        <h1>Register</h1>
        <div>
          <div>
            {" "}
            Name
            <input
              type="text"
              placeholder="your name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
          </div>
          <div>
            Email
            <input
              type="email"
              placeholder="your email"
              onChange={(e) => setMail(e.target.value)}
            ></input>
          </div>
          <div>
            Password
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPass(e.target.value)}
            ></input>
          </div>
        </div>
        <button onClick={handleSubmit} disabled={isLoad}>{isLoad? "loading" : "submit"}</button>
      </div>
    </div>
  );
}
