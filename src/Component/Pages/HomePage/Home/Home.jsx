import { Helmet } from "react-helmet-async";
// import PopularClasses from "../PopularClasses/PopularClasses";
import HeroSection from "../HeroSection/HeroSection";
import OnlineEducation from "../OnlineEducation/OnlineEducation";
import PopularClassesSection from "../PopularClassSection/PopularClassesSection";
import PopularInstructorsSection from "../PopularInstructorSection/PopularInstructorsSection";
import LearningProcess from "../LearningProcess/LearningProcess";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Inkwell | Home</title>
      </Helmet>
      <HeroSection />
      <div className=" md:w-[1280px] mx-auto w-full">
        <OnlineEducation />
        {/* <PopularClasses></PopularClasses> */}
        <PopularClassesSection />
        {/* <PopularInstructors></PopularInstructors> */}
        <LearningProcess />
        <PopularInstructorsSection />
      </div>
      <NewsLetter />
    </div>
  );
};

export default Home;
