import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Swal from "sweetalert2";
import Title from "../../../../../Shared/Title/Title";

const ManageUsers = () => {
  const [disableAdmin, setDisableAdmin] = useState([]);
  const [disableInstructor, setDisableInstructor] = useState([]);

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleAdmin = (user, index) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire(
            "Congratulations!",
            `${user.name} have been promoted to Admin`,
            "success"
          );
          //    setDisabledButtons([...disabledButtons, buttonIndex]);
          setDisableAdmin([...disableAdmin, index]);
        }
      });
  };
  const handleInstructor = (user, index) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire(
            "Congratulations!",
            `${user.name} have been promoted to instructor`,
            "success"
          );
          setDisableInstructor([...disableInstructor, index]);
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
                    disabled={disableAdmin.includes(index)}
                    onClick={() => handleAdmin(user, index)}
                    className="btn text-xs bg-green-300 btn-sm"
                  >
                    Admin
                  </button>
                </td>
                <td>
                  <button
                    disabled={disableInstructor.includes(index)}
                    onClick={() => handleInstructor(user, index)}
                    className="btn text-xs bg-red-300 btn-sm"
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
