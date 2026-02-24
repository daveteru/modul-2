import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="nav">
      <h3 style={{fontFamily : "Alex Brush" , fontSize : "32px"}}>Logo</h3>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Product">Product</Link>
      </div>
    </div>
  );
}
