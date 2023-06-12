import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { GoogleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    GoogleLogin()
    .then((result) => {
      const loggedUser = result.user;
      const SavedUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
        photo: loggedUser.photoURL,
        role: 'student'
      };
      fetch(`http://localhost:5000/users`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
        body: JSON.stringify(SavedUser),
      });
      Swal.fire("Welcome!", "Google Login succesful", "success");
      navigate(from, { replace: true });
    })
    .catch((error) => console.error(error));
  };

  return (
    <div
      onClick={handleGoogleLogin}
      className="btn btn-circle bg-blue-500 text-white hover:text-black"
    >
      <FaGoogle></FaGoogle>
    </div>
  );
};

export default SocialLogin;
