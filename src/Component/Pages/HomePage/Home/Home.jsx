
import { Helmet } from "react-helmet-async";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import ExtraSection from "../ExtraSection/ExtraSection";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Inkwell | Home</title>
      </Helmet>
        <HeroSection />
      <div className=" md:w-[1280px] mx-auto w-full">

        <PopularClasses></PopularClasses>

        <PopularInstructors></PopularInstructors>
        <ExtraSection></ExtraSection>
      </div>
    </div>
  );
};

export default Home;
