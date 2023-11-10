import "./OE.css";
import onlineClass from "../../../../assets/icons/online_course.png";
import expert from "../../../../assets/icons/expert.png";
import certificate from "../../../../assets/icons/certificate.png";
const OnlineEducation = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-start md:mt-36 mt-14 md:mb-20 h-full py-6">
      <div className="md:w-1/2 m-3 w-fit md:h-[700px] ">
        <img
          className="w-full h-full object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1510832842230-87253f48d74f?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image of drawing"
        />
      </div>
      <div className="md:w-1/2 w-full p-3  md:ps-12 md:py-6">
        <h4 className="text-xl mx-3 md:mx-0 font-semibold">Learn Fundamentals</h4>
        <h1 className="text-5xl mx-3 md:mx-0 font-semibold line-height">
          Benefits About Learning With Us
        </h1>
        <div className="mt-6 w-full ">
          <div className="flex flex-col md:flex-row justify-between md:p-6 p-3 bg-gray-100 rounded-lg w-fit hover:bg-gray-300 duration-500 items-center gap-3 md:gap-6">
            <img src={onlineClass} alt="onlineClass" />
            <div>
              <h4 className="text-lg font-semibold text-[#1eb2a6]">Online Courses</h4>
              <p className="text-gray-600 w-fit">
                Learn Online From anywhere around the world. No matter where you
                are. you can learn from us 24/7. Through our online program you
                can learn about drawing easily and efficiently.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <div className="flex flex-col md:flex-row justify-between md:p-6 p-3 bg-gray-100 rounded-lg hover:bg-gray-300 duration-500 items-center gap-6">
            <img src={expert} alt="onlineClass" />
            <div>
              <h4 className="text-lg font-semibold text-[#1eb2a6]">Learn From Experts</h4>
              <p className="text-gray-600">
                Learn Online From anywhere around the world. No matter where you
                are. you can learn from us 24/7. Through our online program you
                can learn about drawing easily and efficiently.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <div className="flex flex-col md:flex-row justify-between md:p-6 p-3 bg-gray-100 rounded-lg hover:bg-gray-300 duration-500 items-center gap-6">
            <img src={certificate} alt="onlineClass" />
            <div>
              <h4 className="text-lg font-semibold text-[#1eb2a6]">Get Your Certificate
              </h4>
              <p className="text-gray-600">
                Learn Online From anywhere around the world. No matter where you
                are. you can learn from us 24/7. Through our online program you
                can learn about drawing easily and efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineEducation;
