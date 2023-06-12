import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Title from "../../../../../Shared/Title/Title";
// TODO: Use swal to promote admin and instructors

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    });
    return res.json();
  });
  refetch()

  const handleAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do You Want To Promote ${user.name} To Admin You won't be able to revert this!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Promote Him!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              refetch();
              Swal.fire(
                "Admin!",
                `${user.name} Has been promoted to Admin`,
                "success"
              );
            }
          });
      }
    });
  };
  const handleInstructor = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do You Want To Promote ${user.name} To Instructor You won't be able to revert this!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Promote Him!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              refetch();
              Swal.fire(
                "Instructor!",
                `${user.name} Has been promoted to Instructor`,
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div>
      <Title
        topHeader={"Manage Users"}
        bottomTitle={
          "In here an admin can control each users role.Admin can promote anyone to Admin & Instructor"
        }
      ></Title>
      <div className="overflow-x-auto">
        <table className="table rounded-md table-zebra bg-blue-100">
          {/* head */}
          <thead>
            <tr>
              <th>no.</th>
              <th>userImg</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin</th>
              <th>Instructor</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    onClick={() => handleAdmin(user)}
                    className={
                      user.role === "admin"
                        ? `btn-disabled px-3 py-1  text-xs border-2 border-green-500 text-green-500 hover:text-white duration-500 hover:bg-green-500`
                        : `px-3 py-1  text-xs border-2 border-green-500 text-green-500 hover:text-white duration-500 hover:bg-green-500`
                    }
                  >
                    Admin
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleInstructor(user)}
                    className={
                      user.role === "admin"
                        ? `btn-disabled px-3 py-1  text-xs border-2 border-yellow-500 text-yellow-500 hover:text-white duration-500 hover:bg-yellow-500`
                        : user.role === "instructor"
                        ? `btn-disabled px-3 py-1  text-xs border-2 border-yellow-500 text-yellow-500 hover:text-white duration-500 hover:bg-yellow-500`
                        : `px-3 py-1  text-xs border-2 border-yellow-500 text-yellow-500 hover:text-white duration-500 hover:bg-yellow-500`
                    }
                  >
                    instructor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
