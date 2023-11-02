import SocialProof from "../SocialProof/SocialProof";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="text-white w-full lg:h-[96vh] h-[60vh] flex justify-center -z-1 relative flex-col lg:p-36 p-6 py-10  HeroSectionBG">
      <h4 className="text-sm  uppercase">
        Welcome to Inkwell Academy
      </h4>
      <h2 className="text-4xl leading-[1.3] w-fit md:w-[500px] font-bold mt-2">Best Online Drawing Course Website</h2>
      <h3 className="leading-6 text-sm mt-5">Our website Guides new ArtStudents From the starting day <br /> With The help of our guiding course. You can start drawing at any age!!!</h3>

      <div className="flex gap-4 mt-6">
        <button className="font-semibold text-sm uppercase bg-[#1eb2a6] hover:text-[#1eb2a6] hover:bg-white duration-300     p-3 rounded text-white">Get Started Now !</button>
        <button className="font-semibold text-sm uppercase border border-white hover:border-[#1eb2a6] p-3 rounded hover:bg-[#1eb2a6;] duration-300 text-white ">View Courses</button>
      </div>
      <SocialProof />
    </div>
  );
};

export default HeroSection;
