import { motion } from "framer-motion";
const EnrollCard = ({data}) => {
    return (
        <div data-aos="fade-right"  data-aos-duration="1000" data-aos-easing="linear" className="flex overflow-hidden border-2 border-blue-500 rounded-xl">
            <motion.img animate={{x:[-500,1,0]}} transition={{delay:0.5,duration:0.8}} className="h-[200px] w-[180px] rounded-l-xl object-cover" src={data.classImg} alt="" />
            <div className="p-4 overflow-hidden flex flex-col justify-evenly rounded-r-xl bg-white ">
                <motion.h3 animate={{x:[500,1,0]}} transition={{delay:0.9,duration:0.9}} className="text-xl font-semibold ">{data.className}</motion.h3>
                <motion.div animate={{x:[500,1,0]}} transition={{delay:1,duration:1.1}}  className="text-sm font-semibold">
                    <div>Course progress:</div>
                <progress className=" progress progress-info w-56" value="0" max="100"></progress> 0%
                </motion.div>
            </div>
        </div>
    );
};

export default EnrollCard;