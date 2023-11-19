import "./InstructorCard.css";
import mainLogo from "../../../../assets/logo/inkwell-logo-white.svg";
const InstructorCard = ({ instructor }) => {
  return (
    <div className="md:h-[450px] h-[500px] md:w-[280px]  mx-6 shadow-custom-instructor-card bg-[#1eb2a6] relative overflow-hidden">
      <img className="w-[150px] mt-9 ml-10" src={mainLogo} alt="logo" />
      <p
        title="email"
        className="text-white cursor-pointer font-light absolute top-[40%] -left-10 -rotate-90"
      >
        {instructor.email}
      </p>
      <div className="absolute top-24 -right-16 bg-white shadow-custom-instructor-image rounded-full p-2">
        <img
          src={instructor.photo}
          className="rounded-full object-cover object-right w-52 border-2 border-dashed border-stone-500 p-2 h-52"
          alt="profile image"
        />
      </div>
      <div className="absolute bottom-10 left-10">
        <h4
          title={instructor.name}
          className="md:text-2xl text-3xl font-extrabold text-stone-700"
        >
          {instructor.name}
        </h4>
        <h4 className="text-xl font-normal text-stone-600">Instructor</h4>
      </div>
    </div>
  );
};

export default InstructorCard;
