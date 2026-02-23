import { Link } from "react-router";
import userContext from "./store/Context";

export default function Signin() {
  const { email, setEmail } = userContext();
  return (
    <div className="w-screen h-screen bg-[linear-gradient(to_right,rgba(50,120,180,1),rgba(89,120,103,1))]  flex items-center justify-center">
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
        />
        <Link to="/todo" className="text-white">
          <button className="h-fit w-fit bg-black p-2 rounded-xl">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}
