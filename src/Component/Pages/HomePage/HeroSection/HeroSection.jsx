import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="text-white w-full h-[96vh] flex justify-center flex-col p-36  HeroSectionBG">
      <h4 className="text-sm  uppercase">
        Welcome to Inkwell Academy
      </h4>
      <h2 className="text-4xl leading-[1.3] w-[500px] font-bold mt-2">Best Online Drawing Course Website</h2>
      <h3 className="leading-6 text-sm mt-5">Our website Guides new ArtStudents From the starting day <br /> With The help of our guiding course. You can start drawing at any age!!!</h3>

      <div className="flex gap-4 mt-6">
        <button className="font-semibold text-sm uppercase bg-[#1eb2a6] hover:text-[#1eb2a6] hover:bg-white duration-300     p-3 rounded text-white">Get Started Now !</button>
        <button className="font-semibold text-sm uppercase border border-white hover:border-[#1eb2a6] p-3 rounded hover:bg-[#1eb2a6;] duration-300 text-white ">View Courses</button>
      </div>
    </div>
  );
};

export default HeroSection;
