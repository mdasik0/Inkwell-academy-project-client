import "./InstructorCard.css";
import { BiMailSend } from "react-icons/bi";
const InstructorCard = ({ teacher }) => {
  console.log(teacher);
  return (
    <div className="profile-card">
      <div className="img">
        <img src={teacher.photo} />
      </div>
      <div className="caption">
        <h3 title={teacher.name} className="text-lg cursor-pointer font-semibold text-white mt-3">
          {teacher.name.length > 10
            ? (teacher.name).slice(0, 10) + "..."
            : teacher.name}
        </h3>

        <p className="text-gray-200 text-sm">Instructor</p>
        <div className="social-links">
          <p title={teacher.email} className="flex items-center justify-center cursor-pointer mt-1 text-xs text-gray-200">
            <BiMailSend /> : {teacher.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
