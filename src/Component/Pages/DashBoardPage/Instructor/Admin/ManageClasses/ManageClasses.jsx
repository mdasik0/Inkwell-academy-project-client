import { useQuery } from "@tanstack/react-query";
import Title from "../../../../../Shared/Title/Title";
import Swal from "sweetalert2";
import { useState } from "react";

const ManageClasses = () => {
  const { data: classes = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/classes",{
      headers:{
        Authorization : `Bearer ${localStorage.getItem("access-token")}`
      }
    });
    return res.json();
  });
  //   all modal data starts here
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");

  const handleButtonClick = (id) => {
    setShowModal(true);
    setId(id);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setId("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const reviewText = form.review.value;
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to send this review!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, send it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const data = { review : reviewText};
        console.log(data);
        fetch(`http://localhost:5000/classes/review/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              refetch();
              Swal.fire(
                "Sent!",
                `Review has been set to the Instructor`,
                "success"
              );
            }
          });
      }
    });
    setShowModal(false);
    setId("");
  };

  //   modal data ends here

  const handleApprove = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "If you Approve this, you won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/classes/approve/${item._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              refetch();
              Swal.fire("Approved!", `Class Have been Approved`, "success");
            }
          });
      }
    });
  };
  const handleDeny = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "If you Deny this, you won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Deny it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/classes/deny/${item._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              refetch();
              Swal.fire("Denied!", `Class Have been Denied`, "error");
            }
          });
      }
    });
  };

  //   review modal

  //   review modal

  return (
    <div>
      <Title
        topHeader={"Manage Classes"}
        bottomTitle={
          "In here we see all the classes added by Instructors. Admin Approve and deny the classes here and also he can give reviews"
        }
      ></Title>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {/* row 1 */}
        {classes.map((item) => (
          <div
            key={item._id}
            className="card md:w-96 w-full bg-base-100 shadow-xl"
          >
            <figure className="h-[250px]">
              <img src={item.classImg} alt="images of classes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.className}</h2>
              <div className="text-sm font-semibold">
                <h4>Instructor: {item.name}</h4>
                <h4>Email: {item.email}</h4>
                <h4>Seats: {item.seats}</h4>
                <h4>Price: ${item.price}</h4>
                <h4>review: {item?.review}</h4>
                <h4>
                  Status:{" "}
                  <span
                    className={
                      item.status === "pending"
                        ? `text-yellow-500`
                        : item.status === "approved"
                        ? `text-green-600`
                        : `text-red-500`
                    }
                  >
                    {item.status}
                  </span>
                </h4>
              </div>
              <div className="card-actions justify-between">
                <button
                  onClick={() => handleApprove(item)}
                  className={
                    item.status === "approved" || item.status === "denied"
                      ? "btn-disabled px-4 py-2 text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-white duration-500 text-sm font-semibold w-full "
                      : `px-4 py-2 text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-white duration-500 text-sm font-semibold w-full `
                  }
                >
                  Approve
                </button>
                <button
                  onClick={() => handleDeny(item)}
                  className={
                    item.status === "approved" || item.status === "denied"
                      ? `btn-disabled px-4 py-2 text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white duration-500 text-sm font-semibold w-full`
                      : `px-4 py-2 text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white duration-500 text-sm font-semibold w-full`
                  }
                >
                  Deny
                </button>

                {/* TODO: add a review function where if review is clicked a modal will open and with input text and submit and patch once again */}
                <button
                  onClick={() => handleButtonClick(item._id)}
                  className={ !item.review || item.status === 'approved' || item.status === 'denied' ? `px-4 py-2 text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white duration-500 text-sm font-semibold w-full` : `btn-disabled px-4 py-2 text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white duration-500 text-sm font-semibold w-full`   }
                >
                  Review
                </button>
              </div>
              {/* modal */}

              {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="bg-white w-1/3 rounded-xl p-4">
                    <h2 className="text-xl font-bold mb-2">Review</h2>
                    {/* input */}
                    
                    <form onSubmit={handleSubmit}>
                      <div className="w-full">
                        <div className="w-full">
                          <input
                            type="text"
                            name="review"
                            placeholder="Write your review here"
                            className="w-full h-36 input input-bordered"
                          />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <input
                          className="text-sm font-semibold px-4 py-2 bg-blue-600 text-white rounded"
                          type="submit"
                          value="Submit"
                        />
                        <button
                          onClick={handleCloseModal}
                          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4"
                        >
                          Close
                        </button>
                      </div>
                    </form>
                    {/* input */}
                  </div>
                </div>
              )}

              {/* modal */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageClasses;
