import { useQuery } from "@tanstack/react-query";
import Title from "../../../../Shared/Title/Title";
import { useState } from "react";

const MyClasses = () => {
  const { data: classes = [] } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/classes", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    });
    return res.json();
  });
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");

  const handleButtonClick = (text) => {
    setModalText(text);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalText("");
  };
  return (
    <div className="md:mb-10 mb-6">
      <Title
        topHeader={"My classes"}
        bottomTitle={"All the classes Added by this instructor are showen here"}
      ></Title>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {/* card */}
        {classes.map((item) => (
          <div
            key={item._id}
            className="h-fit rounded-xl md:w-[320px] mx-3 bg-slate-200"
          >
            <div className="h-[220px] rounded-xl bg-yellow-100">
              <img
                className="h-full rounded-xl w-full object-cover"
                src={item.classImg}
                alt=""
              />
            </div>
            <div className="p-4 h-full">
              <h2 className="text-xl font-semibold mb-3">{item.className}</h2>
              <div className="text-xs font-semibold flex flex-col gap-1">
                <h4>Available Seats: {item.seats}</h4>
                <h4>Total Enrolled Students: {item?.enroll || 0}</h4>
                <h4>Price:${item.price}</h4>
                <h4
                  className={
                    item.status === "pending"
                      ? `text-yellow-500`
                      : item.status === "approved"
                      ? `text-green-600`
                      : `text-red-500`
                  }
                >
                  <span className="text-black">Status</span>: {item.status}
                </h4>
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() =>
                    handleButtonClick(item?.review || "No review Found")
                  }
                  className="px-3 py-1 border-2 text-red-500 border-red-500 rounded-lg text-sm font-bold mt-2 hover:bg-red-400 hover:text-white duration-300"
                >
                  FeedBack
                </button>

                <button className="px-3 py-1 border-2 border-black rounded-lg text-sm font-bold mt-2 hover:bg-slate-900 hover:text-white duration-300">
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* card Ends */}
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-1/2 rounded p-4">
            <h2 className="text-xl font-bold mb-2">Review</h2>
            <p>{modalText}</p>
            <button
              onClick={handleCloseModal}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyClasses;
