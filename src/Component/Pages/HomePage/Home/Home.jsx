
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import SliderBanner from "../SliderBanner/SliderBanner";

const Home = () => {
  return (
    <div>
      <div className=" md:w-[1280px] mx-auto w-full">
        <SliderBanner></SliderBanner>
        
        <PopularClasses></PopularClasses>

        <PopularInstructors></PopularInstructors>
      </div>
    </div>
  );
};

export default Home;
