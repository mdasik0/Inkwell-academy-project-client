import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { GoogleLogin } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    GoogleLogin()
      .then((result) => {
        console.log(result);
        Swal.fire("Welcome!", "Google Login succesfull", "success");
      })
      .then((err) => console.error(err));
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
