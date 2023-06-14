import { motion } from "framer-motion";
const PayHistoryCard = ({ data }) => {
  const fullDate = data.date;
  const date = fullDate.slice(0, 10);
  const time = fullDate.slice(11, 19);
  return (
    <div className="p-4  border-2 overflow-hidden shadow-xl border-blue-500 rounded-2xl">
      <div className="flex gap-4">
        <div>
          <motion.img
            animate={{ scale: [0, 1.1, 1] }}
            transition={{ delay: 1, duration: 0.9 }}
            className="h-20 border-2 border-blue-500 shadow-xl w-20 object-cover rounded-2xl"
            src={data.classImg}
            alt=""
          />
        </div>
        <div className="overflow-hidden">
          <div className="overflow-hidden">
            <motion.h2
              animate={{ y: [100, 0] }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="font-semibold w-64 text-xl"
            >
              {data.className}
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h5
              animate={{ y: [100, 0] }}
              transition={{ delay: 0.8, duration: 0.9 }}
              className="text-xs font-semibold text-slate-400"
            >
              {data.classId}
            </motion.h5>
          </div>
        </div>
      </div>
      <div className="pt-3">
        <div className="overflow-hidden">
          <motion.h5
            animate={{ y: [100, 0] }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="text-xs font-semibold text-slate-500"
          >
            Transaction ID :{data.TransactionId}
          </motion.h5>
        </div>
        <div className="flex pt-1 justify-between">
          <div className="overflow-hidden">
            <motion.h5 animate={{ y: [100, 0] }}
              transition={{ delay: 0.5, duration: 0.9 }} className="text-xs font-semibold text-slate-500">
              PaymentDate: {date}
            </motion.h5>
          </div>
          <div className="overflow-hidden">
            <motion.h5 animate={{ y: [100, 0] }}
              transition={{ delay: 0.5, duration: 0.9 }} className="text-xs font-semibold text-slate-500">
              Time: {time}
            </motion.h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayHistoryCard;
