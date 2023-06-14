
import { Helmet } from "react-helmet-async";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import SliderBanner from "../SliderBanner/SliderBanner";
import ExtraSection from "../ExtraSection/ExtraSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Inkwell | Home</title>
      </Helmet>
      <div className=" md:w-[1280px] mx-auto w-full">
        <SliderBanner></SliderBanner>

        <PopularClasses></PopularClasses>

        <PopularInstructors></PopularInstructors>
        <ExtraSection></ExtraSection>
      </div>
    </div>
  );
};

export default Home;
