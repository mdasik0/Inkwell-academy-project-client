import { useQuery } from "@tanstack/react-query";
import Title from "../../../../../Shared/Title/Title";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const { data: classes = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/classes");
    return res.json();
  });

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
              Swal.fire(
                "Approved!",
                `Class Have been Approved`,
                "success"
              );
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
              Swal.fire(
                "Denied!",
                `Class Have been Denied`,
                "error"
              );
            }
          });
      }
    });
  };

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
              <img src={item.classImg} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.className}</h2>
              <div className="text-sm font-semibold">
                <h4>Instructor: {item.name}</h4>
                <h4>Email: {item.email}</h4>
                <h4>Seats: {item.seats}</h4>
                <h4>Price: ${item.price}</h4>
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
                    item.status === "denied"
                      ? `btn-disabled px-4 py-2 text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white duration-500 text-sm font-semibold w-full`
                      : `px-4 py-2 text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white duration-500 text-sm font-semibold w-full`
                  }
                >
                  Deny
                </button>
                <button className="px-4 py-2 text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white duration-500 text-sm font-semibold w-full">
                  Review
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageClasses;
