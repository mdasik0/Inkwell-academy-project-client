import { FaMoneyCheckAlt, FaRegTrashAlt } from "react-icons/fa";
import Title from "../../../Shared/Title/Title";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";

const MySelectedClasses = () => {
  // selectedClass
  const { user } = useContext(AuthContext);



  const {
    data: datas = [],
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryFn: async () => {
      const data = await axios(
        `https://b7a12-summer-camp-server-side-mdasik0.vercel.app/selectedClass/${user?.email}`
      );
      return data?.data;
    },
    queryKey: ["data"],
  });

  if (isLoading)
    return <span className="loading loading-spinner loading-lg"></span>;

  if (error) return "An error has Occurred";



  

  // handle dElete data
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://b7a12-summer-camp-server-side-mdasik0.vercel.app/DeletedSelectedClass/${id}`)
        .then(data => {
          if(data?.data?.deletedCount){
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            refetch()
          }
        })
       
        
      }
    });
  };

  

  return (
    <div className="mb-10">
      <Helmet>
        <title>Inkwell | MySelectedClass</title>
      </Helmet>
      <Title
        topHeader={"My Selected Classes"}
        bottomTitle={
          "All the selected Classes.Pending for payment or get Deleted"
        }
      ></Title>
      <div className="overflow-x-auto">
        <table className="table rounded-md table-zebra bg-blue-100">
          {/* head */}
          <thead>
            <tr>
              <th>no.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Pay</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {datas.map((data, index) => (
              <tr key={data._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-20 h-20">
                      <img
                        src={data.classImg}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{data.className}</td>
                <td>{data.name}</td>
                <td>${data.price}</td>
                <td>
                  <Link to={`/dashboard/payment/${data._id}`}>
                    <button className="btn btn-circle text-xl bg-green-400 btn-sm">
                      <FaMoneyCheckAlt></FaMoneyCheckAlt>
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(data._id)}
                    className="btn btn-circle text-xl bg-red-400 btn-sm"
                  >
                    <FaRegTrashAlt></FaRegTrashAlt>
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

export default MySelectedClasses;
