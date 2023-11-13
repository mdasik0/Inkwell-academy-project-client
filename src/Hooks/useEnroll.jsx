import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const useEnroll = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleSelectedClass = (item) => {
    if (user) {
      const selectedClass = {
        className: item.className,
        classImg: item.classImg,
        instructorEmail: item.email,
        email: user?.email,
        name: item.name,
        price: item.price,
        seats: item.seats,
        classId: item._id,
        payment: "pending",
      };
      axios
        .post(
          `https://b7a12-summer-camp-server-side-mdasik0.vercel.app/selectedClass`,
          selectedClass
        )

        .then((data) => {
          if (data?.data?.insertedId) {
            Swal.fire({
              title: "nice!!!",
              text: "You have success fully selected this class",
              icon: "success",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Go to selceted Classes",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate("/dashboard/selectedClasses");
              }
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Sign In First!!!",
        text: "You are not signed in",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to Sign in Page",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signIn");
        }
      });
    }
  };
  return { handleSelectedClass };
};

export default useEnroll;
