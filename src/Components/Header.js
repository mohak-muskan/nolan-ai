import { LOGO } from "../Constants/resources";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="absolute z-10 w-full py-4 bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/"><div className="p-4 w-9">{LOGO}</div></Link>
        <div className="text-white text-2xl bold">Bring your imagination to picture</div>
        <div className="flex items-center">
          <ul className="flex flex-row text-white">
            <Link to="/"><li className="p-4">Home</li></Link>  
            <li className="p-4">Features</li>
            <li className="p-4">About Us</li>
            <li className="p-4">Careers</li>
            <li className="p-4">Pricing</li>
            <button class="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold border-2 border-transparent hover:border-purple-600 hover:text-purple-600 hover:bg-white transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-purple-400">
              Log in
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
