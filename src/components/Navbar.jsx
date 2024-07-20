import logo from "../assets/nitinlogo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
const Navbar = () => {
  return (
   <nav className="top-0 left-0 right-0 z-50 flex items-center justify-between px-0 py-2 bg-transparent shadow-md">
  <div className="flex items-center">
  <img className="h-8 w-auto" src={logo} alt="logo" />
  </div>
  <div className="flex items-center gap-4 text-2xl ml-auto">
    <a href="https://github.com/ethicalnitin" target="_blank" rel="noopener noreferrer"> 
      <FaGithub className="text-gray-600 hover:text-gray-800" />
    </a>
    <a href="https://www.linkedin.com/in/nitin-srivastava-785b13290/" target="_blank" rel="noopener noreferrer"> 
      <FaLinkedin className="text-blue-600 hover:text-blue-800" />
    </a>
    <a href="https://www.instagram.com/ibuildwebsites.io/" target="_blank" rel="noopener noreferrer"> 
      <FaInstagram className="text-pink-600 hover:text-pink-800" />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer"> 
      <FaSquareXTwitter className="text-blue-400 hover:text-blue-600" />
    </a>
  </div>
</nav>

  );
};

export default Navbar;
