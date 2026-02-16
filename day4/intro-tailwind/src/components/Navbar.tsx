import { FaHouse } from "react-icons/fa6";
import { BsBookFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <div className="bg-[#4c222a]">
      <div className="container mx-auto box-border flex items-center justify-between p-6 text-white">
        <h1 className="text-2xl">ErBnB</h1>
        <div className="hidden items-center gap-4 md:flex">
          <p className="flex items-center gap-2">
            <FaHouse />
            Home
          </p>
          <p className="flex items-center gap-2">
            <BsBookFill />
            About
          </p>
          <p>Service</p>
        </div>
        <div className="md:hidden">
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
}
