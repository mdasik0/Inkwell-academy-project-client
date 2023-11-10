import {
  BsDribbble,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import logo from "../../../assets/logo/inkwell-logo-white.svg";
const Footer = () => {
  return (
    <footer className="h-full p-16 bg-[#1eb2a6] text-white">
      <div className="flex flex-col md:flex-row justify-center gap-10 md:justify-around items-start">
        {/* logo */}
        <div>
          <img className="h-full  w-[130px]" src={logo} alt="website logo" />
          <p className="italic text-sm w-[300px] mt-4">
            &quot;Cultivating Creativity, Nurturing Talent, and Inspiring
            Artistic Excellence&quot;
          </p>
        </div>
        {/* about */}
        <div>
          <h4 className="font-bold text-lg mb-3">About</h4>
          <p className="text-sm mt-1 hover:underline duration-300 cursor-pointer">
            Terms & Conditions
          </p>
          <p className="text-sm mt-1 hover:underline duration-300 cursor-pointer">
            Privacy Policy
          </p>
          <p className="text-sm mt-1 hover:underline duration-300 cursor-pointer">
            Documentation
          </p>
          <p className="text-sm mt-1 hover:underline duration-300 cursor-pointer">
            FAQ
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-3">Courses</h4>
          <p className="text-sm mt-1 hover:underline duration-300 cursor-pointer">
            Blocking Shapes
          </p>
          <p className="text-sm mt-1 hover:underline duration-300 cursor-pointer">
            Outline making
          </p>
          <p className="text-sm mt-1 hover:underline duration-300 cursor-pointer">
            Coloring
          </p>
          <p className="text-sm mt-1 hover:underline duration-300 cursor-pointer">
            Mecha Drawing
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-3">Contact</h4>
          <p className="text-sm mt-1 hover:underline duration-300 cursor-pointer">
            asikthe1st@gmail.com
          </p>
          <p className="text-sm mt-1 hover:underline duration-300 cursor-pointer">
            +880123456789
          </p>
          <p className="text-sm mt-1 hover:underline duration-300 cursor-pointer">
            32th st kalibazar, Narayanganj, Bangladesh
          </p>
        </div>
      </div>
      {/* socials */}
      <div className="w-full text-center flex items-center justify-center gap-4 mt-8 md:mt-16">
        <a
          href=""
          className="border w-fit p-3 cursor-pointer rounded-full  hover:bg-[rgba(255,255,255,0.24)] duration-500"
        >
          <BsFacebook />
        </a>
        <div className="border w-fit p-3 cursor-pointer rounded-full  hover:bg-[rgba(255,255,255,0.24)] duration-500">
          <BsInstagram />
        </div>
        <a
          href={"https://www.linkedin.com/in/mdasik0/"}
          className="border w-fit p-3 cursor-pointer rounded-full  hover:bg-[rgba(255,255,255,0.24)] duration-500"
        >
          <BsLinkedin />
        </a>
        <div className="border w-fit p-3 cursor-pointer rounded-full  hover:bg-[rgba(255,255,255,0.24)] duration-500">
          <BsDribbble />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
