import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="bg-yellow-500 w-full h-[96vh] flex justify-center flex-col p-36  HeroSectionBG">
      <h4 className="text-sm font-semibold uppercase">
        Welcome to Inkwell Academy
      </h4>
      <h2 className="text-4xl leading-[1.3] w-[500px] font-extrabold mt-2">Best Online Drawing Course Website</h2>
      <h3 className="font-semibold leading-6 text-sm mt-5">Our website Guides new ArtStudents From the starting day <br /> With The help of our guiding course. You can start drawing at any age!!!</h3>

      <div>
        <button>Get Started Now!</button>
        <button>View Courses</button>
      </div>
    </div>
  );
};

export default HeroSection;
