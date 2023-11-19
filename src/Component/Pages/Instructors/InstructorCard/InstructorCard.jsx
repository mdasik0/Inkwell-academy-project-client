import "./InstructorCard.css";
import mainLogo from "../../../../assets/logo/inkwell-logo-white.svg";
import profileImg from "../../../../assets/testImg/profile-picture.png";
const InstructorCard = () => {
  return (
    <div className="h-[450px] shadow-custom-instructor-card bg-[#1eb2a6] relative overflow-hidden">
      <img className="w-[150px] mt-9 ml-10" src={mainLogo} alt="logo" />
      <p className="text-white font-light  absolute top-[40%] -left-10 -rotate-90">
        asikthe1st@gmail.com
      </p>
      <div className="absolute top-24 -right-16 bg-white shadow-custom-instructor-image rounded-full p-2">
        <img
          src={profileImg}
          className="rounded-full w-52 border-2 border-dashed border-stone-500 p-2 h-52"
          alt="profile image"
        />
      </div>
      <div className="absolute bottom-10 left-10">
        <h4 className="text-4xl font-extrabold text-stone-700">Md Asik</h4>
        <h4 className="text-xl font-normal text-stone-600">Instructor</h4>
      </div>
    </div>
  );
};

export default InstructorCard;
