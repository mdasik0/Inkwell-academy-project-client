import Title from "../../../Shared/Title/Title";
import { FaAngleRight } from 'react-icons/fa';
const ExtraSection = () => {
  return (
    <div className="">
      <Title
        topHeader={"Newsletter Subscription"}
        bottomTitle={
          "In here we have a newsletter service to keep our student touched with artistic"
        }
      ></Title>
      <div className="box-border flex md:flex-row flex-col bg-no-repeat md:p-16 md:h-fit h-[130vh] rounded-xl my-10 bg-cover bg-[url('https://img.freepik.com/free-vector/abstract-dark-blue-vector-futuristic-digital-grid-background_53876-110562.jpg?w=900&t=st=1686738058~exp=1686738658~hmac=fef7356d9f2602e98f0d3c80a6ffc49faab17fcc2933978c2b0e48da1a1a9c41')]">
        <div className=" md:w-1/2 w-full p-2 md:p-6">
          <h1 className="text-white leading-[75px] font-bold text-5xl">
            Join Our <br /> NewsLetter
          </h1>
          <h5 className="text-slate-300 text-sm mt-6">
            Newsletters keep students informed about upcoming art classes,
            workshops, or events. They can learn about new courses being
            offered, registration deadlines, and any changes.

          </h5>
          <div className="border-2 relative mt-2 border-blue-500 md:w-2/3 w-full p-2 rounded-full ">
            <input className="bg-transparent pl-3" type="email" placeholder="your email here" id="" />
            <button className="btn-sm btn btn-circle absolute right-1 top-1 text-black"><FaAngleRight></FaAngleRight></button>
          </div>
          <div className="flex text-sm text-white gap-3 mt-3">
            <h2 className="text-sm font-semibold text-black bg-green-300 px-3 rounded-full">
              01
            </h2>
            Information about newly Published Courses
          </div>
          <div className="flex text-sm text-white gap-3 mt-3">
            <h2 className="text-sm font-semibold text-black bg-blue-300 px-3 rounded-full">
              02
            </h2>
            Tutorials and step by step guides
          </div>

          <div className="flex text-sm text-white gap-3 mt-3">
            <h2 className="text-xs font-semibold text-black bg-red-300 px-3 rounded-full">
              03
            </h2>
            Exclusive Promotions Offers and Many more...
          </div>
        </div>

        <div className="relative w-1/2">
          <img
            data-aos="fade-right"
            data-aos-duration="300"
            className="object-cover  absolute rounded-xl md:w-40 md:h-40 w-36 h-36 z-20 md:top-[130px]  md:left-[250px]  top-[50px] left-[60px]"
            src="https://img.freepik.com/premium-vector/beautiful-eyes-drawn-using-wpap-art-style-pop-art-vector-illustration_675380-170.jpg"
            alt=""
          />
          <img
            data-aos="fade-left"
            data-aos-duration="900"
            className="absolute object-cover rounded-xl md:w-52 w-32 md:h-36 h-32  md:bottom-[70px] md:z-10 md:left-[90px]   top-[260px] -right-[40px]   "
            src="https://media.istockphoto.com/id/1190200652/photo/the-painter-hands.jpg?b=1&s=612x612&w=0&k=20&c=4z4vgU0A1PtdBHZ89mmvU6PwIqnvYaxP04YpY4b5ehg="
            alt=""
          />
          <img
            data-aos="fade-right"
            data-aos-duration="1200"
            className=" rounded-xl object-cover absolute md:w-40 w-30 h-32 md:h-56  md:top-[45px] md:right-[40px]  -right-[140px] top-[180px]"
            src="https://img.freepik.com/free-photo/blue-paint-textured-background-aesthetic-diy-experimental-art_53876-126195.jpg"
            alt=""
          />
          <div
            data-aos="fade-left"
            data-aos-duration="600"
            className="bg-white w-fit bg-opacity-90 top-[100px] -right-[140px] absolute md:left-[95px] z-30 md:top-[140px] p-1 flex items-center gap-3 rounded-full"
          >
            <img
              className="w-8 h-8 rounded-full object-cover"
              src="https://i.ibb.co/xhhxTCD/20221118-095825-2.jpg"
              alt=""
            />
            <h4 className="font-semibold pr-4">Md Asik</h4>
          </div>
          <div data-aos='fade-right' data-aos-duration='500' className="bg-white md:block hidden  p-2 rounded-full absolute bottom-[60px] z-50 right-0 bg-opacity-90 ">
            <h4 className="font-semibold px-4 ">
              &#34;inspire others, and let your art evolve&#34;
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
